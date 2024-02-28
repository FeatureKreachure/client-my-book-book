import React from "react";
import CharacterSheet from "./templates/CharacterSheet";
import AdditionalNotes from "./templates/AdditionalNotes";
import EditBookButton from "./molecules/EditBookButton";

interface ViewBookProps {
  bookData: Book;
}


// display a book's info on screen in the browser
// server-side component with client-side functionalities extracted
// into separate functional components
const ViewBook = ({ bookData }: ViewBookProps) => {
  return (
    <div className="p-10 text-white flex items-center flex-col">
      <div className="flex items-center mb-6">
        <img src="/logo.svg" alt="Book Logo" className="rounded-md mr-4 h-52" />
        <div>
          <h1 className="text-3xl font-bold text-teal-700">{bookData.title}</h1>
          <p className="text-slate-500">{bookData.author}</p>
          <br />
          {/** extra component because it's a client-side component */}
          <EditBookButton id={bookData._id} />
        </div>
      </div>

      <div className="flex mb-6">
        <div className="w-1/2 pr-4">
          <h2 className="text-xl font-semibold mb-3 text-teal-400">
            Characters
          </h2>
          {/** Client-side component to display characters */}
          <CharacterSheet
            characters={bookData.characters}
            onDeleteCharacter={undefined} // Delete method is optional for display
          />
        </div>

        <div className="w-1/2 pl-4">
          <h2 className="text-xl font-semibold mb-3 text-teal-400">
            Additional Fields
          </h2>
          {/** client side component to display the additional notes */}
          <AdditionalNotes
            additionalFields={bookData.additionalFields}
            onDeleteField={undefined} // Delete method is optional for display
          />
        </div>
      </div>
    </div>
  );
};

export default ViewBook;
