import React from "react";
import BookView from "./BookView";
import { fetchBooks } from "@/utils/requests";
import LeftMenu from "./templates/LeftMenu";

// main view of a logged-in user
const DashBoard = async ({ email }: { email: string }) => {
  const data: Book[] = await fetchBooks(email);
  return (
    <div className="bg-black min-h-screen flex p-4 mx-auto mt-16">
      {/* Left Menu */}
      <LeftMenu />

      {/* Right Content */}
      <div className="flex-1 p-4 overflow-y-auto ml-40">
        <h1 className="text-white px-5 py-5 text-center">
          Displaying {data.length} Books
        </h1>
        {/** display the user's books on screen */}
        <BookView books={data} />
      </div>
    </div>
  );
};

export default DashBoard;
