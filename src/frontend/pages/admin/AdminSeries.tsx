import React from "react";
import { useSelector } from "react-redux";

import AdminMediaTemplate from "../../components/admin/AdminMediaTemplate";

interface AdminSeriesProps {}

const AdminSeries: React.FC<AdminSeriesProps> = ({}) => {
  const series = useSelector((state: any) => state.media.series);

  return (
    <AdminMediaTemplate media={series} mediaPath='/series' name='Series' />
  );
};
export default AdminSeries;
