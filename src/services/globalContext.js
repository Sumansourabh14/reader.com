"use client"; // to use useState and other hooks
import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";
import {
  bookDetailsApi,
  fetchByGenreApi,
  loginApi,
  logoutApi,
  randomQuoteApi,
  searchBookApi,
  signUpApi,
  userApi,
} from "./globalApi";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children, theme }) => {
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [signUpError, setSignUpError] = useState(null);
  const [user, setUser] = useState(null);
  const [searchData, setSearchData] = useState(null);

  const router = useRouter();

  const signUp = async (name, username, email, password) => {
    setSignUpError(null);

    try {
      setLoading(true);
      const data = await signUpApi(name, username, email, password);

      console.log(data);
      console.log("Signed up");

      setLoading(false);
      router.push("/login");
    } catch (error) {
      console.log(error);

      if (error.response.status === 400) {
        // setSignUpError("Another user is already registered with this email");
        setSignUpError(error.response?.data.message);
      }

      setLoading(false);
    }
  };

  const login = async (email, password) => {
    setLoginError(null);

    try {
      setLoading(true);
      const data = await loginApi(email, password);

      console.log(data);
      console.log("Logged in");

      setIsAuthenticated(true);
      setLoading(false);

      router.push("/profile");
    } catch (error) {
      console.log(error);

      setLoginError(error.response.data.message);
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      setLoading(true);
      const data = await logoutApi();

      console.log(data);
      console.log("Logged out");

      setIsAuthenticated(false);
      setLoading(false);
      router.push("/login");
    } catch (error) {
      console.log(error);
      setIsAuthenticated(true);
      setLoading(false);
    }
  };

  const getUser = async () => {
    try {
      const data = await userApi();
      console.log(data.data.user);
      setUser(data.data.user);
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error);
      setUser(null);
      setIsAuthenticated(false);
    }
  };

  const getRandomQuote = async () => {
    try {
      const data = await randomQuoteApi();
      return data.data;
    } catch (error) {
      console.log(error);
    }
  };

  // Google Books API
  const searchBook = async (bookTitle) => {
    try {
      const data = await searchBookApi(bookTitle);

      router.push(`/search?query=${bookTitle}`);

      setSearchData(data.data.items);

      return data.data.items;
    } catch (error) {
      console.log(error);
    }
  };

  const getBooksByGenre = async (genreTitle) => {
    try {
      const data = await fetchByGenreApi(genreTitle);

      return data.data.items;
    } catch (error) {
      console.log(error);
    }
  };

  const getBookDetails = async (volumeId) => {
    try {
      const data = await bookDetailsApi(volumeId);

      // router.push(`/search?query=${bookTitle}`);

      return data.data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, [isAuthenticated]);

  useEffect(() => {
    console.log({ user });
  }, [user]);

  return (
    <GlobalContext.Provider
      value={{
        loading,
        login,
        isAuthenticated,
        loginError,
        logout,
        signUp,
        signUpError,
        user,
        getRandomQuote,
        searchBook,
        searchData,
        getBookDetails,
        getBooksByGenre,
        theme,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
