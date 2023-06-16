"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import { GlobalContextProvider } from "../services/globalContext";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Reader.com",
  description: "Created in Next.js",
};

export default function RootLayout({ children }) {
  const [themeMode, setThemeMode] = useState("light");

  const theme = createTheme({
    palette: { mode: themeMode },
  });

  const handleThemeChange = () => {
    setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  // console.log(theme);

  return (
    <html lang="en">
      <GlobalContextProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <body className={inter.className}>
            <Header themeMode={themeMode} handleTheme={handleThemeChange} />
            <main style={{ padding: "6rem 2rem 0 2rem" }}>{children}</main>
          </body>
        </ThemeProvider>
      </GlobalContextProvider>
    </html>
  );
}
