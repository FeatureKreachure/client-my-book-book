import EditBook from "@/components/EditBook";
import { toStayOrNot } from "@/utils/redirect";
import React from "react";

// server-side for easier fetch
const EditBookPage = async ({ params }: { params: { id: string } }) => {
  // user logged in?
  await toStayOrNot()
  // get bookID from params
  const bookId: string = params.id;
  // construct fetch url
  const url = `${process.env.REST_API_URL}book/${bookId}`;

  // fetch book to be edited
  const response = await fetch(url, { method: "GET", cache: "no-store" });
  const book: Book = await response.json();

  // render edit book component
  return (
    <div>
      {/** client side for interactivity */}
      <EditBook bookData={book} />
    </div>
  );
};

export default EditBookPage;
