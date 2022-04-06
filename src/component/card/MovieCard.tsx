import React, { useMemo } from 'react';
import { IMovie } from 'models/movie.model';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

interface IProps {
  item: IMovie;
  index: number;
}

const MovieCard: React.FC<IProps> = ({ item, index }) => {
  const shouldDisplayAds = useMemo(() => {
    if (index % 5 === 0) {
      return true;
    } else {
      return false;
    }
  }, [index]);
  return (
    <>
      <Card sx={{ width: 568, p: 0, borderRadius: '15px' }}>
        <CardMedia
          component="img"
          height={300}
          image={item.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {item.time}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
        </CardContent>
      </Card>
      {shouldDisplayAds && (
        <Card sx={{ width: 568, p: 0, borderRadius: '15px' }}>
          <CardMedia
            component="img"
            height={300}
            image="https://res.cloudinary.com/corpjurist/image/upload/v1649122230/5310773_1_goeaym.png"
            alt="green iguana"
          />
        </Card>
      )}
    </>
  );
};

export default MovieCard;
