<?php

namespace App\Http\Controllers\API\v1\Area;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Area;

class DeleteAreaController extends Controller
{
    public function __invoke($id)
    {
    	$area = Area::find($id);
    	$area->delete();


    	$result = [
    		'status' => 'success',
    		'message'=> 'Área eliminada exitosamente'
    	];

    	return response()->json($result);
    }
}
