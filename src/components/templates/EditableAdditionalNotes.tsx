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

  const [newAdditionalField, setNewAdditionalField] = useState<AdditionalField>(
    { field: "", note: "" }
  );

  const addAdditionalField = () => {
    if (newAdditionalField.field && newAdditionalField.note) {
      setEditedFields((prevFields) => [...prevFields, newAdditionalField]);
      // Clear input fields after adding an additional field
      setNewAdditionalField({ field: "", note: "" });
    } else {
      alert("Please enter both field and note.");
    }
  };

  const deleteAdditionalField = (index: number) => {
    setEditedFields((prevFields) => prevFields.filter((_, i) => i !== index));
  };

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
    alert("Update Successful");
  };

  return (
    <div className="flex items-center justify-center">
      <div className="text-white flex flex-col gap-3 items-center">
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
          className="text-white border border-white rounded-md hover:text-teal-400 hover:border hover:rounded-md hover:border-teal-400 px-3 py-2"
          onClick={addAdditionalField}
        >
          Add Note
        </button>
        <button
          className="px-3 py-2 rounded-md bg-violet-800 text-white hover:bg-violet-600 border border-white"
          onClick={handleUpdateField}
        >
          Save Changes
        </button>
        <ul>
          {editedFields.map((field, index) => (
            <li
              key={index}
              className="border border-white rounded-md my-5 p-3 flex flex-col items-center w-[500px]"
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
              <div className="flex gap-3">
                {/* <button
                  className="border border-white rounded-md p-2 hover:border-teal-300 hover:text-teal-300 duration-200"
                  onClick={handleUpdateField}
                >
                  Update
                </button> */}
                <button
                  className="border border-white rounded-md p-2 hover:border-teal-300 hover:text-teal-300 duration-200"
                  onClick={() => deleteAdditionalField(index)}
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

export default EditableAdditionalNotes;
