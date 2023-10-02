'use client'

import { Box, IconButton, Toolbar, Typography } from '@mui/material';
import { TextSnippet } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import { styled } from '@mui/material/styles';

const StyledTitleTypography = styled(Typography)(({ theme }) => ({
  ...theme.typography['h6'],
  [theme.breakpoints.down('md')]: {
    ...theme.typography['body1'],
  },
  [theme.breakpoints.down('sm')]: {
    ...theme.typography['body2'],
  },
  [theme.breakpoints.down('xs')]: {
    ...theme.typography['subtitle1'],
  }
}));

const StyledLinksTypography = styled(Typography)(({ theme }) => ({
  cursor: 'pointer',
  color: 'black',
  [theme.breakpoints.down('md')]: {
    ...theme.typography['body1'],
  },
  [theme.breakpoints.down('sm')]: {
    ...theme.typography['body2'],
  },
  [theme.breakpoints.down('xs')]: {
    ...theme.typography['subtitle1'],
  }
}));

export const Header = () => {
  const router = useRouter();

  return (
    <Box padding={2}>
      <Toolbar style={{ color: 'black', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box gap={2} onClick={() => router.push('/')} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', cursor: 'pointer' }}>
          <TextSnippet />
          <StyledTitleTypography sx={{ flexGrow: 1 }}>
            Travis Mangila
          </StyledTitleTypography>
        </Box>
        <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
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
      </Toolbar>
    </Box>
  )
}
