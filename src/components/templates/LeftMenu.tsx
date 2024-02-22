import React from "react";
import Link from "next/link";

const LeftMenu = () => {
  return (
    <div className="fixed border-r border-gray-200 p-4 text-white h-full">
      {/* Your buttons or menu items go here */}
      <div>
        <button className="block border border-white rounded p-2 mb-4 w-full whitespace-nowrap hover:text-teal-200 duration-200 text-center hover:border-teal-200">
          <Link href={"/addbook"}>Add Book</Link>
        </button>
      </div>
      <div>
        <button className="block border border-white rounded p-2 mb-4 text-center w-full whitespace-nowrap hover:text-teal-200 duration-200 hover:border-teal-200">
          Sort Books
        </button>
      </div>
      {/* Add more buttons as needed */}
    </div>
  );
};

export default LeftMenu;
