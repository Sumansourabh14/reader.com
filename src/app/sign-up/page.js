"use client";
import ErrorText from "@/components/errorComponents/ErrorText";
import TextInput from "@/components/formComponents/TextInput";
import LoadingButton from "@/components/pageComponents/LoadingButton";
import { GlobalContext } from "@/services/globalContext";
import { Button, Stack } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";

export const metadata = {
  title: "Sign Up",
};

const SignUp = () => {
  const { loading, signUp, signUpError } = useContext(GlobalContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();

    signUp(name, username, email, password);
  };

  return (
    <div>
      <Stack direction="row" justifyContent="center" spacing={10}>
        <div>
          <Stack
            alignItems="center"
            spacing={2}
            style={{ marginBottom: "2rem", textAlign: "center" }}
          >
            <h1>Sign Up</h1>
            <p>Create an account to join Reader.com</p>
          </Stack>

          <form onSubmit={handleSignUp}>
            <Stack spacing={2}>
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
              {signUpError && <ErrorText message={signUpError} />}
              <TextInput
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required={true}
              />
              <Button variant="contained" type="submit" color="success">
                Sign Up
                {loading && (
                  <div style={{ marginLeft: "0.6rem" }}>
                    <LoadingButton />
                  </div>
                )}
              </Button>
              <div style={{ textAlign: "center" }}>
                <p>
                  Already have an account?{" "}
                  <Link href="/login" style={{ color: "#1db954" }}>
                    Login
                  </Link>
                </p>
              </div>
            </Stack>
          </form>
        </div>
        <div style={{ position: "relative", width: "300px" }}>
          <Image
            src={
              "https://wallpapers.com/images/hd/grayscale-aesthetic-book-desktop-rhmwm7u5fgt2hiu0.jpg"
            }
            alt="Books"
            fill
            style={{ borderRadius: "0.2rem" }}
          />
        </div>
      </Stack>
    </div>
  );
};

export default SignUp;
