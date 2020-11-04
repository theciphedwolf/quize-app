import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import Loading from "./Loading";

const PrivateRoute = ({ loading, component: Component, ...rest }) => {
  const { isAuthenticated } = useContext(UserContext);

  if (loading) {
    return <Loading />;
  }

  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }

  return <Route {...rest} render={(props) => <Component {...props} />} />;
};

export default PrivateRoute;
