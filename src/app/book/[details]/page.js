"use client";
import { GlobalContext } from "@/services/globalContext";
import { Container, Stack } from "@mui/material";
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

  return (
    <Container>
      {bookData && (
        <Stack spacing={8} sx={{ marginBottom: "1rem" }}>
          <div key={bookData.id}>
            <Stack direction="row" spacing={4}>
              {bookData.volumeInfo.imageLinks && (
                <Image
                  src={`${
                    bookData.volumeInfo.imageLinks.large ??
                    bookData.volumeInfo.imageLinks.thumbnail
                  }`}
                  alt="book"
                  width={240}
                  height={340}
                />
              )}
              <Stack spacing={2}>
                <h1>{bookData.volumeInfo.title}</h1>
                {bookData.volumeInfo?.subtitle && (
                  <h3>{bookData.volumeInfo.subtitle}</h3>
                )}
                {bookData.volumeInfo.authors && (
                  <p>By {bookData.volumeInfo.authors[0]}</p>
                )}
                <Stack direction="row" spacing={1}>
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
                <p>{bookData.volumeInfo.publisher}</p>
                <p>
                  Published:{" "}
                  {moment(bookData.volumeInfo.publishedDate).format(
                    "Do MMMM YYYY"
                  )}
                </p>
                <p>{bookData.volumeInfo.pageCount}</p>
                <p>{bookData.volumeInfo.averageRating}</p>
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
