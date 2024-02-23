"use client";
import { addBookByEmail } from "@/utils/requests";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import CharacterSheet from "./templates/CharacterSheet";
import AdditionalNotes from "./templates/AdditionalNotes";

interface AdditionalField {
  field: string;
  note: string;
}

const extraFields: AdditionalField[] = [
  { field: "Field 1", note: "Note 1" },
  { field: "Field 2", note: "Note 2" },
  // Add more additional fields as needed
];

const extraChars: Character[] = [
  { name: "Character 1", description: "Description 1" },
  { name: "Character 2", description: "Description 2" },
  // Add more characters as needed
];

const AddBook = ({ email }: { email: string }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishedYear, setPublishedYear] = useState<number | undefined>(
    undefined
  );
  const [genres, setGenres] = useState<string[]>([]);
  const [publicBook, setPublicBook] = useState(true);
  const [coverImage, setCoverImage] = useState("");

  const [characters, setCharacters] = useState<Character[]>([]);
  const [newCharacter, setNewCharacter] = useState<Character>({
    name: "",
    description: "",
  });

  const [additionalFields, setAdditionalFields] = useState<AdditionalField[]>(
    []
  );
  const [newAdditionalField, setNewAdditionalField] = useState<AdditionalField>(
    { field: "", note: "" }
  );

  const [dateOfPublication, setDateOfPublication] = useState<Date | undefined>(
    undefined
  );
  const [dateStartedReading, setDateStartedReading] = useState<
    Date | undefined
  >(undefined);
  const [dateFinishedReading, setDateFinishedReading] = useState<
    Date | undefined
  >(undefined);

  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async () => {
    // e.preventDefault();
    try {
      console.log("adding book");
      const res = await addBookByEmail(email, title, author, true);

      if (res?.error) {
        setError("All Fields Required");
      } else {
        console.log("book added");
        router.replace("dashboard");
        console.log("routed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addCharacter = () => {
    if (newCharacter.name && newCharacter.description) {
      setCharacters((prevCharacters) => [...prevCharacters, newCharacter]);
      // Clear input fields after adding a character
      setNewCharacter({ name: "", description: "" });
    } else {
      alert("Please enter both character name and description.");
    }
  };

  const deleteCharacter = (index: number) => {
    setCharacters((prevCharacters) =>
      prevCharacters.filter((_, i) => i !== index)
    );
  };

  const addAdditionalField = () => {
    if (newAdditionalField.field && newAdditionalField.note) {
      setAdditionalFields((prevFields) => [...prevFields, newAdditionalField]);
      // Clear input fields after adding an additional field
      setNewAdditionalField({ field: "", note: "" });
    } else {
      alert("Please enter both field and note.");
    }
  };

  const deleteAdditionalField = (index: number) => {
    setAdditionalFields((prevFields) =>
      prevFields.filter((_, i) => i !== index)
    );
  };

  return (
    <div>
      {/* title aithor and published year */}
      <div className="flex justify-between px-10 py-5">
        <div className="flex flex-col mb-4 gap-3">
          <h1 className="text-white">Book Details</h1>
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Title"
          />
          <input
            onChange={(e) => setAuthor(e.target.value)}
            type="text"
            placeholder="Author"
          />
          <input
            onChange={(e) =>
              setPublishedYear(parseInt(e.target.value) || undefined)
            }
            type="number"
            placeholder="Year Published"
          />
        </div>

        {/** characters */}
        <div className="text-white flex flex-col gap-3">
          <h1>Characters</h1>
          <input
            type="text"
            placeholder="Character name"
            value={newCharacter.name}
            onChange={(e) =>
              setNewCharacter({ ...newCharacter, name: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Character Description"
            value={newCharacter.description}
            onChange={(e) =>
              setNewCharacter({ ...newCharacter, description: e.target.value })
            }
          />
          <button className="text-white hover:text-teal-400 hover:border hover:rounded-md hover:border-teal-400" onClick={addCharacter}>Add Character</button>
          <CharacterSheet
            characters={characters}
            onDeleteCharacter={deleteCharacter}
          />
        </div>

        {/** additional fields */}
        <div className="text-white flex flex-col gap-3">
          <h1>Additional Notes</h1>
          <input
            type="text"
            placeholder="Field"
            value={newAdditionalField.field}
            onChange={(e) =>
              setNewAdditionalField({
                ...newAdditionalField,
                field: e.target.value,
              })
            }
          />
          <input
            type="text"
            placeholder="Note"
            value={newAdditionalField.note} 
            onChange={(e) =>
              setNewAdditionalField({
                ...newAdditionalField,
                note: e.target.value,
              })
            }
          />
          <button className="text-white my-5 hover:text-teal-400 hover:border hover:rounded-md hover:border-teal-400" onClick={addAdditionalField}>Add Additional Field</button>
          <AdditionalNotes
            additionalFields={additionalFields}
            onDeleteField={deleteAdditionalField}
          />
        </div>
      </div>
      {/** button to addbook */}
      <div className="text-white hover:text-teal-300">
        <button
          onClick={() => {
            handleSubmit();
          }}
        >
          ADD BOOK
        </button>
      </div>
    </div>
  );
};

export default AddBook;

{
  /* <div className="text-white grid place-items-center">
      <div className="shadow-lg shadow-teal-400 p-5 rounded-lg border-t-4 border-teal-400">
        <h1 className="text-xl font-bold my-4">Add Book</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Title"
          />
          <input
            onChange={(e) => setAuthor(e.target.value)}
            type="text"
            placeholder="Author"
          />
          <button className="bg-white text-black hover:bg-teal-200 rounded-md px-6 py-2">
            Add Book
          </button>
          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}
        </form>
      </div>
    </div> */
}
