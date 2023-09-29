import { Box, Button, Card, Typography } from '@mui/material'

export default function Home() {
  return (
    <Box style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '52px' }}>
      <Typography variant='h2' style={{ marginTop: '32px', fontWeight: 'bold' }}>Let's Find Your Next Property</Typography>
      <Box width='600px' style={{marginTop: '36px'}}>
        <Typography variant='h6' style={{ marginTop: '68px', color: 'grey' }}>
          Here is some random text at the bottom. Maybe this can do something idk hahahahah more text is fun here. But maybe you get the point of this.
        </Typography>
        <Button style={{ marginTop: '48px' }} variant='outlined'>
          Read More
        </Button>
      </Box>
      <Box style={{ marginTop: '120px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '1800px' }}>
        <Card style={{ width: '500px', height: '300px',  }}>
          Image
        </Card>
        <Card style={{ width: '500px', height: '300px' }}>
          Image
        </Card>
        <Card style={{ width: '500px', height: '300px' }}>
          Image
        </Card>
      </Box>
    </Box>
  )
}
