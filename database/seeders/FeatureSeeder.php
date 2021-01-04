<?php

namespace Database\Seeders;

use App\Models\Feature;
use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;

class FeatureSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $features = [
            [
                'name' => 'Posts',
                'prefix' => 'posts',
            ],
            [
                'name' => 'Customers',
                'prefix' => 'customers',
            ],
            [
                'name' => 'Invoices',
                'prefix' => 'invoices',
            ],
            [
                'name' => 'Tasks',
                'prefix' => 'tasks',
            ],
            [
                'name' => 'Products',
                'prefix' => 'products',
            ],
            [
                'name' => "Members",
                'prefix' => 'members',
            ],
            [
                'name' => "Languages",
                'prefix' => 'languages',
            ],
            [
                'name' => "CMS",
                'prefix' => 'cms',
            ],
            [
                'name' => "Users",
                'prefix' => 'users',
            ],
            [
                'name' => "Roles",
                'prefix' => 'roles',
            ],
            [
                'name' => "Features",
                'prefix' => 'features',
            ],
        ];

        foreach ($features as $feature) {
            Feature::create($feature);
        }

        foreach (Role::all() as $role) {
            foreach (Feature::all() as $feature) {
                $role->features()->attach($feature->id, [
                    'access' => json_encode(['c', 'u', 'd'])
                ]);
            }
        }
    }
}
