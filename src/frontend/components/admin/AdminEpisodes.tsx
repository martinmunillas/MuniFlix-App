import React from "react";
import { Link } from "react-router-dom";

import "../../assets/style/components/admin/AdminEpisodes.scss";

interface AdminEpisodesProps {
  episode: any;
  seasonNumber: string | number;
  serieId: string;
}

const AdminEpisodes: React.FC<AdminEpisodesProps> = ({
  episode,
  seasonNumber,
  serieId,
}) => {
  return (
    <Link to={`/admin/series/${serieId}/episode/${episode._id}`}>
      <div className='adminEpisodes'>
        <h2>
          S{seasonNumber}E{episode.number}
        </h2>
        <h2>{episode.name}</h2>
      </div>
    </Link>
  );
};

export default AdminEpisodes;
