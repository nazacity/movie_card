import { Container } from '@mui/material';
import MovieCard from 'component/card/MovieCard';
import { IMovie } from 'models/movie.model';
import React from 'react';
import movieServices from 'services/movie.services';
import useAsync from 'utils/useAsync';

const HomePage = () => {
  const { data: movieLists } = useAsync<IMovie[]>(movieServices.getMovies, {
    immediate: true,
  });

  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      {movieLists?.map((item, index) => {
        return <MovieCard key={item.id} item={item} index={index} />;
      })}
    </Container>
  );
};

export default HomePage;
