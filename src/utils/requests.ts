// import axios from "axios";
const baseUrl = process.env.API_URL;
import * as bcrypt from "bcryptjs";

export const hashPassword = async (text: string) => {
  const hashedPassword = await bcrypt.hash(text, 10);
  return hashedPassword;
};

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

export const fetchBooks = async (email: string) => {
  const baseURL = `${process.env.REST_API_URL}book/email/${email}`
  const url = `http://127.0.0.1:5001/api/book/email/${email}`;
  try {
    const response = await fetch(baseURL, {
      method: "GET",
      cache: "no-store",
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

export const addBookByEmail = async (
  email: string,
  title: string,
  author: string,
  publicStatus: boolean
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
