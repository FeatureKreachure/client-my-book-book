const baseUrl = process.env.REST_API_URL;
import * as bcrypt from "bcryptjs";

// utility functions for useage throughout the app

export const hashPassword = async (text: string) => {
  const hashedPassword = await bcrypt.hash(text, 10);
  return hashedPassword;
};


// fetch user info based on a specific email 
// (because auth uses email as the uuid)
export const fetchUserByEmail = async (email: string) => {
  try {
    const user = await fetch("http://127.0.0.1:5001/api/user/bymail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });
    const doc = await user.json();
    return doc.username;
  } catch (error) {
    console.log(error);
  }
};


// fetch user into from mongoDB uuid
export const fetchUser = async (userId: string) => {
  try {
    const response = await fetch(`${baseUrl}/user/${userId}`, {
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error(`Problem fetching user: ${response.statusText}`);
    }
    console.log(response);
    return await response.json();
  } catch (error) {
    console.error("Problem fetching user: ", error);
  }
};


// fetch list of all books on the server
// used in testing and for future updates 
// (if I ever get around to them)
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
export const addBookByEmail = async (
  email: string,
  title: string,
  author: string,
  publicStatus: boolean,
  characters?: Character[],
  additionalFields?: AdditionalField[]
) => {
  const url = `http://127.0.0.1:5001/api/book/email/${email}`;
  try {
    const response = await fetch(url, {
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
export const patchBook = async (
  url: string,
  title?: string,
  author?: string,
  characters?: Character[],
  additionalFields?: AdditionalField[]
) => {
  try {
    console.log("attempting: ", url);
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
    console.log("PATCHED: ", patchedbook);
    return patchedbook;
  } catch (error) {
    console.error("Failed To Patch Book: ", error);
  }
};


// fetch the information of an individual book 
// based on the uuid
export const fetchBookById = async (id: string) => {
  const baseURL = `${process.env.REST_API_URL}book/${id}}`;
  try {
    const response = await fetch(baseURL, {
      method: "GET",
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error(`Problem fetching books: ${response.statusText}`);
    }
    const book = await response.json();
    return book;
  } catch (error) {
    console.error(error);
  }
};
