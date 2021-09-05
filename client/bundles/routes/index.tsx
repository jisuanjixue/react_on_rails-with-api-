import * as React from "react";

import { either, isEmpty, isNil } from "ramda";
import { Route, Switch } from "react-router-dom";

import { getFromLocalStorage } from "../helpers/storage";
import Layout from "../Home/components/Layout";
import PostList from "../Post";
import signIn from "../User/components/SignIn";
import signUp from "../User/components/SignUp";
// import PrivateRoute from "../common/PrivateRoute";

const Routes = () => {
  const authToken = getFromLocalStorage("authToken");
  // eslint-disable-next-line no-console
  console.log(authToken);
  const isLoggedIn = !either(isNil, isEmpty)(authToken) && authToken !== "null";
  // eslint-disable-next-line no-console
  console.log(isLoggedIn);

  return (
    <Switch>
      <Route path="/" component={Layout} exact />
      <Route path="/posts" component={PostList} exact />
      <Route path="/signin" component={signIn} exact />
      <Route path="/signup" component={signUp} exact />
      {/* <PrivateRoute
          path="/"
          redirectRoute="/login"
          condition={isLoggedIn}
          location={{}}
          component={signIn} */}
      {/* /> */}
    </Switch>
  );
};

export default Routes;
