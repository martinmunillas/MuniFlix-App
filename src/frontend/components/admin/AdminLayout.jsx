import React from 'react';

import AdminMenu from './AdminMenu';

import '../../assets/style/components/admin/AdminLayout.scss'

const AdminLayout = (props) => {
  return (
    <div className='adminLayout'>
      <AdminMenu />
      <div className='adminLayout_content'>{props.children}</div>
    </div>
  );
};

export default AdminLayout;
