<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $directory = '/products/';

    protected $fillable = [
        'name', 'description', 'popular', 'details', 'logo', 'color', 'link'
    ];

    public function getLogoAttribute($value)
    {
        return $value ? $this->directory . $value : null;
    }
}
