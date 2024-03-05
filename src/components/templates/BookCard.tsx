"use client";
import React from "react";
import { useRouter } from "next/navigation";

interface BookCardProps {
  book: Book;
}

const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

const BookCard = ({ book }: BookCardProps) => {
  const defaultImage = "/logo.svg";
  const router = useRouter();

  const handleCardClick = () => {
    router.replace(`/viewbook/${book._id}`);
  };

  return (
    <div
      className="mx-auto relative overflow-hidden rounded-md transition duration-200 transform hover:scale-105 hover:border hover:border-teal-200 w-full"
      onClick={handleCardClick}
    >
      <img
        src={defaultImage}
        alt={`Cover of the book ${book.title}`}
        className="w-full max-h-64 object-cover rounded-t-md"
      />
      <div className=" text-teal-300 p-4 rounded-b-md">
        <div className="font-bold text-xl mb-2" title={book.title}>
          <p>{truncateText(book.title, 20)}</p>
        </div>
        <p className="text-gray-100" title={book.author}>
          <span>{truncateText(book.author, 15)}</span>
        </p>
      </div>
    </div>
  );
};

export default BookCard;
