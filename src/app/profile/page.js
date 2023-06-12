"use client";
import { GlobalContext } from "@/services/globalContext";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";

const Profile = () => {
  const { user, isAuthenticated } = useContext(GlobalContext);
  const router = useRouter();

  if (!isAuthenticated) {
    router.push("/login");
  }

  return (
    <div>
      <h1>Hi, {user?.username}!</h1>
    </div>
  );
};

export default Profile;
