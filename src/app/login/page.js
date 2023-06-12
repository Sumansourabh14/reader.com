"use client";
import { Button } from "@mui/material";
import { useContext, useState } from "react";
import TextInput from "../../components/formComponents/TextInput";
import { GlobalContext } from "@/services/globalContext";
import LoadingButton from "@/components/pageComponents/LoadingButton";
import Link from "next/link";

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
    <div>
      <h1>Login</h1>
      {loginError && <h4>{loginError}</h4>}

      <form onSubmit={submitHandler}>
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
        <Button variant="contained" type="submit">
          Login
          {loading && (
            <div style={{ marginLeft: "0.6rem" }}>
              <LoadingButton />
            </div>
          )}
        </Button>
        <p>
          Don&apos;t have an account? <Link href="/sign-up">Sign up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
