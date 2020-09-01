import React from 'react';
import Carousel from '../components/Carousel';
import { connect } from 'react-redux';
import CarouselItemMovie from '../components/CarouselItemMovie';
import CarouselItemSeries from '../components/CarouselItemSeries';
import Header from '../components/Header';

const Home = (props) => {
  return (
    <>
      <Header />

      <Carousel name="Movies">
        {props.media.movies.map((movie) => (
          <CarouselItemMovie key={movie.id} {...movie} />
        ))}
      </Carousel>

      <Carousel name="Series">
        {props.media.series.map((serie) => (
          <CarouselItemSeries key={serie.id} {...serie} />
        ))}
      </Carousel>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    media: state.media,
  };
};

export default connect(mapStateToProps, null)(Home);
