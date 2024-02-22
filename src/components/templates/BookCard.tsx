// import React from 'react';

// interface BookCardProps {
//   book: Book;
// }

// const truncateText = (text: string, maxLength: number) => {
//   return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
// };

// const BookCard: React.FC<BookCardProps> = ({ book }) => {
//   const defaultImage = "/defaultBook.svg";

//   return (
//     <div className="max-w-md mx-auto bg-gray-100 p-4 rounded-lg shadow-md transition duration-200 transform hover:scale-105">
//       <img
//         src={defaultImage}
//         alt={`Cover of the book ${book.title}`}
//         className="w-full h-48 object-cover mb-4 rounded-md"
//       />
//       <div className="text-gray-800">
//         <div className="font-bold text-xl mb-2" title={book.title}>
//           <p>{truncateText(book.title, 20)}</p>
//         </div>
//         <p className="text-gray-600">
//           <span title={book.author}>{truncateText(book.author, 15)}</span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default BookCard;

// import React from "react";
//working version
// interface BookCardProps {
//   book: Book;
// }

// const truncateText = (text: string, maxLength: number) => {
//   return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
// };

// const BookCard = ({ book }: BookCardProps) => {
//   const defaultImage = "/logo.svg";

//   return (
//     <div className="max-w-md mx-auto relative overflow-hidden rounded-md transition duration-200 transform hover:scale-105 hover:border hover:border-white">
//       <img
//         src={defaultImage}
//         alt={`Cover of the book ${book.title}`}
//         className="w-full h-48 object-cover rounded-t-md"
//       />
//       <div className=" text-teal-300 p-4 rounded-b-md">
//         <div className="font-bold text-xl mb-2" title={book.title}>
//           <p>{truncateText(book.title, 20)}</p>
//         </div>
//         <p className="text-gray-100" title={book.author}>
//           <span>{truncateText(book.author, 15)}</span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default BookCard;

//test
import React from "react";

interface BookCardProps {
  book: Book;
}

const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

const BookCard = ({ book }: BookCardProps) => {
  const defaultImage = "/logo.svg";

  return (
    <div className="mx-auto relative overflow-hidden rounded-md transition duration-200 transform hover:scale-105 hover:border hover:border-teal-200 w-full">
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
