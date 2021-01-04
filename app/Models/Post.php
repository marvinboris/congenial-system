<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $directory = '/posts/';

    protected $fillable = [
        'poster_id', 'poster_type', 'title', 'body', 'photo', 'slug',
    ];

    public function poster()
    {
        return $this->morphTo();
    }

    public function getPhotoAttribute($value)
    {
        return $value ? $this->directory . $value : null;
    }
}
