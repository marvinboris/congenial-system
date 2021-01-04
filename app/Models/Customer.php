<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;

    protected $directory = '/customers/';

    protected $fillable = [
        'name', 'address', 'country', 'phone', 'email', 'logo',
    ];

    public function getLogoAttribute($value)
    {
        return $value ? $this->directory . $value : null;
    }
}
