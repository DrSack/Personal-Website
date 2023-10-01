'use client'

import { Build, FormatPaint, ViewQuilt } from "@mui/icons-material";
import { Box, Divider, Slide, styled, Typography } from "@mui/material"
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

const StyledBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(30),
  height: '50vh',
  marginRight: theme.spacing(8),
  [theme.breakpoints.down('md')]: {

  }
}));

const StyledMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  padding: theme.spacing(4),
  gap: theme.spacing(18),
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

  const { item1, item2, item3, item4 } = {
    item1: [
      { icon: (<ReactLogo />), title: 'React.js' },
      { icon: (<NodeJsLogo />), title: 'Node.js' },
    ],
    item2: [
      { icon: (<NextJsLogo />), title: 'Next.js' },
      { icon: (<TypescriptLogo />), title: 'Typescript' },
    ],
    item3: [
      { icon: (<JavascriptLogo />), title: 'Javascript' },
      { icon: (<MongoDbLogo />), title: 'MongoDb' },
    ],
    item4: [
      { icon: (<MySQLLogo />), title: 'MySQL' },
      { icon: (<DynamoDbLogo />), title: 'DynamoDb' },
    ],
  }

  return (
    <StyledMainContainer>
      <Slide in={checked} direction='left' timeout={1000}>
        <Box display='flex' justifyContent='space-between' flexDirection='column' alignItems='center' marginTop={12}>
          <Typography variant='h3' fontWeight='bold'>
            Skill Sets
          </Typography>
          <StyledBoxContainer display='flex' flexDirection='row'>
            {specialties.map((e, i) => (
              <>
                <Specialty key={`${i}-specialty`} {...e} />
                {(i < specialties.length - 1) && <Divider key={`${i}-specialty-divider`} style={{ height: '50%' }} variant='middle' orientation='vertical' />}
              </>
            ))}
          </StyledBoxContainer>
        </Box>
      </Slide>
      <Slide in={checked} direction='right' timeout={1000}>
        <Box gap={40} display='flex' justifyContent='space-between' flexDirection='column' alignItems='center'>
          <Box gap={40} width='70%' display='flex' justifyContent='space-between' flexDirection='row' alignItems='center'>
            <SkillSetColumnItem items={item1} />
            <SkillSetColumnItem items={item2} />
            <SkillSetColumnItem items={item3} />
            <SkillSetColumnItem items={item4} />
          </Box>
        </Box>
      </Slide>
    </StyledMainContainer>
  )
}
