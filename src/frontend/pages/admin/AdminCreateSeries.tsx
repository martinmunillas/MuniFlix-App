import React from "react";
import { useDispatch } from "react-redux";

import { addSeries } from "../../redux/actions";

import AdminSeriesForm from "../../components/admin/AdminSeriesForm";
import { useHistory } from "react-router";

interface AdminCreateSeriesProps {}

const AdminCreateSeries: React.FC<AdminCreateSeriesProps> = ({}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (data: any) => {
    dispatch(addSeries(data));
    history.push(`/admin/series/`);
  };

  return (
    <div className='safeContainer'>
      <h1 className='mV'>Create Series</h1>
      <AdminSeriesForm handleSubmit={handleSubmit} formValues={{}} />
    </div>
  );
};

export default AdminCreateSeries;
