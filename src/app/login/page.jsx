import LoginForm from "@/components/LoginForm";
import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

const Login = async () => {
  const session = await getServerSession(authOptions);

  // user logged in?
  if (session) {
    redirect("/dashboard");
  }
  // user not logged in:
  return (
    <div className="mt-16">
      <LoginForm />
    </div>
  );
};

export default Login;
