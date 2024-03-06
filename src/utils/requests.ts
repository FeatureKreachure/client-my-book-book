import * as bcrypt from "bcryptjs";

// utility functions for useage throughout the app

// not used on client-side as of now
// but may be in the future so
// i'm leaving it here
export const hashPassword = async (text: string) => {
  const hashedPassword = await bcrypt.hash(text, 10);
  return hashedPassword;
};

// fetch list of all books on the server
// used in testing and for future updates
// (if I ever get around to them)
// used in server side comp: DashBoard
export const fetchBooks = async (email: string) => {
  const baseURL = `${process.env.REST_API_URL}book/email/${email}`;
  try {
    const response = await fetch(baseURL, {
      method: "GET",
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error(`Problem fetching books: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Problem fetching books: ", error);
  }
};

// post a new book to the DB through the RESTful API
// only collects and posts limited information for now
// used in Client-Side Comp AddBook
export const addBookByEmail = async (
  apiUrl: string,
  email: string,
  title: string,
  author: string,
  publicStatus: boolean,
  characters?: Character[],
  additionalFields?: AdditionalField[]
) => {
  const fetchUrl = `${apiUrl}book/email/${email}`;
  // const url = `http://127.0.0.1:5001/api/book/email/${email}`;
  try {
    const response = await fetch(fetchUrl, {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        title,
        author,
        public: publicStatus,
        characters,
        additionalFields,
      }),
    });
    if (!response.ok) {
      throw new Error(`Problem fetching books: ${response.statusText}`);
    }
    // console.log(await response.json());
    return await response.json();
  } catch (error) {
    console.error("Problem fetching books: ", error);
  }
};

// patch book with the given UUID (in the url)
// used in clientComp EditBook
export const patchBook = async (
  url: string,
  title?: string,
  author?: string,
  characters?: Character[],
  additionalFields?: AdditionalField[]
) => {
  try {
    // console.log("attempting: ", url);
    const response = await fetch(url, {
      method: "PATCH",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        author,
        characters,
        additionalFields,
      }),
    });
    const patchedbook = await response.json();
    // console.log("PATCHED: ", patchedbook);
    return patchedbook;
  } catch (error) {
    console.error("Failed To Patch Book: ", error);
  }
};

// delete book
export const deleteBook = async (apiUrl: string) => {
  // url = apiUrl/book/:_id
  try {
    // const fetchUrl = `${apiUrl}book/${bookId}`;
    const response = await fetch(apiUrl, {
      method: "DELETE",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const deleteBook = await response.json();
    return deleteBook;
  } catch (error) {
    console.error(error);
  }
};
