<?php

namespace App\Http\Controllers\API\v1\Area;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Util;
use App\Area;

class GetAreaController extends Controller
{
    public function __invoke()
    {
    	$election_id = Util::getCurrentElection();
    	return Area::where('election_id', $election_id)->get();
    }
}
