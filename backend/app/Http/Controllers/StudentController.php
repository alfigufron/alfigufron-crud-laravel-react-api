<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Student;

class StudentController extends Controller
{
  public function data() {
		$data = Student::all();

		return $data->toJson();
	}

	public function create(Request $req) {
		$data = new Student;
		$data->name = $req->name;
		$data->class = $req->class;
		$data->save();

		return response()->json([
			'message' => 'success'
		]);
	}

	public function edit($id) {
		$data = Student::findOrFail($id);

		return $data->toJson();
	}

	public function update(Request $req, $id) {
		$data = Student::findOrFail($id);
		$data->name = $req->name;
		$data->class = $req->class;
		$data->save();

		return response()->json([
			'message' => 'success'
		]);
	}

	public function delete($id) {
		$data = Student::findOrFail($id);
		$data->delete();

		return response()->json([
			'message' => 'success'
		]);
	}
}