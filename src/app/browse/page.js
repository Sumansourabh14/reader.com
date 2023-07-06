"use client";
import BookCarousel from "@/components/bookComponents/BookCarousel";
import { GlobalContext } from "@/services/globalContext";
import { Stack } from "@mui/material";
import { useContext, useEffect, useState } from "react";

const BrowseBooks = () => {
  return (
    <div>
      <h1>Browse Books</h1>
      <Stack spacing={4} sx={{ marginTop: "1rem" }}>
        <BookCarousel sectionTitle="Adventure" genre={`adventure`} />
        <BookCarousel sectionTitle="Mystery" genre={`mystery`} />
        <BookCarousel sectionTitle="Thriller" genre={`thriller`} />
        <BookCarousel sectionTitle="Action" genre={`action`} />
        <BookCarousel sectionTitle="Horror" genre={`horror`} />
        <BookCarousel sectionTitle="War" genre={`war`} />
      </Stack>
    </div>
  );
};

export default BrowseBooks;
