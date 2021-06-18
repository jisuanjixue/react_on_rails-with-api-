import * as React  from 'react'
import { FunctionComponent, useEffect, useState  } from 'react'
import { BrowserRouter} from "react-router-dom";
import { ToastContainer } from "react-toastify";
// import PageLoader  from "../../bundles/common/PageLoader";
// import Layout from "../Home/components/Layout";
import Routes from "../routes"

export interface Props {
  
}

const Home: FunctionComponent<Props> = (props: Props) => {

    return (
      <BrowserRouter>
      <ToastContainer />
       <div>
         <Routes />
       </div>
      </BrowserRouter>
    )
}

export default Home