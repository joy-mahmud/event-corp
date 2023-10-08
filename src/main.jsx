import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  RouterProvider,createBrowserRouter
} from "react-router-dom";
import Root from './pages/Root';
import Home from './pages/Home';
import AuthProvider from './components/AuthProvider';
import Login from './pages/Login';
import Register from './pages/Register';
import PrivateRoute from './privateRoute/PrivateRoute';
import ServiceDetails from './pages/ServiceDetails';
import Services from './pages/Services';
import ErrorPage from './pages/ErrorPage';
import Gallary from './pages/Gallary';

const router = createBrowserRouter([
  {
      path:"/",
      errorElement:<ErrorPage></ErrorPage>,
      element:<Root></Root>,
      children:[
        {
          path:'/',
          element:<Home></Home>,
          loader:()=>fetch('/services.json')
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/services',
          element:<Services></Services>,
          loader:()=>fetch('/services.json')
        },
        {
          path:'/gallary',
          element:<Gallary></Gallary>,
          loader:()=>fetch("/gallary.json")
        },
        {
          path:'/serviceDetails/:id',
          element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
          
        }
      ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
