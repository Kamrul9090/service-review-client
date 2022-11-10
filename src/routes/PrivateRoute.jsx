import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Audio } from 'react-loader-spinner';


const PrivateRoute = ({ children }) => {
    const location = useLocation();
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
        return children;

    } else {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
};

export default PrivateRoute;