import { GlobalContext } from "@/services/globalContext";
import { Card, CardActionArea, CardMedia, Stack } from "@mui/material";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import Carousel from "../carouselComponents/Carousel";

const BookCarousel = ({ sectionTitle, genre }) => {
  const { getBooksByGenre } = useContext(GlobalContext);

  const [books, setBooks] = useState(null);
  const [hover, setHover] = useState(false);

  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    let mounted = true;

    const fetchByGenre = async () => {
      const data = await getBooksByGenre(genre);

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

  useEffect(() => {
    console.log(books);
  }, [books]);

  return (
    books && (
      <Stack spacing={2}>
        <h2>{sectionTitle}</h2>
        <Carousel
          data={books.map((book) => (
            <Card
              sx={{
                width: {
                  xs: 100,
                  sm: 130,
                },
              }}
              key={book.id}
              itemID={book.id}
              onMouseEnter={() => setHoveredCard(book.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={
                hoveredCard === book.id ? "scale-book-card" : undefined
              }
            >
              {book.volumeInfo.imageLinks && (
                <CardActionArea>
                  <Link href={`/book/${book.id}`}>
                    <CardMedia
                      component="img"
                      height={"200"}
                      image={book.volumeInfo.imageLinks.thumbnail}
                      alt={book.volumeInfo.title}
                    />
                    {/* <CardContent>
                      <h4>{book.volumeInfo.title}</h4>
                    </CardContent> */}
                  </Link>
                </CardActionArea>
              )}
            </Card>
          ))}
        />
      </Stack>
    )
  );
};

export default BookCarousel;
