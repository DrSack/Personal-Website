'use client'

import { AppBar, Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography, useMediaQuery } from '@mui/material';
import { TextSnippet } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/navigation';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

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

const StyledHeaderDesktop = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

const StyledHeaderMobile = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

export const Header = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledHeaderDesktop marginBottom={12}>
        <AppBar>
          <Toolbar style={{ backgroundColor: 'white', color: 'black' }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography component="div" sx={{ flexGrow: 1 }}>
              Travis Mangila
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          anchor={'left'}
          open={open}
          onClose={() => setOpen(false)}
        >
          <Box role="presentation">
            <List>
              <ListItem disablePadding>
                <ListItemButton href='/'>
                  <ListItemText primary='Home' />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton href='/skills'>
                  <ListItemText primary='Skills' />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton href='/work'>
                  <ListItemText primary='My Work' />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary='Contact' />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </StyledHeaderDesktop>
      <StyledHeaderMobile padding={2}>
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
      </StyledHeaderMobile>
    </>
  )
}
