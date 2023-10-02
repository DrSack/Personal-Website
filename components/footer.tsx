'use client'

import { Box, IconButton, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledLinksTypography = styled(Typography)(({ theme }) => ({
  cursor: 'pointer',
  color: '#D3D3D3',
  ...theme.typography['body2'],
}));

const StyledTypographyCopyright = styled(Typography)(({ theme }) => ({
  cursor: 'pointer',
  color: 'grey',
  ...theme.typography['body2'],
}));

const StyledUsefulLinksBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '120px'
}));

const StyledContactsBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '120px'
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  color: 'black',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
}));

export const Footer = () => {
  return (
    <Box display='flex' flexDirection='column' justifyContent='space-around' style={{ width: '100%', backgroundColor: 'black', height: '320px' }}>
      <StyledToolbar>
        <StyledUsefulLinksBox>
          <Typography variant='h6' color='white'>Useful Link</Typography>
          <Box display='flex' flexDirection='column' alignItems='center' marginTop='32px'>
            <IconButton href='/skills' size='medium'>
              <StyledLinksTypography>Skills</StyledLinksTypography>
            </IconButton>
            <IconButton href='/work' size='medium'>
              <StyledLinksTypography>My Work</StyledLinksTypography>
            </IconButton>
            <IconButton size='medium'>
              <StyledLinksTypography>Contact</StyledLinksTypography>
            </IconButton>
          </Box>
        </StyledUsefulLinksBox>
        <StyledContactsBox>
          <Typography variant='h6' color='white'>Contacts</Typography>
          <Box style={{ display: 'flex', flexDirection: 'column', marginTop: '32px' }}>
            <Box display='flex' flexDirection='row' justifyContent='space-between'>
              <StyledLinksTypography>email:</StyledLinksTypography>
              <StyledLinksTypography marginLeft={2}>tem4912@gmail.com</StyledLinksTypography>
            </Box>
            <Box display='flex' flexDirection='row' justifyContent='space-between'>
              <StyledLinksTypography>phone:</StyledLinksTypography>
              <StyledLinksTypography>0410049944</StyledLinksTypography>
            </Box>
          </Box>
        </StyledContactsBox>
      </StyledToolbar>
      <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
        <StyledTypographyCopyright>Copyright 2023 Travis Mangila</StyledTypographyCopyright>
      </Box>
    </Box>
  )
}
