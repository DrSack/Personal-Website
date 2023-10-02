'use client'

import { Box, Divider, IconButton, Toolbar, Typography } from '@mui/material';
import { TextSnippet } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
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

export const Footer = () => {
  return (
    <Box display='flex' flexDirection='column' justifyContent='space-around' style={{ width: '100%', backgroundColor: 'black', height: '320px' }}>
      <Toolbar style={{ color: 'black', display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
        <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '120px' }}>
          <Typography variant='h6' color='white'>Useful Link</Typography>
          <Box display='flex' flexDirection='column' justifyContent='space-around'  marginTop='32px'>
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
        </Box>
        <Box display='flex' flexDirection='column' alignItems='center' height='120px'>
          <Typography variant='h6' color='white'>Contacts</Typography>
          <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '32px' }}>
            <StyledLinksTypography>email: tem4912@gmail.com</StyledLinksTypography>
            <StyledLinksTypography>phone: tem4912@gmail.com</StyledLinksTypography>
          </Box>
        </Box>
      </Toolbar>
      <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
        <StyledTypographyCopyright>Copyright 2023 Travis Mangila</StyledTypographyCopyright>
      </Box>
    </Box>
  )
}
