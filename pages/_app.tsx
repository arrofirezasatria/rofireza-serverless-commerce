import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "@/components/common/Head";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import ThemeStyles from "@/components/Theme/ThemeStyles";
import { Provider } from "react-redux";
import store from "../redux/store";
import AppsLayout from "@/components/Layout/AppsLayout";

function MyApp({ Component, pageProps }: AppProps) {
  const theme = createTheme({});

  return (
    <>
      <Head />
      <Provider store={store}>
        <ThemeStyles>
          <AppsLayout>
            <Component {...pageProps} />
          </AppsLayout>
        </ThemeStyles>
      </Provider>
    </>
  );
}

export default MyApp;
