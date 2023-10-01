'use client';

import { createTheme, ThemeProvider } from "@mui/material/styles";

interface Props {
  children?: React.ReactNode;
}

const theme = createTheme({
  spacing: 4,
});

export const Theme = ({children}: Props) => (
  <ThemeProvider theme={theme}>
      {children}
  </ThemeProvider>
)