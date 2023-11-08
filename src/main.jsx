import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout/Layout';
import Error from './Pages/Error/Error';
import AuthProvider from './Provider/AuthProvider/AuthProvider';
import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import SingleServiceDetails from './Pages/Services/SingleServiceDetails';
import MySchedules from './Pages/MySchedules/MySchedules';
import AddServices from './Pages/AddServices/AddServices';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
        loader: () => fetch("http://localhost:5000/services"),
      },
      {
        path: "/services/:id",
        element: <SingleServiceDetails></SingleServiceDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/myschedules",
        element: <MySchedules></MySchedules>,
      },
      {
        path:"/addservices",
        element:<AddServices></AddServices>,
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>
  </div>
)
