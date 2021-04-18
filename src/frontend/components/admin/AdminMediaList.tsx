import React from "react";

import "../../assets/style/components/admin/AdminMediaList.scss";

import AdminMediaListItem from "./AdminMediaListItem";

interface AdminMediaListProps {
  media: any[];
  mediaPath: string;
}

const AdminMediaList: React.FC<AdminMediaListProps> = ({
  media,
  mediaPath,
}) => {
  return (
    <ul className='adminMediaList'>
      {media.map((item: any) => (
        <AdminMediaListItem {...item} mediaPath={mediaPath} key={item._id} />
      ))}
    </ul>
  );
};

export default AdminMediaList;
