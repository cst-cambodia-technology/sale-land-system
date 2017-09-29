<?php

namespace App\Http\Controllers;

use App\Invoice;
use App\InvoiceDetail;
use App\Layout;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use JWTAuth;
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
            'invoiceDetails.*.id'           =>  'integer|nullable',
            'invoiceDetails.*.layoutId'     =>  'required|integer',
            'invoiceDetails.*.layout'        =>  'required|string|max:100',
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
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if (! $user = JWTAuth::parseToken()->authenticate())
        {
            return response()->json(['error' => 'user_authenticate_not_found'], 404);
        }

        $option = $request->input('option');

        if ($option == 'InvoiceNo') {
            $lastInvoice = Invoice::all()->last();
            if ($lastInvoice) {
                $no = $lastInvoice->id + 100;
            } else {
                $no = 100;
            }
            return response()->json($no);
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

        $items =  $request->input('invoiceDetails');

        foreach ($items as $item) {
            $invoiceDetail              =   new InvoiceDetail();
            $invoiceDetail->layoutId    =   $item['layoutId'];
            $invoiceDetail->layout      =   $item['layout'];
            $invoiceDetail->size        =   $item['size'];
            $invoiceDetail->price       =   $item['price'];
            $invoiceDetail->description =   $item['description'];
            $invoiceDetail->createdBy   =   $user->id;
            $invoiceDetail->modifiedBy  =   $user->id;
            $invoice->details()->save($invoiceDetail);
            if ((float)$request->input('balance')> 0.00) {
                Layout::where('id', $item['layoutId'])->update(['status' => 'Reserved']);
            } else {
                Layout::where('id', $item['layoutId'])->update(['status' => 'Closed']);
            }
        }

        return response()->json($invoice);
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
            $invoice = Invoice::findOrFail($id)->with('details')->get();

            return response()->json($invoice);
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
            $invoice                =   Invoice::findOrFail($id);
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
            $invoice->modifiedBy    =   $user->id;
            $invoice->save();

        } catch (ModelNotFoundException $e) {
            return response()->json($e->getMessage(),404);
        }

        $items =  $request->input('invoiceDetails');

        foreach ($items as $item) {
            $invoiceDetail              =   $invoice->invoiceDetails()->find($item['id']);
            $invoiceDetail->layoutId    =   $item['layoutId'];
            $invoiceDetail->layout      =   $item['layout'];
            $invoiceDetail->size        =   $item['size'];
            $invoiceDetail->price       =   $item['price'];
            $invoiceDetail->description =   $item['description'];
            $invoiceDetail->modifiedBy  =   $user->id;
            $invoiceDetail->save();
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
