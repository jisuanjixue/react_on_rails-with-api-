import * as React from 'react';
import { either, isEmpty, isNil } from "ramda";
import { Route, Switch } from 'react-router-dom';
import { getFromLocalStorage } from "../helpers/storage";
import Layout from "../Home/components/Layout";
import signUp from '../User/components/SignUp';
import signIn from '../User/components/SignIn';
import PrivateRoute from "../common/PrivateRoute";
import PostList from '../Post/index';

const Routes = () => {
  const authToken = getFromLocalStorage("authToken");
  const isLoggedIn = !either(isNil, isEmpty)(authToken) && authToken !== "null";

  return (
    <Switch>
      <Route
        path="/"
        component={Layout}
        exact
      />
      <Route
        path="/posts"
        component={PostList}
        exact
      />
      <Route
        path="/signin"
        component={signIn}
        exact
      />
      <Route
        path="/users"
        component={signUp}
        exact
      />
      <PrivateRoute
          path="/"
          redirectRoute="/login"
          condition={isLoggedIn}
          location={{}}
          component={()=> {}}
        />
    </Switch>
  );
}


export default Routes