<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', 'description',
    ];

    public function invoices()
    {
        return $this->belongsToMany('App\Models\Invoice', 'invoice_task')->withPivot(['price', 'quantity']);
    }
}
