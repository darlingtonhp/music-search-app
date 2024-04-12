<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\GoogleAuthController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TrackController;
use App\Http\Controllers\AlbumController;
use App\Http\Controllers\ArtistController;
use Illuminate\Support\Facades\Route;


Route::redirect('/', '/dashboard');

Route::middleware(["auth", "verified"])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::resource('track',  TrackController::class);
    Route::get('track/my-tracks', [TrackController::class, 'myTracks'])->name('track.myTracks');
    Route::resource('album',  AlbumController::class);
    Route::resource('artist', ArtistController::class);
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('auth', [GoogleAuthController::class, 'redirectToAuth']);
Route::get('auth/callback', [GoogleAuthController::class, 'handleAuthCallback'])->name('google.callback');

require __DIR__ . '/auth.php';
