import React from "react";
import AddBook from "@/components/AddBook";
import { toStayOrNot } from "@/utils/redirect";

const AddBookPage = async () => {
  // user logged in?
  const email = await toStayOrNot();
  return (
    <div className="mt-16 py-5">
      {/** Render UI */}
      <AddBook email={email}/>
    </div>
  );
};

export default AddBookPage;
