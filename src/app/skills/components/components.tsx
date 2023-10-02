import { Box, Typography } from "@mui/material";

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


export const Specialty = ({ icon, title, message }: SpecialtyProps) => {
  return (
    <Box display='flex' flexDirection='column' gap={12} alignItems='center'>
      <Box display='flex' flexDirection='column' gap={12} justifyContent='space-between' alignItems='center'>
        <Box>
          {icon}
        </Box>
        <Typography variant='h4'>
          {title}
        </Typography>
      </Box>
      <Box width={300} height={100}>
        <Typography color='grey'>
          {message}
        </Typography>
      </Box>
    </Box>
  )
}

export const SkillSetItem = ({ icon, title }: SkillSetItemProps) => {
  return (
    <Box display='flex' flexDirection='row' alignItems='center'>
      {icon}
      <Typography marginLeft={8} variant='h6'>
        {title}
      </Typography>
    </Box>
  )
}

export const SkillSetColumnItem = ({ items }: SkillSetColumnItemProps) => {
  return (
    <Box display='flex' flexDirection='column' gap={4}>
      {items.map((e, i) => (
        <SkillSetItem key={`${i}-skill-set-item`} {...e} />
      ))}
    </Box>
  )
}