<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Passport\HasApiTokens; 

class Area extends Authenticatable
{
	use HasApiTokens;

    protected $table = 'area';
    protected $fillable = ['name', 'code', 'election_id'];
}
