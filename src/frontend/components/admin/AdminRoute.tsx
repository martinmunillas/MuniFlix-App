import React from "react";
import { Route, RouteProps } from "react-router-dom";

import AdminLayout from "./AdminLayout";

const AdminRoute: React.FC<RouteProps> = (props) => {
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
