"use client";
import BookView from '@/components/BookView';
import { fetchBooks } from '@/utils/requests';
import React, { useEffect, useState } from 'react'

const ClientButton = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchBooks();
      console.log("Response: ", res)
      setBooks(res);
    }
    fetchData();
  }, [])
  return (
    <div>
      {/* <button onClick={() => console.log("FETCHED: ", books)} className='text-green-500'>SHOW ME THE MONEEEYYYYY</button> */}
      {/* <BookView book={books} /> */}
      {/* Correct prop name here */}
      <BookView books={books} />
    </div>
  )
}

export default ClientButton