import React, { useContext, useEffect, useState } from 'react';
import { ImHipster } from 'react-icons/im';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const ReviewTable = ({ review, handleDeleteReview }) => {
    const { feedback, rating, _id } = review;
    const { user } = useContext(AuthContext);

    return (
        <div>
            <tr>
                <th>
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                {
                                    user?.photoURL ?
                                        <img src={user?.photoURL} alt="Avatar Tailwind CSS Component" />
                                        :
                                        <ImHipster className='w-14 h-8'></ImHipster>

                                }

                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{user?.displayName}</div>
                        </div>
                    </div>
                </td>
                <td>
                    <span className="badge badge-ghost badge-sm">{feedback}</span>
                </td>
                <td>{rating}</td>
                <th>
                    <button className="btn btn-ghost btn-xs">edit Review</button>

                    <button onClick={() => handleDeleteReview(_id)} className="btn btn-ghost btn-xs">delete</button>
                </th>
            </tr>
        </div>
    );
};

export default ReviewTable;