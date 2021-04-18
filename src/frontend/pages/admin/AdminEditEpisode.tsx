import React from "react";

import { editEpisode } from "../../redux/actions";

import AdminEpisodesForm from "../../components/admin/AdminEpisodesForm";
import { useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

interface AdminEditEpisodeProps {}

const AdminEditEpisode: React.FC<AdminEditEpisodeProps> = ({}) => {
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
  const episode = episodes.find((episode) => episode._id === episodeId);

  const handleSubmit = (data: any) => {
    dispatch(editEpisode(data, episode._id));
    history.push(`/admin/series/${serie._id}`);
  };

  return (
    <div className='safeContainer'>
      <h1 className='mV'>
        Edit "{episode.name}" of {serie.name}
      </h1>
      <AdminEpisodesForm handleSubmit={handleSubmit} formValues={episode} />
    </div>
  );
};

export default AdminEditEpisode;
