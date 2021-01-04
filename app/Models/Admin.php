<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class Admin extends Authenticatable
{
    use HasFactory, Notifiable, HasApiTokens;

    protected $directory = '/admins/';

    protected $fillable = [
        'name', 'email', 'password', 'phone', 'photo', 'language_id',
    ];

    protected $hidden = [
        'password',
    ];

    public function type()
    {
        return 'admin';
    }

    public function getPhotoAttribute($value)
    {
        return $value ? $this->directory . $value : null;
    }

    public function language()
    {
        return $this->belongsTo('App\Models\Language');
    }
}
