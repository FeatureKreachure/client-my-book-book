import React from "react";
import BookView from "./BookView";
import { fetchBooks } from "@/utils/requests";
import Link from "next/link";
import LeftMenu from "./templates/LeftMenu";

const DashBoard = async ({ email }: { email: string }) => {
  const data: Book[] = await fetchBooks(email);
  console.log(data);
  return (
    <div className="bg-black min-h-screen flex p-4 mx-auto mt-16">
      {/* Left Menu */}
      <LeftMenu />

      {/* Right Content (50% width) */}
      <div className="flex-1 p-4 overflow-y-auto ml-40">
        <h1 className="text-white px-5 py-5 text-center">
          Displaying {data.length} Books
        </h1>
        <BookView books={data} />
      </div>
    </div>
  );
};

export default DashBoard;
