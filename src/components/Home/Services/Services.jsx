import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Services = ({ service }) => {

    const { name, picture, rating, about, price, _id } = service;
    console.log(name);
    return (
        <div>
            <div className="card w-full h-full bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={picture} alt="Shoes" className="w-full h-80 rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{about.slice(0, 100) + '...'}</p>
                    <p className='font-bold text-primary'>{price}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary"><Link to={`/services/${_id}`}>Details</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;