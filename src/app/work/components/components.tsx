import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, styled, Typography } from "@mui/material";

export interface CardSelectableProps {
  image: string;
  alt?: string;
  title: string;
  message: string;
  onClick: () => void;
}

interface CardSelectableListProps {
  items: CardSelectableProps[];
}

const StyledCardListBox = styled(Box)(({ theme }) => ({
  width: '80%',
  marginTop: theme.spacing(25),
  marginBottom: theme.spacing(25),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    width: '90%',
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  }
}))

const StyledCardListGrid = styled(Grid)(({ theme }) => ({
  flexDirection: "row",
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  }
}))

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 350,
  width: 350,
  [theme.breakpoints.down('md')]: {
    minWidth: 240,
    maxWidth: 350,
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: 350,
  }
}))

export const CardSelectable = ({ image, alt, title, message, onClick }: CardSelectableProps) => {
  return (
    <StyledCard>
      <CardActionArea onClick={onClick}>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={alt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {message}
          </Typography>
        </CardContent>
      </CardActionArea>
    </StyledCard>
  )
}

export const CardList = ({ items }: CardSelectableListProps) => {
  return (
    <StyledCardListBox>
      <StyledCardListGrid spacing={8} container>
        {items.map((e, i) => (
          <Grid display='flex' alignItems='center' justifyContent='center' key={`${i}-skill-set-grid-item`} item xs={12} sm={6} md={4}>
            <CardSelectable key={`${i}-skill-set-item`} {...e} />
          </Grid>
        ))}
      </StyledCardListGrid>
    </StyledCardListBox>
  )
}