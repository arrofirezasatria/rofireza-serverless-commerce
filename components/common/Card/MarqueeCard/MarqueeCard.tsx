import React from "react";
import Image from "next/image";
import { Box } from "@mui/material";

export default function MarqueeCard() {
  return (
    <Box>
      <Image src={"/vercel.svg"} width={60} height={160} />
    </Box>
  );
}
