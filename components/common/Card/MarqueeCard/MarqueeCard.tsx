import React from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";

export default function MarqueeCard() {
  return (
    <Box sx={{ py: 2 }}>
      <Image src={"/logo S.png"} width={80} height={80} />
    </Box>
  );
}
