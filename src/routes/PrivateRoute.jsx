import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Audio } from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const { user, loader } = useContext(AuthContext);
    if (loader) {
        return <Audio
            height="100"
            width="100"
            color="#4fa94d"
            ariaLabel="audio-loading"
            wrapperStyle={{}}
            wrapperClass="wrapper-class"
            visible={true}
        />
    }
    if (user) {
        <div>
            {children}
        </div>
    } else {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
};

export default PrivateRoute;