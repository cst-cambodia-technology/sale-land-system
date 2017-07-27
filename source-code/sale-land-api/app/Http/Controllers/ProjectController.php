<?php

namespace App\Http\Controllers;

use App\Project;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use JWTAuth;

class ProjectController extends Controller
{
    /**
     * Get a validator for an incoming project request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Contracts\Validation\Validator
     */
    public function validator(Request $request)
    {
        $this->validate($request, [
            'name'     => 'required|string|max:100',
            'description'  => 'string|max:4000',
        ]);
    }

    /**
     * Retrieve a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (! $auth = JWTAuth::parseToken()->authenticate())
        {
            return response()->json(['error' => 'user_authenticate_not_found'], 404);
        }

        $projects =  Project::all();

        return response()->json($projects);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if (! $auth = JWTAuth::parseToken()->authenticate())
        {
            return response()->json(['error' => 'user_authenticate_not_found'], 404);
        }

        $this->validator($request);

        $project = new Project();
        $project->name          =   $request->input('name');
        $project->description   =   $request->input('description');
        $project->createdBy     =   $auth->id;
        $project->modifiedBy    =   $auth->id;
        $project->save();

        return response()->json($project);
    }

    /**
     * Retrieve the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        if (! $auth = JWTAuth::parseToken()->authenticate())
        {
            return response()->json(['error' => 'user_authenticate_not_found'], 404);
        }

        try {
            $project = Project::findOrFail($id);

            return response()->json($project);
        } catch (ModelNotFoundException $e){
            return response()->json($e->getMessage(),404);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        if (! $auth = JWTAuth::parseToken()->authenticate())
        {
            return response()->json(['error' => 'user_authenticate_not_found'], 404);
        }

        $this->validator($request);

        try {
            $project = Project::findOrFail($id);
            $project->name          =   $request->input('name');
            $project->description   =   $request->input('description');
            $project->modifiedBy    =   $auth->id;
            $project->save();

            return response()->json($project);
        } catch (ModelNotFoundException $e){
            return response()->json($e->getMessage(),404);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
