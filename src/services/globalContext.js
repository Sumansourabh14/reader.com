"use client"; // to use useState and other hooks
import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";
import { loginApi, logoutApi, userApi } from "./globalApi";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const router = useRouter();

  const login = async (email, password) => {
    setLoginError(null);

    try {
      setLoading(true);
      const data = await loginApi(email, password);

      console.log(data);
      console.log("Logged in");

      setIsAuthenticated(true);
      // setToken(data.data.accessToken);
      setToken(getCookie("token"));
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
      console.log(data.data.user);
      setUser(data.data.user);
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error);
      setUser(null);
      setIsAuthenticated(false);
    }
  };

  const getCookie = (name) => {
    const cookieString = document.cookie;
    const cookies = cookieString.split(";");
    console.log(cookieString, cookies);

    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(name + "=")) {
        return cookie.substring(name.length + 1);
      }
    }

    return null;
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    console.log({ token, user });
  }, [token, user]);

  return (
    <GlobalContext.Provider
      value={{ loading, login, isAuthenticated, loginError, logout, user }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
