"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // const baseUrl = "http://127.0.0.1:5001/api/"
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("sending...");

    if (!username || !email || !password) {
      setError("All fields are necessary.");
      return;
    }

    try {
      // const hashed = await hashPassword(password);
      // console.log(hashed)
      const resExist = await fetch("http://127.0.0.1:5001/api/user/exist", {
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
      console.log("sent. readin")
      console.log(resExist)

      const { message } = await resExist.json();
      console.log(message)
      if (message === "User Exists") {
        console.log(message)
        setError("User Already Exists");
        return;
      }

      const res = await fetch("http://127.0.0.1:5001/api/user/", {
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

      console.log("request sent");
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