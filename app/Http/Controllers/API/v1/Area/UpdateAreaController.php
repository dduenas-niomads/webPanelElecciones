<?php

namespace App\Http\Controllers\API\v1\Area;

use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Util;
use App\Area;

class UpdateAreaController extends Controller
{
    public function __invoke(Request $request, $id)
    {
    	$this->validateRequest($request, $id);
    	$this->updateArea($request, $id);

    	$result = [
    		'status' => 'success',
    		'message'=> 'Área actualizada exitosamente'
    	];

    	return response()->json($result);
    }

    private function updateArea($request, $id)
    {
    	$area = Area::find($id);
    	$area->name = $request->name;
    	$area->code = $request->code;
    	$area->save();
    }

    private function validateRequest($request, $id)
    {
    	$this->validate($request, [
    		'name' => [
                'required', 
                Rule::unique('area')->ignore($id)->where(function($query){
                    $query->where('election_id', Util::getCurrentElection());
                })
            ],
    		'code' => 'nullable'
    	]);
    }
}
