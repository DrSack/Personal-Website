'use client';

import { Avatar, Box, Button, IconButton, Slide, Typography } from '@mui/material'
import { styled } from '@mui/system';
import { useEffect, useState } from 'react';
import { FiverrLogo, LinkedInLogo } from '../../components/customIcons/index';

const StyledBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(30),
  height: '75vh',
  [theme.breakpoints.down('md')]: {

  }
}));

const StyledDescriptionBox1 = styled(Box)(({ theme }) => ({

}));


const StyledDescriptionBox2 = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '800px',
  marginTop: '36px',
  gap: theme.spacing(8),
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: 240,
  height: 240,
  [theme.breakpoints.down('md')]: {
    width: 120,
    height: 120,
  }
}));

const StyledTypography1 = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(8),
  fontWeight: 'bold',
}));

const StyledTypography2 = styled(Typography)(() => ({
  color: 'grey'
}));

const StyledButton = styled(Button)(({ theme }) => ({
  width: theme.spacing(32),
  textTransform: 'none',
}))

const StyledMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  gap: theme.spacing(30),
  padding: theme.spacing(4)
}))

export default function Page() {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true)
  }, [])

  return (
    <StyledMainContainer>
      <Slide in={checked} direction='left' timeout={1000}>
        <StyledBoxContainer>
          <StyledDescriptionBox1>
            <StyledAvatar alt='avatar' src='/avatar.jpg' sx={{ width: 300, height: 300 }} />
          </StyledDescriptionBox1>
          <StyledDescriptionBox2>
            <StyledTypography1 variant='h2'>Hi, Let's get Developing</StyledTypography1>
            <StyledTypography2 variant='h6'>
              I'm a developer based in Australia. I'm here to solve your business needs and implement strategies to accomplish your entrepreneurship goals.
            </StyledTypography2>
            <Box display='flex' gap={4}>
              <StyledButton variant='contained'>
                Contact Me!
              </StyledButton>
              <StyledButton href='/about' variant='outlined'>
                Specialties
              </StyledButton>
            </Box>
            <Box flexDirection='row' display='flex' alignItems='center' marginTop={12} gap={2}>
              <Typography variant='h6' style={{ color: 'grey', }}>
                Follow me on
              </Typography>
              <Box>
                <IconButton target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/leuk-travis-mangila/' >
                  <LinkedInLogo />
                </IconButton>
                <IconButton target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/leuk-travis-mangila/' >
                  <FiverrLogo />
                </IconButton>
              </Box>
            </Box>
          </StyledDescriptionBox2>
        </StyledBoxContainer>
      </Slide>
    </StyledMainContainer>
  )
}
