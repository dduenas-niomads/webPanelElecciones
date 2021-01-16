<?php

namespace App\Http\Middleware;

use Closure;
use App\Result;
use Illuminate\Support\Facades\Auth;

class IsVotedMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (Result::where('voter_id', Auth::id())->count() > 0) 
            return response()->json([
                'status' => 'failed',
                'message' => 'Solo puedes votar una vez.'
            ]);

        return $next($request);
    }
}
