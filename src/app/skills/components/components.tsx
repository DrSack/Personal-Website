import { Box, Grid, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';

interface SpecialtyProps {
  icon: any;
  title: string;
  message: string
}

interface SkillSetItemProps {
  icon?: any;
  title: string;
}

interface SkillSetColumnItemProps {
  items: SkillSetItemProps[];
}

const StyledTypographySpecialty = styled(Typography)(({ theme }) => ({
...theme.typography['h5'],
fontWeight: 'bolder'
}))


export const Specialty = ({ icon, title, message }: SpecialtyProps) => {
  return (
    <Box display='flex' flexDirection='column' justifyContent='center' gap={12} alignItems='center'>
      <Box display='flex' flexDirection='column' gap={12} justifyContent='space-between' alignItems='center'>
        <Box>
          {icon}
        </Box>
        <StyledTypographySpecialty variant='h4'>
          {title}
        </StyledTypographySpecialty>
      </Box>
      <Box maxWidth={300} height={100}>
        <Typography color='grey'>
          {message}
        </Typography>
      </Box>
    </Box>
  )
}

export const SkillSetItem = ({ icon, title }: SkillSetItemProps) => {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Box display='flex' flexDirection='row' alignItems='center' justifyContent='center'>
        {icon}
        <Typography marginLeft={8} variant='h6'>
          {title}
        </Typography>
      </Box>
    </Grid>
  )
}

export const SkillSetColumnItem = ({ items }: SkillSetColumnItemProps) => {
  return (
    <Grid container spacing={8} marginBottom={8}>
      {items.map((e, i) => (
        <SkillSetItem key={`${i}-skill-set-item`} {...e} />
      ))}
    </Grid>
  )
}