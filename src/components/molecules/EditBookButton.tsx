"use client";
import React from "react";
import { useRouter } from "next/navigation";

const EditBookButton = ({id}: {id: string}) => {
  const router = useRouter();
  const handleButtonClick = () => {
    router.replace(`/editbook/${id}`);
  };
  return (
    <div>
      <button
        className="px-3 py-2 rounded-md bg-violet-800 text-white hover:bg-violet-600"
        onClick={handleButtonClick}
      >
        edit book
      </button>
    </div>
  );
};

export default EditBookButton;
