"use client"; // to use useState and other hooks
import { createContext, useState } from "react";
import { loginApi } from "./globalApi";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const login = async (email, password) => {
    setLoginError(null);

    try {
      setLoading(true);
      const data = await loginApi(email, password);

      console.log(data);
      console.log("Logged in");

      setIsLoggedIn(true);
      setLoading(false);
    } catch (error) {
      console.log(error);

      setLoginError(error.response.data.message);
      setLoading(false);
    }
  };

  return (
    <GlobalContext.Provider value={{ loading, login, isLoggedIn, loginError }}>
      {children}
    </GlobalContext.Provider>
  );
};
