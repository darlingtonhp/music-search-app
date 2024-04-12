<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;
use GuzzleHttp\Exception\ClientException;

class GoogleAuthController extends Controller
{
    public function redirectToAuth()
    {
        return Socialite::driver('google')->redirect();
    }

    public function handleAuthCallback(Request $request)
    {
        try {
            $socialiteUser = Socialite::driver('google')->user();
        } catch (\Exception $e) {
            report($e);
            return redirect()->route('login')->with('error', 'An error occurred during sign in.');
        }

        $user = User::where('email', $socialiteUser->getEmail())->first();

        if (!$user) {
            $user = User::create([
                'name' => $socialiteUser->getName(),
                'email' => $socialiteUser->getEmail(),
                'google_id' => $socialiteUser->getId(),
                // You may add more user data here if needed
            ]);
        }

        auth()->login($user);

        // Check if user is authenticated after login
        if (auth()->check()) {
            return redirect()->route('dashboard');
        } else {
            return redirect()->route('login')->with('error', 'Unable to login after Google sign in.');
        }
    }
}
