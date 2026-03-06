'use client';

import { createTheme, ThemeProvider } from "@mui/material/styles";

interface Props {
  children?: React.ReactNode;
}

const theme = createTheme({
  spacing: 4,
});

export const Theme = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </ThemeProvider>
  )
}