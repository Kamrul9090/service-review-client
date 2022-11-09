import React, { useState } from 'react';

const ServiceType = ({ serType }) => {
    const { title, logo, delivery, shipping, shippingCost, about } = serType;
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl image-full">
                <figure><img src={logo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{about}</p>
                    <ul className="menu bg-purple-600 w-80">
                        <li><a>{delivery}</a></li>
                        <li><a>{shipping}</a></li>
                        <li><a>{shippingCost}</a></li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default ServiceType;