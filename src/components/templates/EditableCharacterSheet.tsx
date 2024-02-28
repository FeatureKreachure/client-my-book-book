"use client"
import React, { useState } from "react";

interface EditableCharacterSheetProps {
  characters: Character[];
  onUpdateCharacter: (updatedCharacters: Character[]) => void;
}

const EditableCharacterSheet = ({
  characters,
  onUpdateCharacter,
}: EditableCharacterSheetProps) => {
  const [editedCharacters, setEditedCharacters] = useState<Character[]>(characters);

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
  };

  return (
    <div className="flex items-center justify-center">
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
            <button
              className="border border-white rounded-md p-2 hover:border-teal-300 hover:text-teal-300 duration-200"
              onClick={() => onUpdateCharacter(editedCharacters)}
            >
              Update
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EditableCharacterSheet;
