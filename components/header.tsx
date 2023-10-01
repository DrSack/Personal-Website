'use client'

import { Box, IconButton, Toolbar, Typography } from '@mui/material';
import { TextSnippet } from '@mui/icons-material';
import { useRouter } from 'next/navigation';

export const Header = () => {
  const router = useRouter();

  return (
    <Box>
      <Toolbar style={{ color: 'black', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box onClick={() => router.push('/')} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', cursor: 'pointer' }}>
          <TextSnippet />
          <Typography variant="h6" sx={{ flexGrow: 1, marginLeft: '8px' }}>
            Travis Mangila
          </Typography>
        </Box>
        <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '270px', justifyContent: 'space-between' }}>
          <IconButton href='/about' onClick={() => console.log('nice')} size='medium'>
            <Typography style={{ cursor: 'pointer', color: 'black' }}>About</Typography>
          </IconButton>
          <IconButton size='medium'>
            <Typography style={{ cursor: 'pointer', color: 'black' }}>Work</Typography>
          </IconButton>
          <IconButton size='medium'>
            <Typography style={{ cursor: 'pointer', color: 'black' }}>Contact</Typography>
          </IconButton>
        </Box>
      </Toolbar>
    </Box>
  )
}
