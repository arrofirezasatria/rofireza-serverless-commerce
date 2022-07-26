import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import React, { Children, Fragment, ReactNode } from "react";
import themeStyles from "@/config/theme_styles.json";

interface props {
  children: ReactNode;
}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    poster: React.CSSProperties;
    body3: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    poster?: React.CSSProperties;
    body3: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    poster: true;
    body3: true;
  }
}

export default function ThemeStyles({ children }: props) {
  const baseTheme = createTheme({
    palette: {
      //   primary: {},
      //   secondary: {},
    },
    typography: { h1: {}, poster: {}, body3: { color: "red" } },
  });

  const theme = responsiveFontSizes(baseTheme);

  return (
    <Fragment>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Fragment>
  );
}
