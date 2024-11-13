import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
import App from "./App";

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { App }  path="/" exact />
           <Route component = { Login }  path="/login" />
           <Route component = { Register }  path="/register" />
       </BrowserRouter>
   )
}

export default Routes;