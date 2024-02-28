// Interfaces to model the mongoose schemas

interface Character {
  name: string;
  description: string;
}

interface AdditionalField {
  field: string;
  note: string;
}

interface Book {
  _id: string;
  title: string;
  author: string;
  publishedYear?: number;
  genres: string[];
  public: boolean;
  user: string; // the id of the user who owns the book
  coverImage?: string;
  characters: Character[];
  additionalFields: AdditionalField[];
  dateOfPublication?: Date;
  dateStartedReading?: Date;
  dateFinishedReading?: Date;
}

interface User {
  username: string;
  email: string;
  password: string; // not necessarily going to be used
  interests: string[];
}
