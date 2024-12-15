import {
    createBrowserRouter,
  } from "react-router-dom";
  //import Root from "../components/Root/Root";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
  const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
      errorElement: 'Not found',
      children:[
        {
            path:"/",
           element:<Home></Home>
        },
        {
            path:"/register",
           element: <Register></Register>
        },
        {
            path:"/login",
           element: <Login></Login>
        }
      ]
    },
  ]);
  export default router;