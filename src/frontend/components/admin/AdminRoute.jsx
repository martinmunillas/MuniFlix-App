import React from 'react';
import { Route } from 'react-router-dom'

import AdminLayout from './AdminLayout';

const AdminRoute = (props) => {
  return (
    <>
      <AdminLayout>
        <Route
          exact={props.exact}
          path={props.path}
          component={props.component}
        />
      </AdminLayout>
    </>
  );
};

export default AdminRoute;
