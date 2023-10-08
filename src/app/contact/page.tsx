'use client'

import { Alert, Box, Slide, Snackbar, styled, TextField, Typography } from "@mui/material"
import { LoadingButton } from '@mui/lab'
import React from "react"
import { useEffect, useState } from "react"

const StyledMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  padding: theme.spacing(4),
  gap: theme.spacing(18),
}))

const StyledContactContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '360px',
  height: '400px',
  [theme.breakpoints.down('sm')]: {
    width: '330px',
  },
}))

const StyledMainContactContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  alignItems: 'center',
  height: '550px',
  [theme.breakpoints.down('md')]: {
    marginTop: '32px',
    height: '550px',
  },
}))

const messages = {
  SUCCESS: 'Message Successfully Sent. Thank you for contacting me',
  ERROR: 'There was a problem sending your request'
}

export default function Page() {
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    setChecked(true)
  }, [])

  const onSubmit = async (event: any) => {
    event.preventDefault()
    const request = {
      name,
      email,
      message,
    }
    try {
      setLoading(true)
      const response = await fetch('/api/submitContact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...request })
      });

      const result = await response.json()
      if (result) setOpen('Message Successfully Sent. Thank you for contacting me')
    } catch (e) {
      console.error(e);
      setOpen('There was a problem sending your request');
    } finally {
      setLoading(false);
    }
  }

  return (
    <StyledMainContainer>
      <Slide in={checked} direction='left' timeout={1000}>
        <StyledMainContactContainer>
          <Box display='flex' justifyContent='space-between' flexDirection='column' alignItems='center'>
            <Typography variant='h3' fontWeight='bold'>
              /contact
            </Typography>
            <Typography variant='body1'>
              If you need any help
            </Typography>
          </Box>
          <form onSubmit={onSubmit}>
            <StyledContactContainer>
              <TextField disabled={loading} required variant="outlined" label="Name" onChange={e => setName(e.target.value)} />
              <TextField disabled={loading} required type='email' label="Email" variant="outlined" onChange={e => setEmail(e.target.value)} />
              <TextField
                disabled={loading}
                required
                label="Message"
                multiline
                rows={5}
                onChange={e => setMessage(e.target.value)}
              />
              <LoadingButton loading={loading} variant='outlined' type="submit">Submit</LoadingButton>
            </StyledContactContainer>
          </form>
        </StyledMainContactContainer>
      </Slide>
      {open !== '' &&
        (
          <Snackbar open={open !== ''} autoHideDuration={6000} onClose={() => setOpen('')}>
            <Alert severity={open === messages.SUCCESS ? 'success' : 'error'}>
              {open}
            </Alert>
          </Snackbar>
        )
      }
    </StyledMainContainer >
  )
}
