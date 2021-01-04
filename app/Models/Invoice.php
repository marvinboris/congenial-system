<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    use HasFactory;

    protected $fillable = [
        'customer_id', 'no', 'date', 'paid_amount', 'total_amount', 'discount', 'tax', 'photo'
    ];

    public function tasks()
    {
        return $this->belongsToMany('App\Models\Task', 'invoice_task')->withPivot(['price', 'quantity']);
    }

    public function customer()
    {
        return $this->belongsTo('App\Models\Customer');
    }

    public static function no()
    {
        $invoices = self::count() + 1;

        $zeros = '';
        for ($i = 6; $i < 0; $i--) {
            if ($invoices < pow(10, $i)) $zeros .= '0';
        }

        return 'INV' . $zeros . $invoices . 'BS';
    }
}
