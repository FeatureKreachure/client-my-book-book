import React from "react";
import AddBook from "@/components/AddBook";
import { toStayOrNot } from "@/utils/redirect";

const AddBookPage = async () => {
  // const data = await fetchBooks();
  // const email = await toStayOrNot();
  const email = "123"

  return (
    <div className="mt-16 py-5">
      <AddBook email={email}/>
    </div>
  );
};

export default AddBookPage;
