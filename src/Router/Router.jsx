import {
    createBrowserRouter,
  } from "react-router-dom";
  //import Root from "../components/Root/Root";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import JobDetails from "../Pages/jobDetails";
import PrivateRouter from "./PrivateRouter";
import Jobs from "../Pages/Jobs";
import AddJob from "../Pages/AddJob";
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
        },
        {
            path:"/job/:id",
           element: <PrivateRouter><JobDetails></JobDetails></PrivateRouter>,
           loader:({params})=> fetch(`http://localhost:5000/job/${params.id}`)
        },
        {
            path:"/jobs",
           element: <PrivateRouter><Jobs></Jobs></PrivateRouter>,
           
        },
        {
            path:"/add-jobs",
           element: <PrivateRouter><AddJob></AddJob></PrivateRouter>,
           
        }
      ]
    },
  ]);
  export default router;