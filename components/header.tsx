import { AppBar, Box, Button, IconButton, Link, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { TextSnippet } from '@mui/icons-material';

export const Header = () => {
  return (
    <Box>
      <Toolbar style={{ color: 'black', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <TextSnippet />
          <Typography variant="h6" sx={{ flexGrow: 1, marginLeft: '8px' }}>
            Travis Mangila
          </Typography>
        </Box>
        <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '270px', justifyContent: 'space-between' }}>
          <IconButton size='medium'>
            <Typography style={{ cursor: 'pointer', color: 'black' }}>Home</Typography>
          </IconButton>
          <IconButton size='medium'>
            <Typography style={{ cursor: 'pointer', color: 'black' }}>Properties</Typography>
          </IconButton>
          <IconButton size='medium'>
            <Typography style={{ cursor: 'pointer', color: 'black' }}>Contact Us</Typography>
          </IconButton>
        </Box>
        <Button color='primary'>
          Contact Us
        </Button>
      </Toolbar>
    </Box>
  )
}
