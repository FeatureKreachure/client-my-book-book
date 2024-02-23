import React from "react";

interface AdditionalNotesProps {
  additionalFields: AdditionalField[];
  onDeleteField: (index: number) => void;
}

const AdditionalNotes = ({
  additionalFields, onDeleteField
}: AdditionalNotesProps) => {
  return (
    <div>
      <h1>Additional Notes</h1>
      <ul>
        {additionalFields.map((field, index) => (
          <li key={index}>
            <strong>Field:</strong> {field.field}<br />
            <strong>Note:</strong> {field.note} <br />
            <button onClick={() => onDeleteField(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdditionalNotes;
