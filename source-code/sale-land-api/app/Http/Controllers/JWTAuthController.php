<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use JWTAuth;

class JWTAuthController extends Controller
{
    /**
     * Validate the authenticate request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return void
     */
    protected function validateAuthenticate(Request $request)
    {
        $this->validate($request, [
            'email'     => 'required|string',
            'password'  => 'required|string',
        ]);
    }
    /**
     * Get the needed authorization credentials from the request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    protected function credentials(Request $request)
    {
        return $request->only('email', 'password');
    }
    /**
     * Handle a authenticate request to the api.
     * @param \Illuminate\Http\Request $request
     * @return json
     */
    public function authenticate(Request $request)
    {
        $this->validateAuthenticate($request);
        try {
            if(!$token = JWTAuth::attempt($this->credentials($request)))
            {
                return response()->json([
                    'error' => 'invalid_credentials'
                ], 401);
            }
        } catch (JWTException $e) {
            return response()->json([
                'error' => 'could_not_create_token'
            ], 500);
        }
        return response()->json([
            'token' => $token
        ], 200);
    }
}
