<?php

namespace App\Http\Controllers;

use Barryvanveen\Lastfm\Lastfm;

class DashboardController extends Controller
{
    protected $lastfm;

    public function __construct(Lastfm $lastfm)
    {
        $this->lastfm = $lastfm;
    }
    public function index()
    {
        try {

            // Fetch top tracks
            $topTracks = $this->lastfm->userTopTracks('darlingtonhp')->get();

            // Fetch latest music
            $tracks = $this->lastfm->userRecentTracks('AnyUsername')->get();

            // Pass the data to the view
            return inertia('Dashboard', [
                'topTracks' => $topTracks,
                'tracks' => $tracks,
            ]);
        } catch (\Exception $e) {
            // Handle exception
            return inertia('Dashboard', [
                'error',
            ]);
        }
    }
}
