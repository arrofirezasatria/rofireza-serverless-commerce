import {
  AppBar,
  Box,
  Container,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import SearchAutoComplete from "./SearchAutoComplete";

export default function AppsBar() {
  return (
    <AppBar>
      <Container>
        <Toolbar>
          <Stack
            spacing={2}
            direction="row"
            sx={{ display: "flex", flexGrow: "1" }}
          >
            <Image src={"/favicon.ico"} width={20} height={20} />
            <Link href="/">Home</Link>
            <Link href="/product">Product</Link>
            <Link href="/search">Search</Link>
          </Stack>
          <Stack spacing={2} direction="row">
            <SearchAutoComplete />
            <Typography>EN</Typography>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
