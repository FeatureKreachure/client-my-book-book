import React from "react";

interface Character {
  name: string;
  description: string;
}

interface CharacterSheetProps {
  characters: Character[];
  onDeleteCharacter?: (index: number) => void;
}

const CharacterSheet = ({
  characters,
  onDeleteCharacter,
}: CharacterSheetProps) => {
  return (
    <div className="flex items-center justify-center">
      <ul>
        {characters.map((character, index) => (
          <li
            key={index}
            className="border border-white rounded-md my-5 p-3 flex flex-col items-center w-[300px]" 
          >
            <strong>{character.name}</strong>
            <br />
            <div className="max-w-full">
              <p>{character.description}</p> <br />
            </div>
            {onDeleteCharacter && (
              <div>
                <button
                  className="border border-white rounded-md p-2 hover:border-teal-300 hover:text-teal-300 duration-200"
                  onClick={() => onDeleteCharacter(index)}
                >
                  Delete
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterSheet;
