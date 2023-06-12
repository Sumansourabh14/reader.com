"use client";
import { GlobalContext } from "@/services/globalContext";
import { useContext } from "react";

const Profile = () => {
  const { user } = useContext(GlobalContext);

  return (
    <div>
      <h1>Hi, {user?.name}!</h1>
    </div>
  );
};

export default Profile;
