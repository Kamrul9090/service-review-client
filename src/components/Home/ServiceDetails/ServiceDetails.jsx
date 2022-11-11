import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import ShowReview from '../../ShowReview/ShowReview';
import UseTitle from '../../UseTitle/UseTitle';

const ServiceDetails = () => {
    UseTitle('Details')
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()
    const foodDetails = useLoaderData()
    const [userFeedback, setUserFeedback] = useState([])
    const { about, name, picture, price, rating } = foodDetails;

    useEffect(() => {
        fetch(`http://localhost:5000/reviewAdd`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setUserFeedback(data.reverse())
            })
    }, [])

    // const handleAddReviewBtn = () => {
    //     if (user) {
    //         navigate('/review')
    //     } else {
    //         <>

    //         </>


    //     }
    // }
    console.log(userFeedback);
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 my-20 m-10'>
            <div className="card bg-base-100 shadow-xl p-3">
                <figure><img src={picture} alt="Album" /></figure>
                <div className="flex flex-col justify-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{about}</p>
                    <div className='font-bold'>
                        <p>Price: <span className='text-purple-700'>{price}</span></p>
                        <p>Rating: <span className='text-purple-700'>{rating}</span></p>
                    </div>
                    <div className="card-actions justify-end">
                        {
                            user?.uid ?
                                <button type='submit' className="btn bg-purple-900">
                                    <Link to='/review'>Add review</Link>
                                </button>
                                :
                                <>
                                    <label htmlFor="my-modal-3" className="btn">Add Review</label>
                                    <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                                    <div className="modal">
                                        <div className="modal-box relative">
                                            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                            <h3 className="text-lg font-bold">Login first to add your review</h3>
                                            <span>Please<Link className='btn btn-link' to='/login'>Login</Link></span>
                                        </div>
                                    </div>
                                </>
                        }




                    </div>
                </div>
            </div>
            <div>
                <h1 className='text-4xl font-bold text-center'>Reviews</h1>
                {
                    userFeedback.map(userReview => <ShowReview userReview={userReview} key={userReview._id}></ShowReview>)
                }
            </div>
        </div>
    );
};

export default ServiceDetails;