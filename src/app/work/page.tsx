'use client'

import { Box, Slide, styled, Typography } from "@mui/material"
import React from "react";
import { useEffect, useState } from "react";
import { CardList, CardSelectableProps } from "./components/components";

const StyledMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  padding: theme.spacing(4),
  gap: theme.spacing(18),
}))

export default function Page() {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true)
  }, [])

  const workList: CardSelectableProps[] = [
    {
      image: '',
      alt: 'NOSIM',
      title: 'NOSIM',
      message: 'message',
      onClick: () => { }
    },
    {
      image: '',
      alt: 'NOSIM',
      title: 'NOSIM',
      message: 'message',
      onClick: () => { }
    },
    {
      image: '',
      alt: 'NOSIM',
      title: 'NOSIM',
      message: 'message',
      onClick: () => { }
    },
    {
      image: '',
      alt: 'NOSIM',
      title: 'NOSIM',
      message: 'message',
      onClick: () => { }
    }
  ]

  return (
    <StyledMainContainer>
      <Slide in={checked} direction='left' timeout={1000}>
        <Box display='flex' justifyContent='space-between' flexDirection='column' alignItems='center' marginTop={12}>
          <Typography variant='h3' fontWeight='bold'>
            /work
          </Typography>
          <Typography variant='body1'>
            My selected work over the years
          </Typography>
          <CardList items={workList} />
        </Box>
      </Slide>
    </StyledMainContainer>
  )
}
