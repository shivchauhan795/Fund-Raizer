import PaymentPage from '@/components/PaymentPage'
import React from 'react'
import { notFound } from "next/navigation"
import connectDB from '@/db/connectDB'
import User from '@/models/User'
const Username = async ({ params }) => {

  // if username is not present in db, show 404 page
  const checkUser = async () => {
    await connectDB()
    let u = await User.findOne({ username: params.username })
    if (!u) {
      return notFound()
    }
  }
  await checkUser()


  return (
    <>
      <PaymentPage username={params.username} />
    </>
  )
}

export default Username
