'use client'

import { Build, FormatPaint, ViewQuilt } from "@mui/icons-material";
import { Box, Divider, Grid, Slide, styled, Typography } from "@mui/material"
import React from "react";
import { useEffect, useState } from "react";
import { DynamoDbLogo } from "../../../components/customIcons/DynamoDbLogo";
import { JavascriptLogo } from "../../../components/customIcons/JavascriptLogo";
import { MongoDbLogo } from "../../../components/customIcons/MongoDbLogo";
import { MySQLLogo } from "../../../components/customIcons/MySQLLogo";
import { NextJsLogo } from "../../../components/customIcons/NextJsLogo";
import { NodeJsLogo } from "../../../components/customIcons/NodeJsLogo";
import { ReactLogo } from "../../../components/customIcons/ReactLogo";
import { TypescriptLogo } from "../../../components/customIcons/TypescriptLogo";
import { SkillSetColumnItem, Specialty } from "./components/components";

const StyledGridContainer = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: theme.spacing(1),
  [theme.breakpoints.down('md')]: {

  }
}));

const StyledMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  padding: theme.spacing(4),
  gap: theme.spacing(12),
}))

export default function Page() {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true)
  }, [])

  const specialties = [
    {
      icon: (<Build style={{ width: 64, height: 64, color: "#1976d2" }} />),
      title: 'Product Development',
      message: 'Being well versed in software development I can help you define scopes, features and plan your project. Being from database, back-end development and front-end.',
    },
    {
      icon: (<ViewQuilt style={{ width: 64, height: 64, color: "#1976d2" }} />),
      title: 'Interactive Design',
      message: 'Utilizing Next.js and React to create responsive designs that suit your business needs and intuitive front-end interfaces that users can interact with.',
    },
    {
      icon: (<FormatPaint style={{ width: 64, height: 64, color: "#1976d2" }} />),
      title: 'Optimization',
      message: 'As your business wants to expand and grow. Understanding what needs to be optimised is vital to user engagement.',
    }
  ];

  const techList = [
    { icon: (<ReactLogo />), title: 'React.js' },
    { icon: (<NodeJsLogo />), title: 'Node.js' },
    { icon: (<NextJsLogo />), title: 'Next.js' },
    { icon: (<TypescriptLogo />), title: 'Typescript' },
    { icon: (<JavascriptLogo />), title: 'Javascript' },
    { icon: (<MongoDbLogo />), title: 'MongoDb' },
    { icon: (<MySQLLogo />), title: 'MySQL' },
    { icon: (<DynamoDbLogo />), title: 'DynamoDb' },
  ];

  return (
    <StyledMainContainer>
      <Slide in={checked} direction='left' timeout={1000}>
        <Box display='flex' justifyContent='space-between' flexDirection='column' alignItems='center' marginTop={12}>
          <Typography variant='h3' fontWeight='bold'>
            /skills
          </Typography>
          <Typography variant='body1'>
            My expertise
          </Typography>
          <StyledGridContainer container justifyContent='center' spacing={12} marginBottom={4}>
            {specialties.map((e, i) => (
              <Grid item xs={12} sm={6} md={4} key={`${i}-specialty-container`}>
                <Specialty key={`${i}-specialty`} {...e} />
                {(i < specialties.length - 1) && <Divider key={`${i}-specialty-divider`} style={{ height: '50%' }} variant='middle' orientation='vertical' />}
              </Grid>
            ))}
          </StyledGridContainer>
        </Box>
      </Slide>
      <Slide in={checked} direction='right' timeout={1000}>
        <Box gap={20} display='flex' justifyContent='center' flexDirection='column' alignItems='center'>
          <Typography variant='h4' fontWeight='bold'>
            Technologies
          </Typography>
          <Box gap={60} display='flex' justifyContent='center' flexDirection='row' alignItems='center'>
            <SkillSetColumnItem items={techList} />
          </Box>
        </Box>
      </Slide>
    </StyledMainContainer>
  )
}
