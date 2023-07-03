"use client";
import Carousel from "@/components/carouselComponents/Carousel";
import { GlobalContext } from "@/services/globalContext";
import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";

const BrowseBooks = () => {
  const { getBooksByGenre } = useContext(GlobalContext);

  const [books, setBooks] = useState(null);

  useEffect(() => {
    let mounted = true;

    const fetchByGenre = async () => {
      const data = await getBooksByGenre(`thriller`);

      if (mounted) {
        setBooks(data);
      }
    };

    fetchByGenre();

    return () => {
      mounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (books) {
    console.log(books);
  }

  return (
    books && (
      <Carousel
        data={books.map((book) => (
          <Card
            sx={{
              width: {
                xs: 80,
                sm: 100,
              },
            }}
            key={book.id}
            itemID={book.id}
          >
            {book.volumeInfo.imageLinks && (
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="auto"
                  image={book.volumeInfo.imageLinks.thumbnail}
                  alt={book.volumeInfo.title}
                />
              </CardActionArea>
            )}
          </Card>
        ))}
      />
    )
  );
};

export default BrowseBooks;
