import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import UseTitle from '../../UseTitle/UseTitle';

const AllServices = () => {
    UseTitle('All Service')
    const [allServices, setAllServices] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/allServices`)
            .then(res => res.json())
            .then(data => setAllServices(data))
    }, [])

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3'>
            {
                allServices.map(service => <div className="card w-full h-full bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <PhotoProvider>
                            <PhotoView src={service.picture}>
                                <img src={service.picture} alt="Shoes" className="w-full h-80 rounded-xl" />
                            </PhotoView>
                        </PhotoProvider>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{service.name}</h2>
                        <p>{service.about.slice(0, 100) + '...'}</p>
                        <p className='font-bold text-primary'>{service.price}</p>
                        <div className="card-actions">
                            <button className="btn btn-primary"><Link to={`/services/${service._id}`}>Details</Link></button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default AllServices;