import { AppBar, Box, Container, Toolbar } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function AppsBar() {
  return (
    <AppBar>
      <Container>
        <Toolbar>
          <Link href="/">Home</Link>
          <Link href="/product">Product</Link>
          <Link href="/search">Search</Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
