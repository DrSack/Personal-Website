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
      image: '/companies/NOSIM.png',
      alt: 'NOSIM',
      title: 'NOSIM',
      message: 'Developer',
      onClick: () => { }
    },
    {
      image: '/companies/FLIGHT-CENTRE.png',
      alt: 'Flight Centre',
      title: 'Flight Centre',
      message: 'Full-Stack Developer',
      onClick: () => { }
    },
    {
      image: '/companies/AUXITA.png',
      alt: 'Auxita',
      title: 'Auxita',
      message: 'Software Engineer',
      onClick: () => { }
    },
    {
      image: '/companies/BCPTA.png',
      alt: 'BCPTA',
      title: 'BCPTA',
      message: 'Full-Stack Developer',
      onClick: () => { }
    },
    {
      image: '/companies/DNRME.png',
      alt: 'DNRME',
      title: 'DNRME',
      message: 'Software Developer',
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
