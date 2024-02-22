"use client";
import React, { useEffect, useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { fetchUserByEmail } from "@/utils/requests";

const ProfileButton = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <Link href="/dashboard">
        <p className="text-white ml-4 mr-4 cursor-pointer hover:text-teal-400 transition duration-300">
          {session?.user?.email}
        </p>
      </Link>
    );
  }
};

export default ProfileButton;
