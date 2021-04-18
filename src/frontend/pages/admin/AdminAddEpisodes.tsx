import React from "react";
import { useDispatch } from "react-redux";

import { addEpisode } from "../../redux/actions";

import AdminEpisodesForm from "../../components/admin/AdminEpisodesForm";
import { useHistory, useParams } from "react-router";

interface AdminAddEpisodes {}

const AdminAddEpisodes: React.FC<AdminAddEpisodes> = ({}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { serieId, seasonId } = useParams<any>();

  const handleSubmit = (data: any) => {
    dispatch(addEpisode({ ...data, season: seasonId }));
    history.push(`/admin/series/${serieId}`);
  };

  return (
    <div className='safeContainer'>
      <h1 className='mV'>Add Episode</h1>
      <AdminEpisodesForm handleSubmit={handleSubmit} formValues={{}} />
    </div>
  );
};

export default AdminAddEpisodes;
