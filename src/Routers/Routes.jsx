import {createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import NotFoundPage from "../Components/NotFoundPage";
import Home from "../Pages/Home/Home/Home";
import ServiceCardDetails from "../Pages/Home/Services/serviceCardDetails";
import Login from "../Components/LogIn";
import SignUp from "../Components/SignUp";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<NotFoundPage></NotFoundPage>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/serviceCardDetails/:id',
          element:<ServiceCardDetails></ServiceCardDetails>,
          
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        }
      ]
    },
  ]);

  export default router