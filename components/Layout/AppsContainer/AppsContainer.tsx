import React from "react";
import { Container } from "@mui/material";

interface props {
  children: React.ReactNode;
}

export default function AppsContainer({ children }: props) {
  return <Container maxWidth="sm">{children}</Container>;
}
