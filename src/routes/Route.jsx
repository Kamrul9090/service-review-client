import { createBrowserRouter } from "react-router-dom";
import AllServices from "../components/Home/AllServices/AllServices";
import Home from "../components/Home/Home";
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
        ]
    },
    {
        path: '/register',
        element: <SignUp></SignUp>
    },
])

