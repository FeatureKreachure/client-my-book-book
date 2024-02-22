"use client";
import { addBookByEmail } from "@/utils/requests";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const AddBook = ({ email }: { email: string }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log("adding book");
      const res = await addBookByEmail(email, title, author, true);

      if (res?.error) {
        setError("All Fields Required");
      } else {
        console.log("book added");
        router.replace("dashboard");
        console.log("routed");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="text-white grid place-items-center">
      <div className="shadow-lg shadow-teal-400 p-5 rounded-lg border-t-4 border-teal-400">
        <h1 className="text-xl font-bold my-4">Add Book</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Title"
          />
          <input
            onChange={(e) => setAuthor(e.target.value)}
            type="text"
            placeholder="Author"
          />
          <button className="bg-white text-black hover:bg-teal-200 rounded-md px-6 py-2">
            Add Book
          </button>
          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default AddBook;
