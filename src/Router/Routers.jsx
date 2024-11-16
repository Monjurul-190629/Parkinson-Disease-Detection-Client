import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from '../Layout/Main';

const Routers = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      
    },
  ])

export default Routers;