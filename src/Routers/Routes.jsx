import {createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import NotFoundPage from "../Components/NotFoundPage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Components/LogIn";
import SignUp from "../Components/SignUp";
import ServiceBookings from "../Pages/Home/Services/ServiceBookings";
import ServiceCardDetails from "../Pages/Home/Services/ServiceCardDetails";



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
          loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
          
        },
        {
          path:'/myBooking',
          element:<ServiceBookings></ServiceBookings>
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