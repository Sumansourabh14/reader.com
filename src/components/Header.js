"use client"; // For MUI to work
import { GlobalContext } from "@/services/globalContext";
import { AppBar, Box, Button, Stack, Toolbar } from "@mui/material";
import Link from "next/link";
import { useContext } from "react";

const Header = () => {
  const { isAuthenticated, logout } = useContext(GlobalContext);

  console.log({ isAuthenticated });

  const handleLogout = () => {
    logout();
  };

  return (
    <Box>
      <AppBar position="fixed" className="app-bar-backdrop">
        <Toolbar>
          <h2 style={{ flexGrow: 1, color: "#000" }}>Reader.com</h2>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            {isAuthenticated ? (
              <Button variant="contained" onClick={handleLogout}>
                Logout
              </Button>
            ) : (
              <>
                <Link href="/login">Login</Link>
                <Link href="/sign-up">Sign Up</Link>
              </>
            )}
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;