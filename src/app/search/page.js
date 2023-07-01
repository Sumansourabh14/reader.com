"use client";
import { GlobalContext } from "@/services/globalContext";
import { useSearchParams } from "next/navigation";
import React, { useContext } from "react";

const Search = () => {
  const { searchData } = useContext(GlobalContext);

  const searchParams = useSearchParams();

  const searchTitle = searchParams.get("query");

  console.log(searchData);

  return (
    <div>
      <h1>You searched for {searchTitle}</h1>

      <div>
        {searchData ? (
          searchData?.map((item) => (
            <div key={item.id}>
              <h3>{item.volumeInfo.title}</h3>
              <h3>{item.volumeInfo.publisher}</h3>
              <h3>{item.volumeInfo.pageCount}</h3>
              <h3>{item.volumeInfo.averageRating}</h3>
            </div>
          ))
        ) : (
          <h2>No results</h2>
        )}
      </div>
    </div>
  );
};

export default Search;
