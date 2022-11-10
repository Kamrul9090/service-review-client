import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ShowReview from '../../ShowReview/ShowReview';
import UseTitle from '../../UseTitle/UseTitle';

const ServiceDetails = () => {
    UseTitle('Details')
    const foodDetails = useLoaderData()
    const [userFeedback, setUserFeedback] = useState([])
    const { about, name, picture, price, rating } = foodDetails;

    useEffect(() => {
        fetch(`http://localhost:5000/reviewAdd`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setUserFeedback(data)
            })
    }, [])


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
                        <Link to='/review'>
                            <button type='submit' className="btn bg-purple-900">Add Review</button>
                        </Link>
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