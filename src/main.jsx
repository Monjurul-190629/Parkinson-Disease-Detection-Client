import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import * as React from "react";
import {
  RouterProvider,
} from "react-router-dom";
import Routers from './Router/Routers';
import './index.css'
import AuthProvider from './Pages/Provider/AuthProvider';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={Routers} />
      </AuthProvider>
    </React.StrictMode>
  </StrictMode>,
)
