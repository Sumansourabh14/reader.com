"use client";
import { GlobalContext } from "@/services/globalContext";
import React, { useContext } from "react";

const Profile = () => {
  const { user } = useContext(GlobalContext);

  return (
    <div>
      <h1>Hi, {user?.username}!</h1>
    </div>
  );
};

export default Profile;
