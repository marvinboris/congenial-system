<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $products = [
            [
                'name' => 'Limarket Cameroon',
                'description' => 'E-commerce platform',
                'popular' => 0,
                'details' => 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in',
                'logo' => 'logo limarket@2x.png',
                'color' => 'limarket',
                'link' => 'https://limarket.net'
            ],
            [
                'name' => 'LIMO',
                'description' => 'Liyeplimal Investment System',
                'popular' => 1,
                'details' => 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in',
                'logo' => 'LOGO LIMO@2x.png',
                'color' => 'limo',
                'link' => 'https://www.liyeplimal.net'
            ],
            [
                'name' => 'SIMBCOIN (SMB)',
                'description' => 'GIT Real estate based cryptocurrency',
                'popular' => 0,
                'details' => 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in',
                'logo' => 'PIECE-OR-ET-ARGENT-1 copie@2x.png',
                'color' => 'simbcoin',
                'link' => 'https://simbcoin.net'
            ],
            [
                'name' => 'Hotel Management',
                'description' => 'System + Website',
                'popular' => 0,
                'details' => 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in',
                'logo' => 'LOGO-SIMBCITY-OK@2x.png',
                'color' => 'simbcity',
                'link' => '#'
            ],
            [
                'name' => 'African Crypto Media',
                'description' => 'Web Television',
                'popular' => 0,
                'details' => 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in',
                'logo' => 'LOGO AFRICAN CRYPTO MEDIA@2x.png',
                'color' => 'acm',
                'link' => '#'
            ],
            [
                'name' => 'Simtrex',
                'description' => 'Crypto currencies trading platform',
                'popular' => 0,
                'details' => 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in',
                'logo' => 'LOGO-Simtrex@2x.png',
                'color' => 'simtrex',
                'link' => 'https://simtrex.net'
            ],
            [
                'name' => 'GIT Trading Academy',
                'description' => 'Our Trading Academy',
                'popular' => 0,
                'details' => 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in',
                'logo' => 'LOGO-GIT-TRADING-ACADEMY@2x.png',
                'color' => 'academy',
                'link' => 'https://gitacademy.net'
            ],
            [
                'name' => 'Restaurant Liyeplimal',
                'description' => 'Our Restaurant',
                'popular' => 0,
                'details' => 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in',
                'logo' => 'LOGO-RESTAURANT-LIYEPLIMAL@2x.png',
                'color' => 'restaurant',
                'link' => '#'
            ],
            [
                'name' => 'Workoo',
                'description' => 'Workoo.net',
                'popular' => 0,
                'details' => 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in',
                'logo' => 'LOGO WORKOO@2x.png',
                'color' => 'workoo',
                'link' => 'https://workoo.net'
            ],
            [
                'name' => 'Liportal',
                'description' => 'E-commerce platform',
                'popular' => 0,
                'details' => 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in',
                'logo' => 'Plan de travail 1@4x@2x.png',
                'color' => 'liportal',
                'link' => 'https://liportal.net'
            ],
            [
                'name' => 'King Chicken',
                'description' => 'King Chicken',
                'popular' => 0,
                'details' => 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in',
                'logo' => 'IMG-20200219-WA0046 2@2x.png',
                'color' => 'chicken',
                'link' => '#'
            ],
            [
                'name' => 'Limarket Mada',
                'description' => 'E-commerce platform',
                'popular' => 0,
                'details' => 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in',
                'logo' => 'LOGO LIMARKET MADAGASCAR POUR SITE@2x.png',
                'color' => 'limarketmada',
                'link' => 'https://limarketmada.net'
            ],
        ];

        foreach ($products as $product) {
            Product::create($product);
        }
    }
}
