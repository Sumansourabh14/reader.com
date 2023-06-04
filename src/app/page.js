import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <>
      <div>Home</div>
      <div>
        <Link href="/about">About</Link>
      </div>
    </>
  );
};

export default Home;
