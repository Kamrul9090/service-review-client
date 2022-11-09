import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {

    const foodDetails = useLoaderData()
    const { about, name, picture, price, rating } = foodDetails;

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
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
            <div>content</div>
        </div>
    );
};

export default ServiceDetails;