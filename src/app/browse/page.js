"use client";
import { GlobalContext } from "@/services/globalContext";
import { useContext, useEffect, useState } from "react";

const BrowseBooks = () => {
  const { getBooksByGenre } = useContext(GlobalContext);

  const [books, setBooks] = useState(null);

  useEffect(() => {
    let mounted = true;

    const fetchByGenre = async () => {
      const data = await getBooksByGenre(`mystery`);

      if (mounted) {
        setBooks(data);
      }
    };

    fetchByGenre();

    return () => {
      mounted = false;
    };
  }, []);

  if (books) {
    console.log(books);
  }

  return books && <div>Books</div>;
};

export default BrowseBooks;
