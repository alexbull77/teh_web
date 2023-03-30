import { createTheme, ThemeProvider } from "@mui/material/";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { NavBar } from "./components/NavBar/NavBar";

const theme = createTheme({
  palette: {
    primary: {
      // main: "#317773",
      main: "#242526",
    },
    secondary: {
      main: "#D3D3D3",
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

export const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Outlet />
      <Footer
        title="Refresh your day with my web project"
        description="Experience the finest selection of premium design choices. Our carefully curated collection will delight your senses and invigorate your day. Try our webpages application today and discover a world of joy and relaxation."
      />
    </ThemeProvider>
  );
};
