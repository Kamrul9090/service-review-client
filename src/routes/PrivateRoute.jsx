import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext);
    return (
        <div>

        </div>
    );
};

export default PrivateRoute;