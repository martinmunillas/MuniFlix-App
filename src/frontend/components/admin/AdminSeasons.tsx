import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { deleteSeason } from "../../redux/actions";

import "../../assets/style/components/admin/AdminSeasons.scss";

import AdminEpisodes from "./AdminEpisodes";

interface AdminSeasonsProps {
  season: any;
  serieId: string;
}

const AdminSeasons: React.FC<AdminSeasonsProps> = ({ season, serieId }) => {
  const dispatch = useDispatch();
  const handleDeleteSeason = () => {
    dispatch(deleteSeason(season._id, serieId));
  };
  return (
    <div className='adminSeasons'>
      <div className='adminSeasons_header'>
        <h1>Season {season.number}</h1>
        <div className='adminSeasons_header-buttons'>
          <Link
            to={`/admin/series/${serieId}/seasons/${season._id}/episode/add`}
          >
            <button className='button2'>Add Episode</button>
          </Link>
          <button onClick={handleDeleteSeason}>Delete Season</button>
        </div>
      </div>
      <div className='adminSeasons_episodes'>
        {season.episodes.map((episode: any) => (
          <AdminEpisodes
            episode={episode}
            seasonNumber={season.number}
            serieId={serieId}
            key={episode._id}
          />
        ))}
      </div>
    </div>
  );
};

export default AdminSeasons;
