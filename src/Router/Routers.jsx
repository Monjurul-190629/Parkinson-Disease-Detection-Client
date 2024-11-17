import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from '../Layout/Main';
import Home from '../Pages/Home';
import Login from '../Pages/Login_Registration.jsx/Login';
import Registration from '../Pages/Login_Registration.jsx/Registration';

const Routers = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path : "/",
            element : <Home></Home>
        },
        {
          path: "/Login",
          element : <Login></Login>
        },
        {
          path: "/Registration",
          element : <Registration></Registration>
        }
      ]
    },
  ])

export default Routers;