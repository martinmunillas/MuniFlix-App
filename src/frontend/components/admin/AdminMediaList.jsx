import React from 'react';

import '../../assets/style/components/admin/AdminMediaList.scss';

import AdminMediaListItem from './AdminMediaListItem';

const AdminMediaList = ({ media, mediaPath }) => {
  return (
    <ul className='adminMediaList'>
      {media.map((item) => (
        <AdminMediaListItem {...item} mediaPath={mediaPath} key={item._id} />
      ))}
    </ul>
  );
};

export default AdminMediaList;
