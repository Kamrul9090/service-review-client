import { createBrowserRouter } from "react-router-dom";
import AddReview from "../components/AddReview/AddReview";
import AddService from "../components/AddService/AddService";
import Blogs from "../components/Blogs/Blogs";
import AllServices from "../components/Home/AllServices/AllServices";
import Home from "../components/Home/Home";
import ServiceDetails from "../components/Home/ServiceDetails/ServiceDetails";
import Login from "../components/Login/Login";
import MyReviews from "../components/MyReviews/MyReviews";
import SignUp from "../components/Signup/SignUp";
import ErrorPage from "../Error/ErrorPage";
import Main from "../layout/Main";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/servicesAll',
                element: <AllServices></AllServices>
            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`https://service-review-server-pi.vercel.app/allServices/${params.id}`)
            },
            {
                path: '/review',
                element: <PrivateRoute><AddReview></AddReview></PrivateRoute>
            },
            {
                path: '/addService',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/blog',
                element: <Blogs></Blogs>
            }
        ]
    },
    {
        path: '/register',
        element: <SignUp></SignUp>
    },
    {
        path: '/reviews',
        element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>,
    },
])

