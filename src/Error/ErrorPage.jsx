import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import errorLogo from '../../src/assets/logo/error.png'
const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div className="flex justify-center mt-48">
            {
                <div className=''>
                    <img className='w-48 text-center' src={errorLogo} alt="" />
                    <h1 className='text-4xl font-bold text-red-500'>{error.statusText}</h1>
                    <p className='text-xl font-mono font-bold'>Go to Home: <Link to='/' className='btn btn-link text-blue-600'>Home Page</Link></p>
                </div>

            }
        </div>
    );
};

export default ErrorPage;