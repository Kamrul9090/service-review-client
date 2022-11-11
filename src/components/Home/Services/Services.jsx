import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { ColorRing } from 'react-loader-spinner';

const Services = ({ service }) => {
    const { loader } = useContext(AuthContext);
    if (loader) {
        return <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
    }
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
                        <Link to={`/services/${_id}`}>
                            <button className="btn btn-primary">Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;