"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Component used to collect info and register a new user
const RegisterForm = () => {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // prevent the default form behaviour
    e.preventDefault();

    // set error if required fields not populated
    if (!username || !email || !password) {
      setError("All fields are necessary.");
      return;
    }

    try {
      // check if user already exists
      // !test
      const resExist = await fetch(`${process.env.NEXT_PUBLIC_REST_API_URL}user/exist`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      // get message response from server
      const { message } = await resExist.json();

      // if user exists set error message
      if (message === "User Exists") {
        console.log(message)
        setError("User Already Exists");
        return;
      }

      // if no existing user, post new user to DB
      const url = `${process.env.NEXT_PUBLIC_REST_API_URL}user/`
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      // redirect to login page if user registered successfully
      if (res.status === 201) {
        const form = e.target as HTMLFormElement;
        form.reset();
        router.push("/login")
      } else {
        console.log("User Registration Failed.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // display UI on screen
  return (
    <div className="text-white grid place-items-center h-screen">
      <div className="shadow-lg shadow-teal-400 p-5 rounded-lg border-t-4 border-teal-400">
        <h1 className="text-xl font-bold my-4">Register Your Account</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <button className="bg-white text-black hover:bg-teal-200 rounded-md px-6 py-2">
            Register
          </button>

          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}

          <Link className="text-sm mt-3 text-right" href={"/login"}>
            Already have an account? <span className="underline">Login</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
