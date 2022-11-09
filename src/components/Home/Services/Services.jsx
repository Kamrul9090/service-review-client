import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { handler } from 'daisyui';

const Services = ({ service }) => {

    const { name, picture, about, price, _id } = service;

    return (
        <div>
            <div className="card w-full h-full bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <PhotoProvider>
                        <PhotoView src={picture}>
                            <img src={picture} alt="Shoes" className="w-full h-80 rounded-xl" />
                        </PhotoView>
                    </PhotoProvider>
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