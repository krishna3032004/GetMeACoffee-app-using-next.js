"use client"
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'


const Navbar = () => {
  const { data: session } = useSession()
  const router = useRouter()
  const [showdropdown, setshowdropdown] = useState(false)
  const [search, setsearch] = useState()
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      router.push(`/${search}`)
    }
  }
  
  const handleChange = (e) => {
    setsearch(e.target.value)
  }
  return (
    <div className=' bg-gradient-to-r from-purple-500 to-pink-500 flex flex-col md:flex-row items-center justify-between fixed z-20 w-full'>
      <Link href={"/"}><div className='mx-3 flex gap-3 items-center'>
        <img className='mb-3' src="coffee.gif" alt="" width={35} />
        <div className="font-serif">Get Me A Coffee!</div>
      </div></Link>
      <div className='flex relative'>
        <input type="search" name='creator' spellCheck="false" value={search} onChange={handleChange} onKeyDown={handleKeyDown} placeholder='Find a Creator' className="outline-none h-8 sm:h-10 w-36 sm:w-52 lg:w-72  pl-8 relative inline-flex items-center justify-center p-0.5 my-2 md:my-1 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-xl group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white  dark:focus:ring-blue-800" />
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" className="search-icon absolute w-3 sm:w-4 top-[35%] left-2"><path fill="white" d="M11.435 10.063h-.723l-.256-.247a5.92 5.92 0 0 0 1.437-3.87 5.946 5.946 0 1 0-5.947 5.947 5.92 5.92 0 0 0 3.87-1.437l.247.256v.723L14.637 16 16 14.637l-4.565-4.574Zm-5.489 0A4.111 4.111 0 0 1 1.83 5.946 4.111 4.111 0 0 1 5.946 1.83a4.111 4.111 0 0 1 4.117 4.116 4.111 4.111 0 0 1-4.117 4.117Z"></path></svg>
       
        <div>
          {session && <>
            <button onClick={() => { setshowdropdown(!showdropdown) }} onBlur={() => { setTimeout(() => { setshowdropdown(false) }, 100); }} id="dropdownAvatarNameButton" data-dropdown-toggle="dropdownAvatarName" className="flex bg-[rgba(16,51,112,0.4)]  font-medium rounded-lg text-sm px-5 py-1 text-center me-2 my-1 outline-none items-center p-1 pl-2 mr-3 pe-1" type="button">
              <img className="size-6 sm:size-8 me-2 rounded-full" src={session.user.image} alt="user photo" />
              {session.user.name}
              <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
              </svg>
            </button>

            {/* <!-- Dropdown menu --> */}
            <div id="dropdownAvatarName" className={`z-10 ${showdropdown ? "" : "hidden"} absolute top-16 right-1 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}>
              <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                <div className="font-medium ">Pro User</div>
                <div className="truncate text-zinc-300">{session.user.email}</div>
              </div>
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton">
                <li>
                  <Link href={"/"} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Home</Link>
                </li>
                <li>
                  <Link href={`/${session.user.name}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Page</Link>
                </li>
                <li>
                  <Link href={"/dashboard"} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                </li>
              </ul>
              <div className="py-2">
                <Link href="#" onClick={() => signOut()} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</Link>
              </div>
            </div></>}
        </div>

        
        {!session && <Link href={"/"}>
          <button className="relative inline-flex items-center justify-center p-0.5 my-1 me-2 overflow-hidden text-xs sm:text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-3 py-2 sm:px-5 sm:py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Home
            </span>
          </button>
        </Link>}
        {!session && <Link href={"/login"}><button className="relative inline-flex items-center justify-center p-0.5 my-1 me-2 overflow-hidden text-xs sm:text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span className="relative px-3 py-2 sm:px-5 sm:py-2.5  transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Login
          </span>
        </button>
        </Link>
        }
        

      </div>

    </div>
  )
}

export default Navbar
