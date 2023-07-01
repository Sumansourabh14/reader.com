"use client"; // For MUI to work
import { GlobalContext } from "@/services/globalContext";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Tooltip,
} from "@mui/material";
import Link from "next/link";
import { useContext } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const Header = ({ themeMode, handleTheme }) => {
  const { isAuthenticated, logout, theme } = useContext(GlobalContext);

  console.log({ isAuthenticated });

  const handleLogout = () => {
    logout();
  };

  console.log(theme);

  return (
    <Box>
      <AppBar position="fixed" className="app-bar-backdrop">
        <Toolbar>
          <h2
            style={{
              flexGrow: 1,
              color: theme.palette.mode === "light" ? "#000" : "#fff",
            }}
          >
            Reader.com
          </h2>
          <Stack direction="row" alignItems="center" spacing={3}>
            <IconButton onClick={handleTheme}>
              {themeMode === "light" ? (
                <Tooltip title="Change theme to Dark mode">
                  <LightModeIcon />
                </Tooltip>
              ) : (
                <Tooltip title="Change theme to Light mode">
                  <DarkModeIcon />
                </Tooltip>
              )}
            </IconButton>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            {isAuthenticated ? (
              <>
                <Link href="/profile">Profile</Link>
                <Button
                  variant="contained"
                  onClick={handleLogout}
                  color="error"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link href="/login">Login</Link>
                <Link
                  href="/sign-up"
                  style={{
                    padding: "0.8rem 1rem",
                    backgroundColor: "#1db954",
                    borderRadius: "0.2rem",
                  }}
                >
                  Sign Up
                </Link>
              </>
            )}
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
