import React from "react";

interface AdditionalField {
  field: string;
  note: string;
}

interface AdditionalNotesProps {
  additionalFields: AdditionalField[];
  onDeleteField?: (index: number) => void;
}

const AdditionalNotes= ({
  additionalFields,
  onDeleteField,
}: AdditionalNotesProps) => {
  return (
    <div className="flex items-center justify-center">
      <ul>
        {additionalFields.map((field, index) => (
          <li
            key={index}
            className="border border-white rounded-md my-5 p-3 flex flex-col items-center w-[300px]" 
          >
            <strong>{field.field}</strong>
            <br />
            <div className="max-w-full">
              <p>{field.note}</p> <br />
            </div>
            {onDeleteField && (
              <div>
                <button
                  className="border border-white rounded-md p-2 hover:border-teal-300 hover:text-teal-300 duration-200"
                  onClick={() => onDeleteField(index)}
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

export default AdditionalNotes;
