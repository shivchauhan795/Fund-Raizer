"use client"
import React, { useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

const Navbar = () => {
    const { data: session } = useSession()
    const [showDropDown, setshowDropDown] = useState(false)

    return (
        <>
            <div className='bg-gray-950 text-white flex justify-between py-5 px-14'>
                <Link href={"/"}>
                    <div className="logo font-bold flex justify-center items-center text-2xl">
                        <img className='invertImg' src="/cup.gif" alt="" width={50} />
                        Fund Raizer
                    </div>
                </Link>
                <div className='navIcons relative'>

                    {session &&
                        <>
                            <button id="dropdownDefaultButton" onClick={() => setshowDropDown(!showDropDown)} onBlur={() => {
                                setTimeout(() => {
                                    setshowDropDown(false)
                                }, 100);
                            }} data-dropdown-toggle="dropdown" className="text-white mx-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Welcome {session.user.name} <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>

                            <div id="dropdown" className={`z-10 ${showDropDown ? "" : "hidden"} absolute left-11 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                    <li>
                                        <Link href={"/dashboard"} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                                    </li>
                                    <li>
                                        <Link href={`/${session.user.name}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Page</Link>
                                    </li>
                                    <li>
                                        <Link onClick={() => signOut()} href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</Link>
                                    </li>
                                </ul>
                            </div>
                        </>
                    }

                    {session &&
                        <button className='bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' onClick={() => { signOut() }}>SignOut</button>
                    }
                    {!session &&
                        <Link href={"/login"}>
                            <button className='bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Login</button>
                        </Link>
                    }
                </div>
            </div>
        </>
    )
}

export default Navbar
