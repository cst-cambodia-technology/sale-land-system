<?php

namespace App\Http\Controllers;

use App\Invoice;
use App\InvoiceDetail;
use Illuminate\Http\Request;

class InvoiceController extends Controller
{
    /**
     * Get a validator for an incoming invoice request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Contracts\Validation\Validator
     */
    public function validator(Request $request)
    {
        $this->validate($request, [
            'customerId'                    =>  'required|integer',
            'no'                            =>  'required|string|max:21',
            'date'                          =>  'required|date',
            'invoiceDetails'                =>  'required|array',
            'invoiceDetails.*.layoutId'     =>  'required|integer',
            'invoiceDetails.*.label'        =>  'required|string|max:100',
            'invoiceDetails.*.size'         =>  'string|nullable|max:100',
            'invoiceDetails.*.price'        =>  'numeric|nullable',
            'invoiceDetails.*.description'  =>  'string|nullable|max:4000',
            'memo'                          =>  'string|nullable|max:4000',
            'subTotal'                      =>  'numeric|nullable',
            'discountMethod'                =>  ['nullable', Rule::in(['Percent', 'Value'])],
            'discount'                      =>  'numeric|nullable',
            'discountValue'                 =>  'numeric|nullable',
            'grandTotal'                    =>  'numeric|nullable',
            'deposit'                       =>  'numeric|nullable',
            'balance'                       =>  'numeric|nullable',
            'status'                        =>  ['required', Rule::in(['Open', 'Overdue', 'Paid', 'Pending', 'Accepted', 'Closed', 'Rejected', 'Expired'])],
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

        $invoices = Invoice::all();

        return response()->json($invoices);
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

        $invoice                =   new Invoice();
        $invoice->customerId    =   $request->input('customerId');
        $invoice->no            =   $request->input('no');
        $invoice->date          =   $request->input('date');
        $invoice->memo          =   $request->input('memo');
        $invoice->subTotal      =   $request->input('subTotal');
        $invoice->discountMethod=   $request->input('discountMethod');
        $invoice->discount      =   $request->input('discount');
        $invoice->discountValue =   $request->input('discountValue');
        $invoice->grandTotal    =   $request->input('grandTotal');
        $invoice->deposit       =   $request->input('deposit');
        $invoice->balance       =   $request->input('balance');
        $invoice->status        =   $request->input('status');
        $invoice->createdBy     =   $user->id;
        $invoice->modifiedBy    =   $user->id;
        $invoice->save();

        $items =  $request->input('items');

        foreach ($items as $item) {
            $invoiceDetail              =   new InvoiceDetail();
            $invoiceDetail->layoutId    =   $item['layoutId'];
            $invoiceDetail->label       =   $item['label'];
            $invoiceDetail->size        =   $item['size'];
            $invoiceDetail->price       =   $item['price'];
            $invoiceDetail->description =   $item['description'];
            $invoiceDetail->createdBy   =   $user->id;
            $invoiceDetail->modifiedBy  =   $user->id;
            $invoice->invoiceDetails()->save($invoiceDetail);
        }

        return response()->json($invoice);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
        //
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
