"use client"
import React, { useState, useEffect } from 'react'
import { useSession, getSession } from "next-auth/react"
import { useRouter } from 'next/navigation'
import { fetchUser, updateProfile } from '@/actions/useractions'
import { ToastContainer, toast } from 'react-toastify';
import { Bounce } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css';

const page = () => {
    const [form, setform] = useState([])
    const router = useRouter()
    const { data: session, status } = useSession()
    




    useEffect(() => {
        document.title = 'Dashboard -GetMeACoffee'
        if (!session) {
            router.push('/login')
        }
        else {
            //     alert(session)
            getdata()
        }
    }, [session, router])

    const getdata = async () => {
        const u = await fetchUser(session.user.name)
        setform(u)
    }


    // const handleRefresh = () => {
    //     window.location.reload();
    //   };
    // console.log(session)
    // if (!session) {
    //     const router = useRouter()
    //     router.push('/')
    // }
    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        await updateProfile(e, session.user.name)
        toast.success('Profile Updated Successfully!', {
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
        // alert("Profile Updated Successfully")
        // handleRefresh()
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
            <div>
                <h2 className='font-bold text-center text-2xl md:text-3xl pb-9 pt-28 md:p-10 lg:p-6'>Welcome to your Dashboard</h2>
                <form className='flex flex-col items-center gap-2' action={handleSubmit}>
                    <div className='flex flex-col w-[70%] sm:w-[50%] md:w-[32%] '>
                        <label htmlFor="name">Name</label>
                        <input type="text" value={form.name ? form.name : ""} onChange={handleChange} name='name' id='name' placeholder='Enter Name' className='bg-slate-800 text-sm text-neutral-300 rounded-md w-full h-7 outline-none px-2' />
                    </div>
                    <div className='flex flex-col w-[70%] sm:w-[50%] md:w-[32%]'>
                        <label htmlFor="email">Email</label>
                        <input type="email" value={form.email ? form.email : ""} onChange={handleChange} name='email' id='email' placeholder='Enter Email' className='bg-slate-800 text-sm text-neutral-300 rounded-md w-full h-7 outline-none px-2' />
                    </div>
                    <div className='flex flex-col w-[70%] sm:w-[50%] md:w-[32%]'>
                        <label htmlFor="username">Username</label>
                        <input type="text" value={form.username ? form.username : ""} onChange={handleChange} name='username' id='username' placeholder='Enter Username' className='bg-slate-800 text-sm text-neutral-300 rounded-md w-full h-7 outline-none px-2' />
                    </div>
                    <div className='flex flex-col w-[70%] sm:w-[50%] md:w-[32%]'>
                        <label htmlFor="profilepic">Profile Picture</label>
                        <input type="text" value={form.profilepic ? form.profilepic : ""} onChange={handleChange} name='profilepic' id='profilepic' placeholder='Enter Profilepic' className='bg-slate-800 text-sm text-neutral-300 rounded-md w-full h-7 outline-none px-2' />
                    </div>
                    <div className='flex flex-col w-[70%] sm:w-[50%] md:w-[32%]'>
                        <label htmlFor="coverpic">Cover Picture</label>
                        <input type="text" value={form.coverpic ? form.coverpic : ""} onChange={handleChange} name='coverpic' id='coverpic' placeholder='Enter Coverpic' className='bg-slate-800 text-sm text-neutral-300 rounded-md w-full h-7 outline-none px-2' />
                    </div>
                    <div className='flex flex-col w-[70%] sm:w-[50%] md:w-[32%]'>
                        <label htmlFor="razorpayId">Razorpay Id</label>
                        <input type="text" value={form.razorpayId ? form.razorpayId : ""} onChange={handleChange} name='razorpayId' id='razorpayId' placeholder='Enter Razorpayid' className='bg-slate-800 text-sm text-neutral-300 rounded-md w-full h-7 outline-none px-2' />
                    </div>
                    <div className='flex flex-col w-[70%] sm:w-[50%] md:w-[32%]'>
                        <label htmlFor="razorpaySecret">Razorpay Secret</label>
                        <input type="text" value={form.razorpaySecret ? form.razorpaySecret : ""} onChange={handleChange} name='razorpaySecret' id='razorpaySecret' placeholder='Enter Razorpaysecret' className='bg-slate-800 text-sm text-neutral-300 rounded-md w-full h-7 outline-none px-2' />
                    </div>
                    <div className='mb-5 md:mb-0 w-[70%] sm:w-[50%] md:w-[32%]'>
                        <button type="submit" className="mt-3 text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Save</button>
                    </div>
                </form>

            </div>

        </>
    )
}




export default page