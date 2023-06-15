"use client";
import ErrorText from "@/components/errorComponents/ErrorText";
import LoadingButton from "@/components/pageComponents/LoadingButton";
import { GlobalContext } from "@/services/globalContext";
import { Button, Stack } from "@mui/material";
import Link from "next/link";
import { useContext, useState } from "react";
import TextInput from "../../components/formComponents/TextInput";

export const metadata = {
  title: "Login",
};

const Login = () => {
  const { loading, login, loginError } = useContext(GlobalContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(email, password);
    login(email, password);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <Stack
          alignItems="center"
          spacing={2}
          style={{ marginBottom: "2rem", textAlign: "center" }}
        >
          <h1>Login</h1>
          <p>Sign in to your account on Reader.com</p>
        </Stack>

        <form onSubmit={submitHandler}>
          <Stack spacing={2} style={{ textAlign: "center" }}>
            {loginError && <ErrorText message={loginError} />}
            <TextInput
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required={true}
            />
            <TextInput
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required={true}
            />
            <Button variant="contained" type="submit" color="success">
              Login
              {loading && (
                <div style={{ marginLeft: "0.6rem" }}>
                  <LoadingButton />
                </div>
              )}
            </Button>
            <p style={{ textAlign: "center" }}>
              Don&apos;t have an account?{" "}
              <Link href="/sign-up" style={{ color: "#1db954" }}>
                Sign up
              </Link>
            </p>
          </Stack>
        </form>
      </div>
    </div>
  );
};

export default Login;
