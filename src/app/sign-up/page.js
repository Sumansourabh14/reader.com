"use client";
import TextInput from "@/components/formComponents/TextInput";
import LoadingButton from "@/components/pageComponents/LoadingButton";
import { GlobalContext } from "@/services/globalContext";
import { Button } from "@mui/material";
import React, { useContext, useState } from "react";

export const metadata = {
  title: "Sign Up",
};

const SignUp = () => {
  const { loading, signUp } = useContext(GlobalContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();

    if (password === password2) {
      signUp(name, username, email, password);
    } else {
      console.log("Error: Password doesn't match!");
    }
  };

  return (
    <div>
      <form onSubmit={handleSignUp}>
        <TextInput
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required={true}
        />
        <TextInput
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required={true}
        />
        <TextInput
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required={true}
        />
        <TextInput
          type="password"
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required={true}
        />
        <TextInput
          type="password"
          placeholder="Re-enter password"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
          required={true}
        />
        <Button variant="contained" type="submit">
          Sign Up
          {loading && (
            <div style={{ marginLeft: "0.6rem" }}>
              <LoadingButton />
            </div>
          )}
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
