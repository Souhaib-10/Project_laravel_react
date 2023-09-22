<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Student>
 */
class StudentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "nom" => fake()->lastName(),
            "prenom" => fake()->firstName(),
            "age" => fake()->numberBetween(18, 60),
            "number" => fake()->phoneNumber(),
            "email" => fake()->email(),
            "password" => fake()->password()
        ];
    }
}
