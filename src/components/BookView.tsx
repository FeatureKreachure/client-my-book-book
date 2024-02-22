// import React from "react";
// import { BookCard } from "./templates/BookCard";

// interface BookViewProps {
//     books: Book[]
// }

// const BookView = ( {books}: BookViewProps) => {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//       {books.map((book, index) => (
//         <BookCard key={index} book={book} />
//       ))}
//     </div>
//   );
// };

// export default BookView;

import React from "react";
import BookCard from "./templates/BookCard";

interface BookViewProps {
  books: Book[];
}

const BookView = ( {books}: BookViewProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
      {books.map((book, index) => (
        <BookCard key={index} book={book} />
      ))}
    </div>
  );
};

export default BookView;
