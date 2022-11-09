import React, { useEffect, useState } from 'react';
import Lottie from "lottie-react";
import foodies from '../../assets/banner/foodies.json';
import eat from '../../assets/banner/eat.json';
import Services from './Services/Services';
import { Link } from 'react-router-dom';
const Home = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/services`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='my-10 container mx-auto text-center'>
            <span className=''>
                <Lottie className='relative shadow-2xl border rounded-xl border-purple-400 overflow-hidden' animationData={foodies} loop={true}></Lottie>
            </span>
            <div className=' py-20 rounded-md shadow-2xl my-10 bg-purple-200'>
                <h1 className='text-5xl text-center font-bold font-mono text-purple-900'>Our Services</h1>
                <p className='text-center font-bold font-serif'>We are trying to take our best service to customers. That is why to making most <br /> popular recipe to serve. Check the details and chose the recipe that you want.</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Services key={service._id} service={service}></Services>)
                }
            </div>
            <button className="btn btn-lg btn-wide bg-purple-900 mt-10"><Link to='/servicesAll'>See All</Link></button>
        </div>
    );
};

export default Home;