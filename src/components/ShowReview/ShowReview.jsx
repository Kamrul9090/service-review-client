import React, { useContext, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const ShowReview = ({ userReview }) => {
    const { user } = useContext(AuthContext);
    const { feedback, rating } = userReview;
    console.log(feedback);
    return (
        <div>
            <div className="flex flex-col w-full lg:flex-row">
                <div className="grid flex-grow h-72 card bg-base-300 rounded-box p-3 m-5">
                    <div className='flex justify-between items-center'>
                        <p>{user?.displayName}</p>
                        <div className="avatar">
                            <div className="w-14 mask mask-hexagon">
                                <img className='' src={user?.photoURL} alt="" srcset="" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='m-2 font-bold'>Rating:{rating}
                            <span className='flex text-orange-500'>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                            </span>
                        </p>
                        <p>{feedback}</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ShowReview;