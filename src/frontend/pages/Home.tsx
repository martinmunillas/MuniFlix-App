import React from "react";
import Carousel from "../components/Carousel";
import { useSelector } from "react-redux";
import CarouselItemMovie from "../components/CarouselItemMovie";
import CarouselItemSeries from "../components/CarouselItemSeries";
import Header from "../components/Header";

const Home = ({}) => {
  const { movies, series } = useSelector((state: any) => state.media);
  return (
    <>
      <Header />
      {movies.length > 0 && (
        <Carousel name='Movies'>
          {movies.map((movie: any) => (
            <CarouselItemMovie key={movie._id} {...movie} />
          ))}
        </Carousel>
      )}
      {series.length > 0 && (
        <Carousel name='Series'>
          {series.map((serie: any) => (
            <CarouselItemSeries key={serie._id} {...serie} />
          ))}
        </Carousel>
      )}
    </>
  );
};

export default Home;
