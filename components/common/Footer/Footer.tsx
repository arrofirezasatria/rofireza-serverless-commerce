import Link from "next/link";
import React from "react";
import { Box, Stack, Link as Links, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import AppsContainer from "@/components/Layout/AppsContainer";

const StyledLinks = styled(Links)(({ theme }) => ({
  textDecoration: "none !important",
  transition: "all .3s ease",
  "&:hover": {
    color: "red",
  },
}));

export default function Footer() {
  return (
    <AppsContainer>
      <Stack direction="row" sx={{ justifyContent: "space-around" }}>
        <Box>
          <Stack
            direction={"row"}
            spacing={1}
            sx={{ alignContent: "center", alignItems: "center" }}
          >
            <Image src={"/favicon.ico"} width={32} height={32} />
            <Typography variant="h5" sx={{ fontWeight: "600" }}>
              Vercel
            </Typography>
          </Stack>
        </Box>
        <Stack spacing={2}>
          <Link href="/index" passHref={true}>
            <StyledLinks>Home</StyledLinks>
          </Link>
          <Link href="/about" passHref={true}>
            <StyledLinks underline="none">About</StyledLinks>
          </Link>
          <Link href="/index" passHref={true}>
            <StyledLinks>Terms of use</StyledLinks>
          </Link>
          <Link href="/index" passHref={true}>
            <StyledLinks>Terms of use</StyledLinks>
          </Link>
        </Stack>
        <Stack>
          <Link href="/index" passHref={true}>
            <StyledLinks>Terms of use</StyledLinks>
          </Link>
        </Stack>
      </Stack>
    </AppsContainer>
  );
}
