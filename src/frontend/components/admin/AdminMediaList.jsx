import React from 'react';

import AdminMediaListItem from './AdminMediaListItem';

const AdminMediaList = ({ media, mediaPath }) => {
  return (
    <ul>
      {media.map((item) => (
        <AdminMediaListItem {...item} mediaPath={mediaPath} key={item._id} />
      ))}
    </ul>
  );
};

export default AdminMediaList;
