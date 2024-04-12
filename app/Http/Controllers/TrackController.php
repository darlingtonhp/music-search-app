<?php

namespace App\Http\Controllers;

use App\Models\Track;
use App\Http\Requests\StoreTrackRequest;
use App\Http\Requests\UpdateTrackRequest;
use Barryvanveen\Lastfm\Lastfm;


class TrackController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    protected $lastfm;

    public function __construct(Lastfm $lastfm)
    {
        $this->lastfm = $lastfm;
    }

    public function index()
    {
        try {
            // Get top tracks from Last.fm API using the package
            $topTracks = $this->lastfm->userTopTracks('darlingtonhp')->get();

            // Return an Inertia response with the track data
            return inertia('Track/Index', ['user' => auth()->user(), 'tracks' => $topTracks]);
        } catch (\Exception $e) {
            // Handle exceptions
            return inertia('Error', ['message' => 'Failed to fetch tracks from Last.fm']);
        }
    }




    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTrackRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Track $track)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Track $track)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTrackRequest $request, Track $track)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Track $track)
    {
        //
    }
}
