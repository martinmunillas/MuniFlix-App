import React from "react";

import AdminMediaList from "./AdminMediaList";

import "../../assets/style/components/admin/AdminMediaTemplate.scss";
import { Link } from "react-router-dom";

interface AdminMedia {
  name: string;
  mediaPath: string;
  media: any[];
}

const AdminMedia: React.FC<AdminMedia> = ({ name, ...props }) => {
  return (
    <>
      <div className='adminMedia_hero'>
        <h1>{name}</h1>
        <Link to={`/admin${props.mediaPath}/add`}>Add {name} ➡</Link>
      </div>
      <AdminMediaList media={props.media} mediaPath={props.mediaPath} />
    </>
  );
};

export default AdminMedia;
