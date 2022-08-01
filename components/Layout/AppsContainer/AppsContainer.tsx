import React from "react";
import { Box, Container, useTheme } from "@mui/material";

interface props {
  children: React.ReactNode;
}

export default function AppsContainer({ children }: props) {
  const theme = useTheme();

  return <Container>{children}</Container>;
}
