// components/BookListing.js or components/BookListing.tsx (if using TypeScript)
import React from 'react'

interface BookCardProps {
    book: Book
}



const BookListing = ({book}: BookCardProps) => {
    return (
      <div className="flex items-center py-4">
        <img src={book.coverImage || '/defaultBook.svg'} alt={`Cover of the book ${book.title}`} className="w-48 h-64 object-cover mr-4" />
        <div>
          <p className="font-bold text-xl mb-2">{book.title}</p>
          <p className="text-gray-700 text-base">{book.author}</p>
        </div>
      </div>
    );
  };
  
  export default BookListing;