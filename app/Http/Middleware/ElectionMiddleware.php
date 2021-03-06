<?php

namespace App\Http\Middleware;

use Closure;
use \App\Http\Controllers\Util;

class ElectionMiddleware
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

        if ($this->isElection($request)) {
            return response()->json([
                'status'  =>  'failed',
                'message'  => 'No puede agregar, actualizar o eliminar durante la elección.'
            ]);
        }

        return $next($request);
    }

    private function isElection($request)
    {
        return !$request->isMethod('get') && Util::getElectionStatus() == 2 && !$request->is('api/v1/election/*');
    }
}
