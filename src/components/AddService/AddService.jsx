import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import UseTitle from '../UseTitle/UseTitle';

const AddService = () => {
    UseTitle('AddService')

    const handleAddService = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const image = form.image.value;
        const newServiceInfo = { name, price, image }

        fetch(`https://service-review-server-pi.vercel.app/addService`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newServiceInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                form.name.value = '';
                form.price.value = '';
                form.image.value = '';
                toast.success('Add a service successfully');
            })
    }


    return (
        <div>
            <form onSubmit={handleAddService} className='w-96 text-center mx-auto my-32 space-y-10 bg-slate-700 p-5 rounded'>
                <input type="text" placeholder="Name" name='name' className="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Price" name='price' className="input w-full max-w-xs" />
                <input type="text" placeholder="image" name='image' className="input w-full max-w-xs" />
                <button type='submit' className='btn btn-success'>Add Service</button>
            </form>
        </div>
    );
};

export default AddService;