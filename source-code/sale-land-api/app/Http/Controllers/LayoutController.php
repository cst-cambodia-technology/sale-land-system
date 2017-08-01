<?php

namespace App\Http\Controllers;

use App\Layout;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use JWTAuth;

class LayoutController extends Controller
{
    /**
     * Get a validator logic for an incoming store layouts request.
     *
     * @return array
     */
    public function validatorLogic()
    {
        return  [
            'layouts'                 =>  'required|array',
            'layouts.*.projectId'     =>  'required|integer',
            'layouts.*.prefix'        =>  'required|string|max:10',
            'layouts.*.no'            =>  'required|integer',
            'layouts.*.label'         =>  'required|string|max:100',
            'layouts.*.size'          =>  'string|nullable|max:100',
            'layouts.*.price'         =>  'numeric|nullable',
            'layouts.*.description'   =>  'string|nullable|max:4000',
            'layouts.*.status'        =>  ['required', Rule::in(['Open', 'Blocked', 'Reserved', 'Closed'])]
        ];
    }

    /**
     * Get a validator for an incoming update layout request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Contracts\Validation\Validator
     */
    public function validator(Request $request)
    {
        $this->validate($request, [
            'projectId'     =>  'required|integer',
            'prefix'        =>  'required|string|max:10',
            'no'            =>  'required|integer',
            'label'         =>  'required|string|max:100',
            'size'          =>  'string|nullable|max:100',
            'price'         =>  'numeric|nullable',
            'description'   =>  'string|nullable|max:4000',
            'status'        =>  ['required', Rule::in(['Open', 'Blocked', 'Reserved', 'Closed'])]
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

        $layouts =  Layout::with('project')->get();

        return response()->json($layouts);
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

        Validator::make($request->all(), $this->validatorLogic())->validate();

        $layouts    =   [];
        $items      =   $request->input('layouts');

        foreach ($items as $item)
        {
            $layout             =   new Layout();
            $layout->projectId  =   $item['projectId'];
            $layout->prefix     =   $item['prefix'];
            $layout->no         =   $item['no'];
            $layout->label      =   $item['label'];
            $layout->size       =   $item['size'];
            $layout->price      =   $item['price'];
            $layout->description=   $item['description'];
            $layout->status     =   $item['status'];
            $layout->createdBy  =   $auth->id;
            $layout->modifiedBy =   $auth->id;
            $layout->save();
            $layouts[]          =   $layout;
        }

        return response()->json($layouts);
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
            $layout = Layout::findOrFail($id);

            return response()->json($layout);
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
            $layout             =   Layout::findOrFail($id);
            $layout->projectId  =   $request->input('projectId');
            $layout->prefix     =   $request->input('prefix');
            $layout->no         =   $request->input('no');
            $layout->label      =   $request->input('label');
            $layout->size       =   $request->input('size');
            $layout->price      =   $request->input('price');
            $layout->description=   $request->input('description');
            $layout->status     =   $request->input('status');
            $layout->modifiedBy =   $auth->id;
            $layout->save();

            return response()->json($layout);
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
