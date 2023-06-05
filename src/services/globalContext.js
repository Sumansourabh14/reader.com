"use client"; // to use useState and other hooks
import { createContext, useEffect, useState } from "react";
import { loginApi, logoutApi, userApi } from "./globalApi";
import { useRouter } from "next/navigation";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  console.log({ token });

  const router = useRouter();

  const login = async (email, password) => {
    setLoginError(null);

    try {
      setLoading(true);
      const data = await loginApi(email, password);

      console.log(data);
      console.log("Logged in");

      setIsAuthenticated(true);
      setToken(data.data.accessToken);
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
    } catch (error) {
      console.log(error);
      setIsAuthenticated(true);
      setLoading(false);
    }
  };

  const getUser = async () => {
    try {
      const data = await userApi(token);
      setUser(data.data.user);
      console.log(data.data.user);
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error);
      setUser(null);
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    getUser();
  }, [token]);

  return (
    <GlobalContext.Provider
      value={{ loading, login, isAuthenticated, loginError, logout, user }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
