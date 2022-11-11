import React, { useEffect, useState } from 'react';
import Lottie from "lottie-react";
import foodies from '../../assets/banner/foodies.json';
import eat from '../../assets/banner/eat.json';
import Services from './Services/Services';
import { Link } from 'react-router-dom';
import ServiceType from './ServiceType/ServiceType';
import AddServiceCard from '../AddService/AddServiceCard';
import UseTitle from '../UseTitle/UseTitle';
import { ColorRing } from 'react-loader-spinner';
const Home = () => {
    UseTitle('Home')
    const [services, setServices] = useState([])
    const [serviceType, setServiceType] = useState([])
    const [serviceInfo, setServiceInfo] = useState([]);

    useEffect(() => {
        fetch(`https://service-review-server-pi.vercel.app/services`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    useEffect(() => {
        fetch(`https://service-review-server-pi.vercel.app/serviceType`)
            .then(res => res.json())
            .then(data => setServiceType(data))
    }, [])


    useEffect(() => {
        fetch(`https://service-review-server-pi.vercel.app/addService`)
            .then(res => res.json())
            .then(data => setServiceInfo(data));
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
            <Link to='/servicesAll'>
                <button className="btn btn-lg btn-wide bg-purple-900 mt-10">See All</button>
            </Link>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    serviceInfo.map(newService => <AddServiceCard newService={newService}></AddServiceCard>)
                }

            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 my-20 container mx-auto'>
                {
                    serviceType.map(serType => <ServiceType key={serType._id} serType={serType}></ServiceType>)
                }
            </div>
        </div>
    );
};

export default Home;