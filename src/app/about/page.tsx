'use client'

import { Build, FormatPaint, ViewQuilt } from "@mui/icons-material";
import { Box, Divider, Slide, styled, Typography } from "@mui/material"
import { useEffect, useState } from "react";

const StyledBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(30),
  height: '85vh',
  [theme.breakpoints.down('md')]: {

  }
}));

const StyledMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
}))

interface SpecialtyProps {
  icon: any;
  title: string;
  message: string
}

const Specialty = ({ icon, title, message }: SpecialtyProps) => {
  return (
    <Box display='flex' flexDirection='column' gap={12} justifyContent='center' alignItems='center'>
      <Box>
        {icon}
      </Box>
      <Typography variant='h4'>
        {title}
      </Typography>
      <Typography color='grey'>
        {message}
      </Typography>
    </Box>
  )
}

export default function Page() {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true)
  }, [])

  const specialties = [
    {
      icon: (<Build style={{ width: 64, height: 64, color: "#1976d2" }} />),
      title: 'Product Development',
      message: 'This is more than it takes',
    },
    {
      icon: (<ViewQuilt style={{ width: 64, height: 64, color: "#1976d2" }} />),
      title: 'Interactive Design',
      message: 'This is more than it takes',
    },
    {
      icon: (<FormatPaint style={{ width: 64, height: 64, color: "#1976d2" }} />),
      title: 'UI/UX Features',
      message: 'This is more than it takes',
    }
  ];

  return (
    <StyledMainContainer>
      <Slide in={checked} direction='left' timeout={1000}>
        <StyledBoxContainer display='flex' flexDirection='row'>
          {specialties.map((e, i) => (
            <>
              <Specialty key={`${i}-specialty`} {...e} />
              {(i < specialties.length - 1) && <Divider key={`${i}-specialty-divider`} style={{ height: '50%' }} variant='middle' orientation='vertical' />}
            </>
          ))}
        </StyledBoxContainer>
      </Slide>
    </StyledMainContainer>
  )
}
