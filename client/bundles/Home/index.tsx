import * as React from "react";
import { FunctionComponent } from "react";

import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// import PageLoader  from "../../bundles/common/PageLoader";
// import Layout from "../Home/components/Layout";
import Routes from "../routes";

// export interface Props {}

const Home: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <div>
        <Routes />
      </div>
    </BrowserRouter>
  );
};

export default Home;
