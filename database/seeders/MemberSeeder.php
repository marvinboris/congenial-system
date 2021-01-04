<?php

namespace Database\Seeders;

use App\Models\Member;
use Illuminate\Database\Seeder;

class MemberSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $members = [
            [
                'first_name' => 'Emile Parfait',
                'last_name' => 'Simb',
                'job' => 'C.E.O - Founder & Crypto Trader',
                'quote' => 'Produce maximum investment income to a wide variety of our clients, using a management approach in the global.',
                'photo' => '1-67@2x.png',
                'social_media' => json_encode([
                    'facebook' => '#',
                    'linkedin' => '#',
                    'whatsapp' => '#',
                    'twitter' => '#',
                ])
            ],
            [
                'first_name' => 'Innocent',
                'last_name' => 'Pangsou',
                'job' => 'Director of Trading Department',
                'quote' => 'Produce maximum investment income to a wide variety of our clients, using a management approach in the global.',
                'photo' => '5.-innocent@2x.png',
                'social_media' => json_encode([
                    'facebook' => '#',
                    'linkedin' => '#',
                    'whatsapp' => '#',
                    'twitter' => '#',
                ])
            ],
            [
                'first_name' => 'Briand',
                'last_name' => 'Yungong',
                'job' => 'Director of IT Department',
                'quote' => 'Produce maximum investment income to a wide variety of our clients, using a management approach in the global.',
                'photo' => 'C360_2020-06-13-15-24-50-992@2x.png',
                'social_media' => json_encode([
                    'facebook' => '#',
                    'linkedin' => '#',
                    'whatsapp' => '#',
                    'twitter' => '#',
                ])
            ],
        ];

        foreach ($members as $member) {
            Member::create($member);
        }
    }
}
