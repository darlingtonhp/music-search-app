<?php

namespace App\Http\Controllers;

use App\Models\Artist;
use App\Http\Requests\StoreArtistRequest;
use App\Http\Requests\UpdateArtistRequest;
use Barryvanveen\Lastfm\Lastfm;

class ArtistController extends Controller
{
    protected $lastfm;

    public function __construct(Lastfm $lastfm)
    {
        $this->lastfm = $lastfm;
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            // Fetch top artists for a user 
            $topArtists = $this->lastfm->userTopArtists('darlingtonhp')->get();

            // Pass the data to the view
            return inertia('ArtistIndex', [
                'topArtists' => $topArtists,
            ]);
        } catch (\Exception $e) {
            // Handle exception
            return inertia('ArtistIndex', [
                'error' => $e->getMessage(),
            ]);
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
    public function store(StoreArtistRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Artist $artist)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Artist $artist)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateArtistRequest $request, Artist $artist)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Artist $artist)
    {
        //
    }
}
