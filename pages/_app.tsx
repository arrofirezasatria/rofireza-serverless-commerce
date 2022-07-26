import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "@/components/common/Head";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import ThemeStyles from "@/components/Theme/ThemeStyles";

function MyApp({ Component, pageProps }: AppProps) {
  const theme = createTheme({});

  return (
    <>
      <Head />
      <ThemeStyles>
        <Component {...pageProps} />
      </ThemeStyles>
    </>
  );
}

export default MyApp;
