import { Box, Stack, Link as Links } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <Stack direction="row">
      <Box>Logo</Box>
      <Stack>
        <Link href="/index" passHref={true}>
          <Links>Home</Links>
        </Link>

        <Link href="/about" passHref={true}>
          <Links>About</Links>
        </Link>

        <Link href="/index" passHref={true}>
          <Links>Terms of use</Links>
        </Link>

        <Link href="/index" passHref={true}>
          <Links>Terms of use</Links>
        </Link>
      </Stack>
      <Stack>
        <Link href="/index" passHref={true}>
          <Links>Terms of use</Links>
        </Link>
      </Stack>
    </Stack>
  );
}
