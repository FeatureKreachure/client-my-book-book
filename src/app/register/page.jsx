import React from 'react'
import RegisterForm from "@/components/RegisterForm";
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '../api/auth/[...nextauth]/route';

const Register = async () => {
  const session = await getServerSession(authOptions)

  // user logged in?
  if (session) {
    redirect("/dashboard")
  }
  // user not logged in:
  return (
    <RegisterForm />
  )
}

export default Register