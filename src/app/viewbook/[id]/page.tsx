import ViewBook from "@/components/ViewBook";
import { toStayOrNot } from "@/utils/redirect";
import React from "react";

const ViewBookPage = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  // user logged in?
  await toStayOrNot()
  // get url params and construct fetch url
  const bookId: string = params.id;
  const url = `${process.env.REST_API_URL}book/${bookId}`;

  // fetch the book needed for ViewBook Component
  const response = await fetch(url, { method: "GET", cache: "no-store" });
  const book: Book = await response.json();

  return (
    <div className="mt-16 py-5">
      <ViewBook bookData={book} />
    </div>
  );
};

export default ViewBookPage;
