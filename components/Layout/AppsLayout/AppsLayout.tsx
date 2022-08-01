import Footer from "@/components/common/Footer";
import { useTheme } from "@mui/material/styles";
import { AppBar, Container, Toolbar, Box } from "@mui/material";
import React, { Fragment } from "react";
import AppsBar from "../AppsBar";

interface props {
  children: React.ReactNode;
}

export default function AppsLayout({ children }: props) {
  const theme = useTheme();
  return (
    <Fragment>
      <AppsBar />
      <Box height={theme.mixins.toolbar} />
      {children}
      <Footer />
    </Fragment>
  );
}
