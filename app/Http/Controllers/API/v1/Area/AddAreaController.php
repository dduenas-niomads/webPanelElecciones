<?php

namespace App\Http\Controllers\API\v1\Area;

use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Util;
use App\Area;

class AddAreaController extends Controller
{
    public function __invoke(Request $request)
    {
    	$this->validateRequest($request);
    	$this->insertArea($request);

    	$result = [
    		'status' => 'success',
    		'message'=> 'Área agregada exitosamente'
    	];

    	return response()->json($result);
    }

    private function validateRequest($request)
    {
    	$this->validate($request, [
    		'name' => [
                'required', 
                Rule::unique('area')->where(function($query){
                    $query->where('election_id', Util::getCurrentElection());
                })
            ],
             'code' => 'nullable'
    	]);
    }

    private function insertArea($request)
    {
    	$area = $request->all();
    	$area['election_id'] = Util::getCurrentElection();
    	Area::create($area);
    }
}
