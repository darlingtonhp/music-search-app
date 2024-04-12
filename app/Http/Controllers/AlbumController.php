<?php

namespace App\Http\Controllers;

use App\Models\Album;
use App\Http\Requests\StoreAlbumRequest;
use App\Http\Requests\UpdateAlbumRequest;
use Barryvanveen\Lastfm\Lastfm;

class AlbumController extends Controller
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
        // Retrieve top albums using Last.fm API
        $albums = $this->lastfm->userTopAlbums('AnyUsername')->get();

        // Return view with albums data
        return view('albums.index', compact('albums'));
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
    public function store(StoreAlbumRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Album $album)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Album $album)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateAlbumRequest $request, Album $album)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Album $album)
    {
        //
    }
}
