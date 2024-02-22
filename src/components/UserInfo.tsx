"use client";

import React from "react";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

const UserInfo = () => {
  const { data: session } = useSession();
  return (
    <div className="grid place-items-center h-screen">
      <div className="rounded-md shadow-lg shadow-green-200 p-8 bg-white flex flex-col gap-2 my-6">
        <div>
          Name: <span className="font-bold">{session?.user?.name}</span>
        </div>
        <div>
          Email: <span className="font-bold">{session?.user?.email}</span>
        </div>
        <button
          onClick={() => signOut()}
          className="bg-red-500 text-white font-bold px-6 py-2 mt-3 rounded-md hover:bg-red-800 duration-200"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default UserInfo;
