"use client"
import React, { useEffect, useState } from 'react'
import Script from 'next/script';
import Razorpay from 'razorpay';
import { initiate } from '@/actions/useractions';
import { fetchUser, fetchPayment } from '@/actions/useractions';
import { useRouter, useSearchParams } from 'next/navigation';
import { useSession, signIn, signOut } from "next-auth/react"
import { ToastContainer, toast } from 'react-toastify';
import { Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const PaymentPage = ({ username }) => {
    const router = useRouter()
    const [paymentform, setPaymentform] = useState({ amount: "", message: "", name: "" })
    // const [paymentform, setPaymentform] = useState({})
    const { data: session } = useSession()
    const [user, setuser] = useState([])
    const [payments, setpayments] = useState([])
    const searchparam = useSearchParams()
    useEffect(() => {
        getdata()
    }, [session])


    // this is for when you use razorpay
    useEffect(() => {
        if (searchparam.get("paymentdone") == "true") {
            // alert("kya ho; rha hia ye")
            toast.success('Payment done Successfully!', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            router.push(`${username}`)
        }

    }, [])


    const handleRefresh = () => {
        window.location.reload();
    };

    const handleChange = (e) => {
        setPaymentform({ ...paymentform, [e.target.name]: e.target.value })
    }
    const handleblank = (e) => {
        setPaymentform({ ...paymentform, name: "", message: "", amount: "" })
    }
    const pay = async (amount) => {
        // if (session) {
        if (paymentform.name && paymentform.message) {
            let amount2 = Number.parseInt(amount)
            let a = await initiate(amount2, username, paymentform)
            // alert(user.razorpayId)
            // alert(user.razorpaySecret)
            // ": use this if you use razorpay :" \\
            let orderID = a.id
            var options = {
                "key_id": user.razorpayId, // Enter the Key ID generated from the Dashboard
                "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                "currency": "INR",
                "name": "Get Me A Coffee", //your business name
                "description": "Test Transaction",
                "image": "https://example.com/your_logo",
                "order_id": orderID, //This is a sample Order ID. Pass the id obtained in the response of Step 1
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
            };
            // window.Razorpay
            var rzp1 = new window.Razorpay(options);

            rzp1.open();


            // this is when you not use razorpay

            // toast.success('Payment done Successfully!', {
            //     position: "bottom-right",
            //     autoClose: 3000,
            //     hideProgressBar: true,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            //     progress: undefined,
            //     theme: "colored",
            //     transition: Bounce,
            // });
            // getdata()
            // handleblank()

        }
        else if (paymentform.name) {
            toast.warning('Message required!', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });
            // alert("Message required ")
        }
        else if (paymentform.message) {
            toast.warning('Name required!', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });
            // alert("Name required")
        }
        else {
            // alert("Name and Message required")
            toast.warning('Name and Message required!', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });

        }
        // else {
        //     // alert("SignIn/Login")
        //     toast.info('Name and Message required!', {
        //         position: "bottom-right",
        //         autoClose: 3000,
        //         hideProgressBar: true,
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //         draggable: true,
        //         progress: undefined,
        //         theme: "colored",
        //         transition: Bounce,
        //     });
        //     router.push("/login")
        // }

    }

    const getdata = async () => {
        let u = await fetchUser(username)
        setuser(u)
        let a = await fetchPayment(username)
        setpayments(a)
    }

    return (
        <>
            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            {/* Same as */}
            <ToastContainer />


            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

            <div className='cover w-full mt-24 md:mt-0 relative'>
                <img className='w-full object-cover overflow-hidden min-h-40 max-h-[20vh] sm:max-h-[35vh]' src={user.coverpic ? user.coverpic : "https://wizkidsclub.com/wp-content/uploads/2020/07/default-cover.jpg"} alt="" />
                <div className='absolute -bottom-16 left-[37%] sm:left-[42.5%] md:left-[44.2%] lg:left-[44.7%] rounded-full w-full  size-28 lg:size-36 overflow-hidden'>
                    <img className='rounded-full object-cover size-28 lg:size-36 ' src={user.profilepic ? user.profilepic : "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"} alt="" />
                </div>

            </div>
            <div className='flex justify-center items-center text-center my-20 px-2 flex-col gap-1'>
                <div className='font-bold text-lg'>
                    @{username}
                </div>
                <div className='text-slate-400'>
                    Let's help {username} to get a coffee!
                </div>
                <div className='text-slate-400'>
                    {payments.length} Payments . ₹{payments.reduce((a, b) => a + b.amount, 0)} raised
                </div>
            </div>
            <div className='flex md:flex-row flex-col justify-center items-center gap-6 my-11'>
                <div className='h-96 rounded-lg w-[80%] md:w-[40%] p-4 md:p-10 bg-slate-900'>
                    <h2 className='text-lg md:text-xl font-bold'>Top 10 payments</h2>
                    <div className='bg-gray-800 mt-4 h-[0.2vh]'></div>
                    <ul className='mx-2 sm:mx-5 pt-1 h-72  overflow-y-auto'>
                        {payments.length == 0 && <div>No Payments yet</div>}
                        {payments.map((p, i) => {
                            if (i < 10) {
                                return <li key={i} className='my-2 text-xs lg:text-sm flex gap-1'><img className='w-4 h-4 sm:w-5 sm:h-5 rounded-full items-center' src="avatar.gif" alt="" />{p.name} donated ${p.amount} with a message "{p.message}"</li>
                            }
                        })}



                    </ul>
                    <div className='bg-gray-800 h-[0.2vh]'></div>
                </div>
                <div className='h-96 md:h-96 rounded-lg w-[80%] sm:w-[60%] md:w-[40%] p-5 md:p-10 bg-slate-900'>
                    <h2 className='text-lg md:text-xl font-bold'>Make a Payment</h2>
                    <div className='flex flex-col gap-5 md:gap-3 mt-5 text-sm'>
                        <div>
                            <input type="text" onChange={handleChange} name='name' value={paymentform.name} className='bg-slate-800 w-full rounded-lg p-2 outline-none text-xs sm:text-sm' placeholder='Enter Name' />
                        </div>
                        <div>
                            <input type="text" onChange={handleChange} name='message' value={paymentform.message} className='bg-slate-800 w-full rounded-lg p-2 outline-none text-xs sm:text-sm' placeholder='Enter Message' />
                        </div>
                        <div>
                            <input type="number" onChange={handleChange} name='amount' value={paymentform.amount} className='bg-slate-800 w-full rounded-lg p-2 outline-none text-xs sm:text-sm' placeholder='Enter Amount' />
                        </div>
                        <div>
                            <button type="button" onClick={() => { pay(Number.parseInt(paymentform.amount)) }} disabled={paymentform.amount?.length < 1 || Number.parseInt(paymentform.amount) < 1} className="disabled:bg-slate-600 disabled:from-purple-100 text-white w-full bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-xs sm:text-sm px-5 py-2.5 text-center me-2 mb-2">Pay</button>
                        </div>
                        <div className='flex gap-5'>
                            <div>
                                <button className='bg-slate-800 p-1 sm:p-2 text-xs sm:text-sm rounded-lg' onClick={() => { pay(10) }} >Pay $10</button>
                            </div>
                            <div>
                                <button className='bg-slate-800 p-1 sm:p-2 text-xs sm:text-sm rounded-lg' onClick={() => { pay(20) }}>Pay $20</button>
                            </div>
                            <div>
                                <button className='bg-slate-800 p-1 sm:p-2 text-xs sm:text-sm rounded-lg' onClick={() => { pay(30) }}>Pay $30</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default PaymentPage
// onClick={(e)=>{setPaymentform({ ...paymentform, [e.target.name]: "₹ " })}}


