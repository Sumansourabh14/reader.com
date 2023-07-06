"use client";
import BookGridItem from "@/components/bookComponents/BookGridItem";
import { GlobalContext } from "@/services/globalContext";
import { Container, Stack } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import moment from "moment";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";

const BookDetails = ({ params }) => {
  const { getBookDetails } = useContext(GlobalContext);

  const [bookData, setBookData] = useState(null);

  useEffect(() => {
    let mounted = true;

    const fetchDetails = async () => {
      const data = await getBookDetails(params.details);

      if (mounted) {
        setBookData(data);
      }
    };

    fetchDetails();

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    console.log(bookData);
  }, [bookData]);

  return (
    <Container>
      {bookData && (
        <Stack spacing={8} sx={{ marginBottom: "1rem" }}>
          <div key={bookData.id}>
            <Stack direction="row" spacing={6}>
              {bookData.volumeInfo.imageLinks && (
                <Image
                  src={`${
                    bookData.volumeInfo.imageLinks.large ??
                    bookData.volumeInfo.imageLinks.thumbnail
                  }`}
                  alt={bookData.volumeInfo.title}
                  width={240}
                  height={340}
                />
              )}
              <Stack spacing={2}>
                <h1>{bookData.volumeInfo.title}</h1>
                {bookData.volumeInfo?.subtitle && (
                  <h3 style={{ fontWeight: "400" }}>
                    {bookData.volumeInfo.subtitle}
                  </h3>
                )}

                <Grid container gap={1} spacing={2}>
                  {bookData.volumeInfo.authors && (
                    <BookGridItem
                      question="Author"
                      answer={bookData.volumeInfo.authors[0]}
                    />
                  )}
                  {bookData.volumeInfo.pageCount && (
                    <BookGridItem
                      question="Page Count"
                      answer={bookData.volumeInfo.pageCount}
                    />
                  )}
                  <BookGridItem
                    question="Publishers"
                    answer={bookData.volumeInfo.publisher}
                  />
                  <BookGridItem
                    question="Published on"
                    answer={moment(bookData.volumeInfo.publishedDate).format(
                      "Do MMMM YYYY"
                    )}
                  />
                </Grid>

                <Stack direction="row" gap={1} flexWrap="wrap">
                  {bookData.volumeInfo.categories &&
                    bookData.volumeInfo.categories.map((item) => (
                      <p
                        key={item}
                        style={{
                          fontSize: "0.875rem",
                          border: "1px solid gray",
                          borderRadius: "0.2rem",
                          padding: "0.2rem 0.4rem",
                        }}
                      >
                        {item}
                      </p>
                    ))}
                </Stack>
                {/* <p>{bookData.volumeInfo.averageRating}</p> */}
                <p
                  dangerouslySetInnerHTML={{
                    __html: bookData.volumeInfo.description,
                  }}
                ></p>
              </Stack>
            </Stack>
          </div>
        </Stack>
      )}
    </Container>
  );
};

export default BookDetails;
