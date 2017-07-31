<?php

namespace App\Http\Controllers;

use App\Seller;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use JWTAuth;

class SellerController extends Controller
{
    /**
     * Get a validator for an incoming seller request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Contracts\Validation\Validator
     */
    public function validator(Request $request)
    {
        $this->validate($request, [
            'title'             =>  'string|nullable|max:15',
            'givenName'         =>  'string|nullable|max:25',
            'middleName'        =>  'string|nullable|max:25',
            'familyName'        =>  'string|nullable|max:25',
            'suffix'            =>  'string|nullable|max:10',
            'displayName'       =>  'required|string|max:100',
            'companyName'       =>  'string|nullable|max:100',
            'jobTitle'          =>  'string|nullable|max:100',
            'image'             =>  'string|nullable|max:2000',
            'gender'            =>  ['nullable', Rule::in(['Male', 'Female'])],
            'birthDate'         =>  'date|nullable',
            'contact'           =>  'array|nullable',
            'contact.email'     =>  'string|email|nullable|max:100',
            'contact.phone'     =>  'string|nullable|max:20',
            'contact.mobile'    =>  'string|nullable|max:20',
            'contact.fax'       =>  'string|nullable|max:20',
            'contact.otherPhone'=>  'string|nullable|max:20',
            'contact.pager'     =>  'string|nullable|max:1000',
            'contact.website'   =>  'string|nullable|max:1000',
            'address'           =>  'array|nullable',
            'address.street'    =>  'string|nullable|max:2000',
            'address.city'      =>  'string|nullable|max:255',
            'address.state'     =>  'string|nullable|max:255',
            'address.postalCode'=>  'string|nullable|max:30',
            'address.country'   =>  'string|nullable|max:255',
            'note'              =>  'string|nullable|max:4000',
            'status'            =>  ['required', Rule::in(['Active', 'Inactive'])],
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

        $sellers =  Seller::all();

        return response()->json($sellers);
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

        $seller             =   new Seller();
        $seller->title      =   $request->input('title');
        $seller->givenName  =   $request->input('givenName');
        $seller->middleName =   $request->input('middleName');
        $seller->familyName =   $request->input('familyName');
        $seller->suffix     =   $request->input('suffix');
        $seller->displayName=   $request->input('displayName');
        $seller->companyName=   $request->input('companyName');
        $seller->jobTitle   =   $request->input('jobTitle');
        $seller->image      =   $request->input('image');
        $seller->gender     =   $request->input('gender');
        $seller->birthDate  =   $request->input('birthDate');
        $seller->contact    =   $request->input('contact');
        $seller->address    =   $request->input('address');
        $seller->note       =   $request->input('note');
        $seller->status     =   $request->input('status');
        $seller->createdBy  =   $auth->id;
        $seller->modifiedBy =   $auth->id;
        $seller->save();

        return response()->json($seller);
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
            $seller = Seller::findOrFail($id);

            return response()->json($seller);
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
            $seller             =   Seller::findOrFail($id);
            $seller->title      =   $request->input('title');
            $seller->givenName  =   $request->input('givenName');
            $seller->middleName =   $request->input('middleName');
            $seller->familyName =   $request->input('familyName');
            $seller->suffix     =   $request->input('suffix');
            $seller->displayName=   $request->input('displayName');
            $seller->companyName=   $request->input('companyName');
            $seller->jobTitle   =   $request->input('jobTitle');
            $seller->image      =   $request->input('image');
            $seller->gender     =   $request->input('gender');
            $seller->birthDate  =   $request->input('birthDate');
            $seller->contact    =   $request->input('contact');
            $seller->address    =   $request->input('address');
            $seller->note       =   $request->input('note');
            $seller->status     =   $request->input('status');
            $seller->modifiedBy =   $auth->id;
            $seller->save();

            return response()->json($seller);
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
