import { Container, Typography } from "@mui/material";
import Head from "next/head";
import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Marquee from "react-fast-marquee";
import { Box } from "@mui/system";

export default function Home() {
  return (
    <Container>
      <Typography variant="body3">adadas</Typography>
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          left: 0,
          backgroundColor: "lightGray",
        }}
      >
        <Marquee pauseOnHover={true} speed={10}>
          <Box>aaaa</Box>
          <Box>bbbb</Box>
          <Box>cccc</Box>
          <Box>dddd</Box>
          <Box>eeee</Box>
          <Box>eeee</Box>
        </Marquee>
        <Marquee pauseOnHover={true} speed={10}>
          <Box>aaaa</Box>
          <Box>bbbb</Box>
          <Box>cccc</Box>
          <Box>dddd</Box>
          <Box>eeee</Box>
          <Box>eeee</Box>
        </Marquee>
      </Box>
    </Container>
  );
}

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 60,
  };
}
