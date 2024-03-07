import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="bg-black text-white py-16">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Track Your Reading Journey</h1>
        <p className="text-lg mb-8">
          Keep track of the books you read and manage your reading notes
          effortlessly.
        </p>
        <br />
        <p className="text-xl font-bold">Changes I hope To Make:</p>
        <ul>
          <li>Get Used To CLI Git Branching</li>
          <li>Add More Book Details</li>
          <li>Setup Genres Hopefully</li>
        </ul>
        <br />
        <Link
          href={"/login"}
          className="bg-teal-200 hover:bg-teal-400 text-black font-bold py-2 px-6 rounded-full duration-200"
        >
          Login or Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Hero;
