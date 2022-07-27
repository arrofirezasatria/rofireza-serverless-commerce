import { Container, Typography } from "@mui/material";
import Head from "next/head";
import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Container>
      <Typography variant="body3">adadas</Typography>
    </Container>
  );
}

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 60,
  };
}
