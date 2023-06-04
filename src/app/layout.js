import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import { GlobalContextProvider } from "../services/globalContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Reader.com",
  description: "Created in Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GlobalContextProvider>
        <body className={inter.className}>
          <Header />
          <main style={{ padding: "5rem 2rem 0 2rem" }}>{children}</main>
        </body>
      </GlobalContextProvider>
    </html>
  );
}
