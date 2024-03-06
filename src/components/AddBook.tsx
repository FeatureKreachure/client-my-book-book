"use client";
import { addBookByEmail } from "@/utils/requests";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import CharacterSheet from "./templates/CharacterSheet";
import AdditionalNotes from "./templates/AdditionalNotes";

const AddBook = ({ email }: { email: string }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  // unused stateful variables are present for future updates
  // const [publishedYear, setPublishedYear] = useState<number | undefined>(
  //   undefined
  // );
  // const [genres, setGenres] = useState<string[]>([]);
  // const [coverImage, setCoverImage] = useState("");

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

  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async () => {
    // e.preventDefault();
    if (!title || !author) {
      setError("!!! Title And Author Are Required.");
    }

    try {
      const apiUrl = `${process.env.NEXT_PUBLIC_REST_API_URL}`;
      const res = await addBookByEmail(
        apiUrl,
        email,
        title,
        author,
        true,
        characters,
        additionalFields
      );

      if (res?.error) {
        setError("All Fields Required");
      } else {
        router.replace("dashboard");
        router.refresh();
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
      <div className="px-10 flex gap-3">
        <button
          onClick={() => {
            handleSubmit();
          }}
          className="text-white hover:text-teal-300 border border-white hover:border-teal-300 rounded-md px-4 py-2"
        >
          ADD BOOK
        </button>
        {error && (
          <div>
            <p className="text-white bg-red-500 rounded-md px-4 py-2">
              {error}
            </p>
          </div>
        )}
      </div>
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
          {/* <input
            onChange={(e) =>
              setPublishedYear(parseInt(e.target.value) || undefined)
            }
            type="number"
            placeholder="Year Published"
          />
          <input type="number" placeholder="Rating" /> */}
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
          <button
            className="text-white border border-white rounded-md hover:text-teal-400 hover:border hover:rounded-md hover:border-teal-400"
            onClick={addCharacter}
          >
            Add Character
          </button>
          <CharacterSheet
            characters={characters}
            onDeleteCharacter={deleteCharacter}
          />
        </div>

        {/** additional fields */}
        <div className="text-white flex flex-col gap-3">
          <h1>Notes</h1>
          <input
            type="text"
            placeholder="Title"
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
          <button
            className="text-white border border-white rounded-md hover:text-teal-400 hover:border hover:rounded-md hover:border-teal-400"
            onClick={addAdditionalField}
          >
            Add Note
          </button>
          <AdditionalNotes
            additionalFields={additionalFields}
            onDeleteField={deleteAdditionalField}
          />
        </div>
      </div>
    </div>
  );
};

export default AddBook;
