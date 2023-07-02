"use client";
import { GlobalContext } from "@/services/globalContext";
import { Container, Stack } from "@mui/material";
import moment from "moment";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useContext, useEffect } from "react";
import searchResult from "../../utils/searchResult.json";
import Link from "next/link";

const Search = () => {
  const { searchData } = useContext(GlobalContext);

  const searchParams = useSearchParams();

  const searchTitle = searchParams.get("query");

  useEffect(() => {
    console.log(searchResult.items);
  }, []);

  return (
    <Container>
      <h1>You searched for {searchTitle}</h1>

      <Stack spacing={8} sx={{ marginTop: "2rem" }}>
        {searchData ? (
          searchData?.map((item) => (
            <div key={item.id}>
              <Stack direction="row" spacing={4}>
                {item.volumeInfo.imageLinks && (
                  <Image
                    src={`${item.volumeInfo.imageLinks.thumbnail}`}
                    alt="book"
                    width={200}
                    height={300}
                  />
                )}
                <div>
                  <Link href={`/book/${item.id}`}>
                    <h3>{item.volumeInfo.title}</h3>
                  </Link>
                  {item.volumeInfo.authors && (
                    <p>By {item.volumeInfo.authors[0]}</p>
                  )}
                  {item.volumeInfo.categories && (
                    <p>{item.volumeInfo.categories[0]}</p>
                  )}
                  <p>{item.volumeInfo.publisher}</p>
                  <p>
                    Published:{" "}
                    {moment(item.volumeInfo.publishedDate).format(
                      "Do MMMM YYYY"
                    )}
                  </p>
                  <p>{item.volumeInfo.pageCount}</p>
                  <p>{item.volumeInfo.averageRating}</p>
                  <p
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {item.volumeInfo.description}
                  </p>
                </div>
              </Stack>
            </div>
          ))
        ) : (
          <h2>No results</h2>
        )}
      </Stack>
    </Container>
  );
};

export default Search;
