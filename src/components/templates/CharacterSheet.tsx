import React from "react";

// const characters: Character[] = [
//     { name: 'Character 1', description: 'Description 1' },
//     { name: 'Character 2', description: 'Description 2' },
//     // Add more characters as needed
//   ];

interface CharacterSheetProps {
  characters: Character[];
  onDeleteCharacter: (index: number) => void;
}

const CharacterSheet = ({
  characters,
  onDeleteCharacter,
}: CharacterSheetProps) => {
  return (
    <div>
      <h1>Character Sheet</h1>
      <ul>
        {characters.map((character, index) => (
          <li key={index}>
            <strong>Name:</strong> {character.name}
            <br />
            <strong>Description:</strong> {character.description} <br />
            <button onClick={() => onDeleteCharacter(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterSheet;
