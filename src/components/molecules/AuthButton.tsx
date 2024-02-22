"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const AuthButton = () => {
  const { data: session } = useSession();
  const buttonCommonStyle =
    "text-black px-2 py-2 rounded-md transition duration-300 bg-white`";

  if (session) {
    return (
      <div>
        <button
          className={`${buttonCommonStyle} bg-teal-200 hover:bg-teal-400`}
          onClick={() => signOut()}
        >
          Logout
        </button>
      </div>
    );
  }
  return (
    <button
      className={`${buttonCommonStyle} bg-teal-200 hover:bg-teal-400`}
      onClick={() => signIn()}
    >
      Login/Register
    </button>
  );
};

export default AuthButton;
