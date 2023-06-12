import axios from "axios";
import { API_URL } from "../utils/config";

// Consider
// https://api.hamatim.com/quote (For book quotes)

export const signUpApi = async (username, email, password) => {
  const data = await axios.post(`${API_URL}/api/user/sign-up`, {
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
