<?php

namespace App\Http\Controllers;

use App\Customer;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use JWTAuth;

class CustomerController extends Controller
{
    /**
     * Get a validator for an incoming customer request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Contracts\Validation\Validator
     */
    public function validator(Request $request)
    {
        $this->validate($request, [
            'title'                     =>  'string|nullable|max:15',
            'givenName'                 =>  'string|nullable|max:25',
            'middleName'                =>  'string|nullable|max:25',
            'familyName'                =>  'string|nullable|max:25',
            'suffix'                    =>  'string|nullable|max:10',
            'displayName'               =>  'required|string|max:100',
            'companyName'               =>  'string|nullable|max:100',
            'jobTitle'                  =>  'string|nullable|max:100',
            'image'                     =>  'string|nullable|max:2000',
            'gender'                    =>  ['nullable', Rule::in(['Male', 'Female'])],
            'birthDate'                 =>  'date|nullable',
            'identity'                  =>  'array|nullable',
            'identity.type'             =>  'string|nullable|max:100',
            'identity.no'               =>  'string|nullable|max:100',
            'identity.releasedDate'     =>  'date|nullable',
            'identity.expiredDate'      =>  'date|nullable',
            'contact'                   =>  'array|nullable',
            'contact.email'             =>  'string|nullable|max:100',
            'contact.phone'             =>  'string|nullable|max:20',
            'contact.mobile'            =>  'string|nullable|max:20',
            'contact.fax'               =>  'string|nullable|max:20',
            'contact.otherPhone'        =>  'string|nullable|max:20',
            'contact.pager'             =>  'string|nullable|max:1000',
            'contact.website'           =>  'string|nullable|max:1000',
            'address'                   =>  'array|nullable',
            'address.street'            =>  'string|nullable|max:2000',
            'address.city'              =>  'string|nullable|max:255',
            'address.state'             =>  'string|nullable|max:255',
            'address.postalCode'        =>  'string|nullable|max:30',
            'address.country'           =>  'string|nullable|max:255',
            'note'                      =>  'string|nullable|max:4000',
            'status'                    =>  ['required', Rule::in(['Active', 'Inactive'])],
        ]);
    }

    /**
     * Retrieve a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (! $user = JWTAuth::parseToken()->authenticate())
        {
            return response()->json(['error' => 'user_authenticate_not_found'], 404);
        }

        $customers =  Customer::all();

        return response()->json($customers);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if (! $user = JWTAuth::parseToken()->authenticate())
        {
            return response()->json(['error' => 'user_authenticate_not_found'], 404);
        }

        $this->validator($request);

        $customer               =   new Customer();
        $customer->title        =   $request->input('title');
        $customer->givenName    =   $request->input('givenName');
        $customer->middleName   =   $request->input('middleName');
        $customer->familyName   =   $request->input('familyName');
        $customer->suffix       =   $request->input('suffix');
        $customer->displayName  =   $request->input('displayName');
        $customer->companyName  =   $request->input('companyName');
        $customer->jobTitle     =   $request->input('jobTitle');
        $customer->image        =   $request->input('image');
        $customer->gender       =   $request->input('gender');
        $customer->birthDate    =   $request->input('birthDate');
        $customer->identity     =   $request->input('identity');
        $customer->contact      =   $request->input('contact');
        $customer->address      =   $request->input('address');
        $customer->note         =   $request->input('note');
        $customer->status       =   $request->input('status');
        $customer->createdBy    =   $user->id;
        $customer->modifiedBy   =   $user->id;
        $customer->save();

        return response()->json($customer);
    }

    /**
     * Retrieve the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        if (! $user = JWTAuth::parseToken()->authenticate())
        {
            return response()->json(['error' => 'user_authenticate_not_found'], 404);
        }

        try {
            $customer = Customer::findOrFail($id);

            return response()->json($customer);
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
        if (! $user = JWTAuth::parseToken()->authenticate())
        {
            return response()->json(['error' => 'user_authenticate_not_found'], 404);
        }

        $this->validator($request);

        try {
            $customer               =   Customer::findOrFail($id);
            $customer->title        =   $request->input('title');
            $customer->givenName    =   $request->input('givenName');
            $customer->middleName   =   $request->input('middleName');
            $customer->familyName   =   $request->input('familyName');
            $customer->suffix       =   $request->input('suffix');
            $customer->displayName  =   $request->input('displayName');
            $customer->companyName  =   $request->input('companyName');
            $customer->jobTitle     =   $request->input('jobTitle');
            $customer->image        =   $request->input('image');
            $customer->gender       =   $request->input('gender');
            $customer->birthDate    =   $request->input('birthDate');
            $customer->identity     =   $request->input('identity');
            $customer->contact      =   $request->input('contact');
            $customer->address      =   $request->input('address');
            $customer->note         =   $request->input('note');
            $customer->status       =   $request->input('status');
            $customer->modifiedBy   =   $user->id;
            $customer->save();

            return response()->json($customer);
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
