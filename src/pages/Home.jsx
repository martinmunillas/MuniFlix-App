import React from 'react';
import Carousel from '../components/Carousel';
import { connect } from 'react-redux';
import CarouselItem from '../components/CarouselItem';
import Header from '../components/Header';

const Home = (props) => {
  return (
    <>
    <Header />
      <Carousel>
        {props.movies.map(movie => (
            <CarouselItem key={movie.id} {...movie} />
        ))}
      </Carousel>
    </>
  );
};

const mapStateToProps = state => {
    return {
        movies: state.movies
    }
}

export default connect(mapStateToProps, null)(Home);
