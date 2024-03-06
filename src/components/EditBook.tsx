"use client";
import React, { useState } from "react";
import EditableAdditionalNotes from "./templates/EditableAdditionalNotes";
import EditableCharacterSheet from "./templates/EditableCharacterSheet";
import { deleteBook, patchBook } from "@/utils/requests";
import { useRouter } from "next/navigation";

interface EditBookProps {
  bookData: Book;
}

// edit book page
// renders on client-side
const EditBook = ({ bookData }: EditBookProps) => {
  // keep track of edits with stateful variables
  const [editedTitle, setEditedTitle] = useState(bookData.title);
  const [editedAuthor, setEditedAuthor] = useState(bookData.author);
  const [editedCharacters, setEditedCharacters] = useState<Character[]>(
    bookData.characters
  );
  const [editedAdditionalFields, setEditedAdditionalFields] = useState<
    AdditionalField[]
  >(bookData.additionalFields);

  // create an instance of the next router
  const router = useRouter();

  // save changes to db
  const handleSave = async () => {
    try {
      const url = `${process.env.NEXT_PUBLIC_REST_API_URL}book/${bookData._id}`;
      console.log("url:", url);

      // patch the book using mondoDB uuid and edited info
      const res = await patchBook(
        url,
        editedTitle,
        editedAuthor,
        editedCharacters,
        editedAdditionalFields
      );
      if (res?.error) {
        // redirect to dashboard
        console.log("error");
      } else {
        router.replace("/dashboard");
        router.refresh();
      }
    } catch (error) {
      console.error("PatchBook Error ", error);
    }
  };

  const handleDelete = async () => {
    try {
      // create the url for delete
      const url = `${process.env.NEXT_PUBLIC_REST_API_URL}book/${bookData._id}`;
      // delete the book
      const res = await deleteBook(url);
      if (res?.error) {
        // redirect to dashboard
        console.log("error");
      } else {
        router.replace("/dashboard");
        router.refresh();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-10 text-white flex items-center flex-col mt-16">
      <div className="flex items-center mb-6">
        <img src="/logo.svg" alt="Book Logo" className="rounded-md mr-4 h-52" />
        <div>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className="text-3xl mb-2 font-bold text-teal-700 bg-transparent border-b-2 border-teal-700 focus:outline-none focus:border-teal-400"
          />
          <br />
          <input
            type="text"
            value={editedAuthor}
            onChange={(e) => setEditedAuthor(e.target.value)}
            className="text-slate-500 mb-2 bg-transparent focus:outline-none"
          />
          <br />
          <div className="flex gap-3">
            <button
              className="px-3 py-2 rounded-md bg-violet-800 text-white hover:bg-violet-600"
              onClick={handleSave}
            >
              Save Changes
            </button>
            <button
              className="px-3 py-2 rounded-md bg-red-800 text-white hover:bg-red-600"
              onClick={handleDelete}
            >
              Delete Book
            </button>
          </div>
        </div>
      </div>

      <div className="flex mb-6">
        <div className="w-1/2 pr-4">
          <h2 className="text-xl font-semibold mb-3 text-teal-400">
            Characters
          </h2>
          <EditableCharacterSheet
            characters={editedCharacters}
            onUpdateCharacter={(updatedCharacters: Character[]) =>
              setEditedCharacters(updatedCharacters)
            }
          />
        </div>

        <div className="w-1/2 pl-4">
          <h2 className="text-xl font-semibold mb-3 text-teal-400">
            Notes
          </h2>
          <EditableAdditionalNotes
            additionalFields={editedAdditionalFields}
            onUpdateField={(updatedFields: AdditionalField[]) =>
              setEditedAdditionalFields(updatedFields)
            }
          />
        </div>
      </div>
    </div>
  );
};

export default EditBook;
