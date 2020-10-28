import React from 'react';
import Carousel from '../components/Carousel';
import { connect } from 'react-redux';
import CarouselItemMovie from '../components/CarouselItemMovie';
import CarouselItemSeries from '../components/CarouselItemSeries';
import Header from '../components/Header';

const Home = (props) => {
  const { movies, series } = props.media;

  const onSearch = () => {
    props.history.push('/search')
  } 

  return (
    <>
      <Header onSearch={onSearch} />
      {movies.length > 0 && (
        <Carousel name='Movies'>
          {movies.map((movie) => (
            <CarouselItemMovie key={movie._id} movie={movie} />
          ))}
        </Carousel>
      )}
      {series.length > 0 && (
        <Carousel name='Series'>
          {series.map((serie) => (
            <CarouselItemSeries key={serie._id} {...serie} />
          ))}
        </Carousel>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    media: state.media,
  };
};

export default connect(mapStateToProps, null)(Home);
