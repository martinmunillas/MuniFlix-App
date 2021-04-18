import React from "react";
import { useSelector } from "react-redux";

import Header from "../components/Header";
import SeasonPreview from "../components/SeasonPreview";

import "../assets/style/pages/MoviePreview.scss";
import { Link, useParams } from "react-router-dom";

interface SeriesPreviewProps {}

const SeriesPreview: React.FC<SeriesPreviewProps> = ({}) => {
  const { seriesId } = useParams<any>();
  const serie = useSelector((state: any) =>
    state.media.series.find((serie: any) => serie._id == seriesId)
  );
  return (
    <>
      <Header />
      <div className='moviePreview'>
        <Link to='/' className='moviePreviewDetails_goHome'>
          ⬅ Go Home
        </Link>
        <div className='moviePreview__info'>
          <h1 className='moviePreviewDetails_title'>{serie.name}</h1>
          <p className='moviePreviewDetails_description'>{serie.description}</p>
          <p>
            {serie.startYear} - {serie.finalYear} | +
            {serie.clasification !== 0 ? serie.clasification : "All Ages"}
          </p>
        </div>
        <img src={serie.cover} alt='' className='moviePreviewImage' />
      </div>
      <div className='seasons'>
        {serie.seasons.map((season: any) => (
          <SeasonPreview season={season} key={season._id} />
        ))}
      </div>
    </>
  );
};
export default SeriesPreview;
