<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Student::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validate the request data
        $validate = Validator::make($request->all(), [
            "nom" => "required",
            "prenom" => "required",
            "age" => "required",
            "email" => "required|email|unique:students",
            "password" => "required|min:8"
        ]);
        // If the validation fails, redirect the user back to the form with the validation errors
        if ($validate->fails()) {
            return response()->json([
                "status" => 422,
                "errors" => $validate->messages(),
            ], 422);
        }
        // Create a new student model instance
        $new_student = Student::create([
            'nom' => $request->nom,
            'prenom' => $request->prenom,
            'age' => $request->age,
            'email' => $request->email,
            'number' => $request->number,
            'password' => $request->password,
        ]);
        if ($new_student) {
            return response()->json([
                "status" => 200,
                "message" => "student created successfully"
            ], 200);
        } else {
            return response()->json([
                "status" => 500,
                "message" => "Something went wrong"
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
