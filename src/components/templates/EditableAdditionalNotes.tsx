"use client";
import React, { useState } from "react";

interface EditableAdditionalNotesProps {
  additionalFields: AdditionalField[];
  onUpdateField: (updatedFields: AdditionalField[]) => void;
}

const EditableAdditionalNotes = ({
  additionalFields,
  onUpdateField,
}: EditableAdditionalNotesProps) => {
  const [editedFields, setEditedFields] =
    useState<AdditionalField[]>(additionalFields);

  const handleFieldChange = (index: number, newField: string) => {
    const updatedFields = [...editedFields];
    updatedFields[index].field = newField;
    setEditedFields(updatedFields);
  };

  const handleNoteChange = (index: number, newNote: string) => {
    const updatedFields = [...editedFields];
    updatedFields[index].note = newNote;
    setEditedFields(updatedFields);
  };

  const handleUpdateField = () => {
    onUpdateField(editedFields);
  };

  return (
    <div className="flex items-center justify-center">
      <ul>
        {editedFields.map((field, index) => (
          <li
            key={index}
            className="border border-white rounded-md my-5 p-3 flex flex-col items-center w-[500px]" // Set a fixed width as per your requirement
          >
            <input
              type="text"
              value={field.field}
              onChange={(e) => handleFieldChange(index, e.target.value)}
              className="font-bold text-teal-700 bg-transparent border-b-2 border-teal-700 focus:outline-none focus:border-teal-400 mb-2"
            />
            <br />
            <textarea
              value={field.note}
              onChange={(e) => handleNoteChange(index, e.target.value)}
              className="text-slate-500 bg-transparent focus:outline-none mb-2 w-[400px]"
            />
            <br />
            <button
              className="border border-white rounded-md p-2 hover:border-teal-300 hover:text-teal-300 duration-200"
              onClick={handleUpdateField}
            >
              Update
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EditableAdditionalNotes;
