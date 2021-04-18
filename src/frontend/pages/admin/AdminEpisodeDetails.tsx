import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";

import { deleteEpisode } from "../../redux/actions";

interface AdminEpisodeDetailsProps {}

const AdminEpisodeDetails: React.FC<AdminEpisodeDetailsProps> = ({}) => {
  const { serieId, episodeId } = useParams<any>();
  const dispatch = useDispatch();
  const history = useHistory();

  const serie = useSelector((state: any) =>
    state.media.series.find((serie: any) => serie._id === serieId)
  );

  const episodes: any[] = [];
  serie.seasons.forEach((season: any) =>
    season.episodes.forEach((episode: any) => episodes.push(episode))
  );
  const episode = episodes.find((episode: any) => episode._id === episodeId);
  const season = serie.seasons.find(
    (season: any) => season._id === episode.season
  );

  const { _id, name, description, number } = episode;
  const seasonNumber = season.number;

  const handleDelete = () => {
    dispatch(deleteEpisode(_id));
    history.push(`/admin/series/${serie._id}`);
  };

  return (
    <div className='adminMovieDetails'>
      <img src={serie.cover} alt={name} />
      <div>
        <h1>
          S{seasonNumber}E{number} {name}
        </h1>
        <p>{description}</p>
        <Link to={`/admin/series/${serie._id}/episode/${_id}/edit`}>
          <button className='button2'>Edit</button>
        </Link>

        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default AdminEpisodeDetails;
