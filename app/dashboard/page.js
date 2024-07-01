"use client"
import React, { useEffect, useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'
import { fetchuser, updateProfile } from '@/actions/useractions'

const Dashboard = () => {
  const { data: session, update } = useSession()
  const router = useRouter()
  const [form, setform] = useState({})
  useEffect(() => {
    if (!session) {
      router.push('/login')
    }
    else {
      getData()
    }
  }, [session, router])

  const getData = async () => {
    let u = await fetchuser(session.user.name)
    setform(u)
  }

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    // update()
    console.log("button clicked")
    let a = await updateProfile(e, session.user.name)
    alert("Profile Updated")
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center">

        <div className='font-bold text-2xl flex justify-center items-center pt-10'>
          Welcome to your Dashboard
        </div>

        <form action={handleSubmit} className='flex flex-col justify-center items-center gap-4 pt-10 w-1/2'>

          <input value={form.name ? form.name : ""} name='name' id='name' onChange={handleChange} type="text" className='w-full p-3 rounded-lg bg-slate-800 hover:bg-slate-700' placeholder='Enter Name' />
          <input value={form.email ? form.email : ""} name='email' id='email' onChange={handleChange} type="email" className='w-full p-3 rounded-lg bg-slate-800 hover:bg-slate-700' placeholder='Enter Email' />
          <input value={form.username ? form.username : ""} name='username' id='username' onChange={handleChange} type="text" className='w-full p-3 rounded-lg bg-slate-800 hover:bg-slate-700' placeholder='Enter Username' />
          <input value={form.profilepic ? form.profilepic : ""} name='profilepic' id='profilepic' onChange={handleChange} type="text" className='w-full p-3 rounded-lg bg-slate-800 hover:bg-slate-700' placeholder='Enter Profile Picture' />
          <input value={form.coverpic ? form.coverpic : ""} name='coverpic' id='coverpic' onChange={handleChange} type="text" className='w-full p-3 rounded-lg bg-slate-800 hover:bg-slate-700' placeholder='Enter Cover Picture' />
          <input value={form.razorpayid ? form.razorpayid : ""} name='razorpayid' id='razorpayid' onChange={handleChange} type="password" className='w-full p-3 rounded-lg bg-slate-800 hover:bg-slate-700' placeholder='Enter Razorpay ID' />
          <input value={form.razorpaysecret ? form.razorpaysecret : ""} name='razorpaysecret' id='razorpaysecret' onChange={handleChange} type="password" className='w-full p-3 rounded-lg bg-slate-800 hover:bg-slate-700' placeholder='Enter Razorpay Secret' />
          <button type="submit" className="text-white w-full bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Save</button>

        </form>

      </div>
    </>
  )
}

export default Dashboard