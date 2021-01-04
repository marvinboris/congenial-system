<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;

    protected $directory = '/employees/';

    protected $fillable = [
        'first_name', 'last_name', 'gender', 'birthdate', 'country', 'job', 'address', 'phone', 'diploma', 'marital', 'number_children', 'languages', 'driving_licenses', 'email', 'photo', 'matricule'
    ];

    public function getPhotoAttribute($value)
    {
        return $value ? $this->directory . $value : null;
    }
}
