
import React from 'react'
import PaymentPage from '../components/PaymentPage'
import { fetchUser } from '@/actions/useractions'
// import { useEffect } from 'react'
// import { useRouter } from 'next/navigation'
import User from '../models/User'
import connectDB from '../db/connectDb'
import Link from 'next/link'
// import { useSession, signIn, signOut } from "next-auth/react"

const page = async ({ params }) => {
    await connectDB()
    let a = await User.findOne({ username: params.username })

    if (a == null) {
        return <div className='mt-24 md:mt-0  rounded-md  p-10'>
            <h2 className='font-semibold text-sm sm:text-base'>No creators found matching "{params.username}"</h2>
            <p className='text-xs sm:text-sm my-4'>Try searching for something else, or:</p>
            <ul className='list-disc text-xs sm:text-sm flex gap-2 flex-col pl-4'>
                <li>Search for the creator's name or what they create.</li>
                <li>Make sure everything is spelled correctly.</li>
                <li>Try more general keywords.</li>
            </ul>
            {/* <Link href={"/"}>return Home</Link> */}
        </div>
    }
    else {
        return (
            <PaymentPage username={params.username} />
        )
    }
}

export default page

export async function generateMetadata({ params }) {
    return {
      title: `${params.username} -GetMeACoffee`,
    }
  }