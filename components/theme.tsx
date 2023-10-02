'use client';

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const useStyles = makeStyles(() => ({
  root: {
    "&::-webkit-scrollbar": {
      width: 7,
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: `inset 0 0 6px rgba(0, 0, 0, 0.3)`,
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "darkgrey",
      outline: `1px solid slategrey`,
    },
  },
}));

interface Props {
  children?: React.ReactNode;
}

const theme = createTheme({
  spacing: 4,
});

export const Theme = ({ children }: Props) => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <body className={`${inter.className} ${classes.root}`} style={{ margin: 0 }}>
        {children}
      </body>
    </ThemeProvider>
  )
}