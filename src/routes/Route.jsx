import { createBrowserRouter } from "react-router-dom";
import AddReview from "../components/AddReview/AddReview";
import AllServices from "../components/Home/AllServices/AllServices";
import Home from "../components/Home/Home";
import ServiceDetails from "../components/Home/ServiceDetails/ServiceDetails";
import Login from "../components/Login/Login";
import SignUp from "../components/Signup/SignUp";
import ErrorPage from "../Error/ErrorPage";
import Main from "../layout/Main";

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
                loader: ({ params }) => fetch(`http://localhost:5000/allServices/${params.id}`)
            },
            {
                path: '/review',
                element: <AddReview></AddReview>
            }
        ]
    },
    {
        path: '/register',
        element: <SignUp></SignUp>
    },
])

