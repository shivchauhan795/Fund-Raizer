"use client"
import React, { useEffect, useState } from 'react'
import Script from 'next/script'
import { fetchpayments, fetchuser, initiate } from '@/actions/useractions'
import { useSession } from 'next-auth/react'

const PaymentPage = ({ username }) => {
    const [paymentform, setPaymentform] = useState({})
    const [currentUser, setcurrentUser] = useState({})
    const [payments, setPayments] = useState([])

    useEffect(() => {
        getData()
    }, [])


    const handleChange = (e) => {
        setPaymentform({ ...paymentform, [e.target.name]: e.target.value })
    }

    const getData = async () => {
        let u = await fetchuser(username)
        setcurrentUser(u)
        let dbPayments = await fetchpayments(username)
        setPayments(dbPayments)
    }

    const pay = async (amount) => {
        // get order id
        let a = await initiate(amount, username, paymentform)
        let orderId = a.id
        var options = {
            "key": currentUser.razorpayid, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Fund Raizer", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        }
        var rzp1 = new Razorpay(options);
        rzp1.open();

    }

    return (
        <>
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

            <div className='cover w-full bg-red-50 relative'>

                <img className='overflow-hidden  w-full h-60' src={currentUser.coverpic} alt="" />

                <div className="absolute -bottom-20 right-[45%] border-white border-2 rounded-full">
                    <img className='rounded-full' width={150} height={150} src={currentUser.profilepic} alt="" />
                </div>

            </div>
            <div className="info flex flex-col gap-2 justify-center items-center mt-24 pb-24">
                <div className="font-bold text-lg">

                    {username}
                </div>
                <div className="text-slate-400">
                    Let's help {username} to raize funds!!
                </div>
                <div className="text-slate-400">
                    {payments.length} Payments . ₹{payments.reduce((a,b)=>a+b.amount, 0)} Raised
                </div>
                <div className="payment flex gap-3 w-[80%] pt-14">
                    <div className="supporters w-1/2 bg-slate-900 rounded-lg text-white p-10">
                        <h2 className='text-lg font-bold my-5'>Supporters</h2>
                        <ul>
                            {payments.length == 0 && <li>No Payment Yet</li>}
                            {payments.map((p, i) => {
                                return <li key={i} className='my-2'><span>{p.name} donated ₹{p.amount} with a message {p.message}</span></li>
                            })}

                        </ul>
                    </div>
                    <div className="makePayment w-1/2 bg-slate-900 rounded-lg text-white p-5">
                        <div className="text-2xl font-bold my-5">Make Payment</div>
                        <div className="flex gap-2 flex-col">
                            <div>
                                <input type="text" className='w-full p-3 rounded-lg bg-slate-800 hover:bg-slate-700' placeholder='Enter Name' name='name' onChange={handleChange} value={paymentform.name} />
                            </div>
                            <input type="text" className='w-full p-3 rounded-lg bg-slate-800 hover:bg-slate-700' placeholder='Enter Message' name='message' onChange={handleChange} value={paymentform.message} />
                            <input type="text" className='w-full p-3 rounded-lg bg-slate-800 hover:bg-slate-700' placeholder='Enter Amount' name='amount' onChange={handleChange} value={paymentform.amount} />
                            <button onClick={() => pay(Number.parseInt(paymentform.amount) * 100)} type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Pay</button>

                        </div>
                        <div className="flex gap-2 mt-5">
                            <button className="bg-slate-800 p-3 rounded-lg hover:bg-slate-700" onClick={() => pay(1000)}>Pay ₹10</button>
                            <button className="bg-slate-800 p-3 rounded-lg hover:bg-slate-700" onClick={() => pay(2000)}>Pay ₹20</button>
                            <button className="bg-slate-800 p-3 rounded-lg hover:bg-slate-700" onClick={() => pay(3000)}>Pay ₹30</button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default PaymentPage
