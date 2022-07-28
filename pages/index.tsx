import {
  Container,
  Stack,
  Typography,
  Box,
  Link as Links,
} from "@mui/material";
import Head from "next/head";
import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Marquee from "react-fast-marquee";
import MarqueeCard from "@/components/common/Card/MarqueeCard";
import Link from "next/link";
import Footer from "@/components/common/Footer";

export default function Home() {
  return (
    <Container>
      <Typography variant="body3">adadas</Typography>
      <Stack direction="row" spacing={2} sx={{ my: 12, px: 8 }}>
        <Typography
          variant="h4"
          sx={{ textAlign: "right", fontWeight: 500, lineHeight: 1 }}
        >
          Dessert dragée halvah croissant.
        </Typography>
        <Stack spacing={2}>
          <Typography>
            Cupcake ipsum dolor sit amet lemon drops pastry cotton candy. Sweet
            carrot cake macaroon bonbon croissant fruitcake jujubes macaroon oat
            cake. Soufflé bonbon caramels jelly beans. Tiramisu sweet roll
            cheesecake pie carrot cake.
          </Typography>
          <Link href={"/product"} passHref={true}>
            <Links>Read More</Links>
          </Link>
        </Stack>
      </Stack>
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          left: 0,
          backgroundColor: "lightGray",
        }}
      >
        <Marquee pauseOnHover={true} speed={10}>
          <Stack
            direction="row"
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-around",
            }}
          >
            <MarqueeCard />
            <MarqueeCard />
            <MarqueeCard />
            <MarqueeCard />
            <MarqueeCard />
          </Stack>
        </Marquee>
      </Box>
      <Typography sx={{}}>this is footer</Typography>
      <Box sx={{}}>adadaad</Box>
      <Footer />
      <Typography sx={{}}>this is footer</Typography>
      <Box sx={{}}>adadaad</Box>
    </Container>
  );
}

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 60,
  };
}
