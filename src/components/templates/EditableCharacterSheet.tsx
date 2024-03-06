"use client";
import React, { useState } from "react";

interface EditableCharacterSheetProps {
  characters: Character[];
  onUpdateCharacter: (updatedCharacters: Character[]) => void;
}

const EditableCharacterSheet = ({
  characters,
  onUpdateCharacter,
}: EditableCharacterSheetProps) => {
  const [editedCharacters, setEditedCharacters] =
    useState<Character[]>(characters);

  // for adding new characters
  const [newCharacter, setNewCharacter] = useState<Character>({
    name: "",
    description: "",
  });

  // methods start

  const addCharacter = () => {
    if (newCharacter.name && newCharacter.description) {
      // set edited characters to prev + new using spread operator
      setEditedCharacters((prevCharacters) => [
        ...prevCharacters,
        newCharacter,
      ]);
      // Clear input fields after adding a character
      setNewCharacter({ name: "", description: "" });
    } else {
      alert("Please enter both character name and description.");
    }
  };

  const deleteCharacter = (index: number) => {
    setEditedCharacters((prevCharacters) =>
      prevCharacters.filter((_, i) => i !== index)
    );
  };

  const handleNameChange = (index: number, newName: string) => {
    const updatedCharacters = [...editedCharacters];
    updatedCharacters[index].name = newName;
    setEditedCharacters(updatedCharacters);
  };

  const handleDescriptionChange = (index: number, newDescription: string) => {
    const updatedCharacters = [...editedCharacters];
    updatedCharacters[index].description = newDescription;
    setEditedCharacters(updatedCharacters);
  };

  const handleUpdateCharacter = () => {
    onUpdateCharacter(editedCharacters);
    alert("Characters Updated Successfully");
  };

  // methods end

  return (
    <div className="flex items-center justify-center">
      <div className="text-white flex flex-col gap-3 items-center">
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
          className="text-white border border-white rounded-md hover:text-teal-400 hover:border hover:rounded-md hover:border-teal-400 px-3 py-2"
          onClick={addCharacter}
        >
          Add Character
        </button>

        <button
          className="px-3 py-2 rounded-md bg-violet-800 text-white hover:bg-violet-600 border border-white"
          onClick={handleUpdateCharacter}
        >
          Save Changes
        </button>

        <ul>
          {editedCharacters.map((character, index) => (
            <li
              key={index}
              className="border border-white rounded-md my-5 p-3 flex flex-col items-center w-[500px]" // Set a fixed width as per your requirement
            >
              <input
                type="text"
                value={character.name}
                onChange={(e) => handleNameChange(index, e.target.value)}
                className="font-bold text-teal-700 bg-transparent border-b-2 border-teal-700 focus:outline-none focus:border-teal-400 mb-2"
              />
              <br />
              <textarea
                value={character.description}
                onChange={(e) => handleDescriptionChange(index, e.target.value)}
                className="text-slate-500 bg-transparent focus:outline-none mb-2 w-[400px]"
              />
              <br />
              <div className="flex gap-3">
                {/* <button
                  className="border border-white rounded-md p-2 hover:border-teal-300 hover:text-teal-300 duration-200"
                  onClick={handleUpdateCharacter}
                >
                  Update
                </button> */}
                <button
                  className="border border-white rounded-md p-2 hover:border-teal-300 hover:text-teal-300 duration-200"
                  onClick={() => deleteCharacter(index)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EditableCharacterSheet;
