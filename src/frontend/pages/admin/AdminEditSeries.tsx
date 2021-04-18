import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateSeries } from "../../redux/actions";

import AdminSeriesForm from "../../components/admin/AdminSeriesForm";
import { useHistory, useParams } from "react-router";

interface AdminEditSeriesProps {}

const AdminEditSeries: React.FC<AdminEditSeriesProps> = ({}) => {
  const { serieId } = useParams<any>();
  const serie = useSelector((state: any) =>
    state.media.series.find((serie: any) => serie._id === serieId)
  );
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (data: any) => {
    dispatch(updateSeries(data, serie._id));
    history.push(`/admin/series/${serie._id}`);
  };

  return (
    <div className='safeContainer'>
      <h1 className='mV'>Edit "{serie.name}"</h1>
      <AdminSeriesForm handleSubmit={handleSubmit} formValues={serie} />
    </div>
  );
};

export default AdminEditSeries;
