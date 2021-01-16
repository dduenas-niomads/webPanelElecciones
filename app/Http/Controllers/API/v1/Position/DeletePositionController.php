<?php

namespace App\Http\Controllers\API\v1\Position;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Position;

class DeletePositionController extends Controller
{
    public function __invoke($id)
    {
    	$position = Position::find($id);
    	$position->delete();


    	$result = [
    		'status' => 'success',
    		'message'=> 'Posición eliminada exitosamente'
    	];

    	return response()->json($result);
    }
}
