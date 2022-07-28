import Footer from "@/components/common/Footer";
import { AppBar, Container, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import React, { Fragment } from "react";
import AppsBar from "../AppsBar";

interface props {
  children: React.ReactNode;
}

export default function AppsLayout({ children }: props) {
  return (
    <Fragment>
      <AppsBar />
      {children}
      <Footer />
    </Fragment>
  );
}
