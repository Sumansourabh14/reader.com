import axios from "axios";
import {
  API_URL,
  GOOGLE_BOOKS_API_KEY,
  GOOGLE_BOOKS_API_URL,
  QUOTES_API_URL,
} from "../utils/config";

// Consider
// https://api.hamatim.com/quote (For book quotes)

export const signUpApi = async (name, username, email, password) => {
  const data = await axios.post(`${API_URL}/api/user/sign-up`, {
    name,
    username,
    email,
    password,
  });

  return data;
};

export const loginApi = async (email, password) => {
  const data = await axios.post(
    `${API_URL}/api/auth/login`,
    {
      email,
      password,
    },
    { withCredentials: true }
  );

  return data;
};

export const logoutApi = async () => {
  const data = await axios.get(`${API_URL}/api/auth/logout`, {
    withCredentials: true,
  });

  return data;
};

export const userApi = async () => {
  const data = await axios.get(`${API_URL}/api/user/user`, {
    withCredentials: true,
  });
  console.log(data);

  return data;
};

export const randomQuoteApi = async () => {
  const data = await axios.get(`${QUOTES_API_URL}/random/quote`);

  return data;
};

// Google Books API
export const searchBookApi = async (bookTitle) => {
  const data = await axios.get(`${GOOGLE_BOOKS_API_URL}/books/v1/volumes`, {
    params: {
      q: bookTitle,
      key: GOOGLE_BOOKS_API_KEY,
    },
  });

  return data;
};

export const bookDetailsApi = async (volumeId) => {
  const data = await axios.get(
    `${GOOGLE_BOOKS_API_URL}/books/v1/volumes/${volumeId}`,
    {
      params: {
        key: GOOGLE_BOOKS_API_KEY,
      },
    }
  );

  return data;
};

export const fetchByGenreApi = async (genreTitle) => {
  const data = await axios.get(`${GOOGLE_BOOKS_API_URL}/books/v1/volumes`, {
    params: {
      q: `subject:${genreTitle}`,
      maxResults: 20,
      key: GOOGLE_BOOKS_API_KEY,
    },
  });

  return data;
};

// // Fetch word meaning from https://dictionaryapi.dev/
// export const getWord = async (word) => {
//   const data = await axios.get(
//     `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
//   );

//   return data;
// };

// // Fetch a random quote from an author
// export const getQuote = async () => {
//   const data = await axios.get(`https://api.quotable.io/random`);

//   return data;
// };
