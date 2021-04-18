import React from "react";

import AdminMenu from "./AdminMenu";

import "../../assets/style/components/admin/AdminLayout.scss";

const AdminLayout: React.FC = ({ children }) => {
  return (
    <div className='adminLayout'>
      <AdminMenu />
      <div className='adminLayout_content'>{children}</div>
    </div>
  );
};

export default AdminLayout;
