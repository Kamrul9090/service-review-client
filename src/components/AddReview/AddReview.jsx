import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const AddReview = () => {
    const { user } = useContext(AuthContext)
    const [userInfo, setUserInfo] = useState({})

    const handleFeedback = e => {
        e.preventDefault();
        const form = e.target;
        const rating = form.rating.value;
        const feedback = form.feedback.value;
        const userReview = { rating, feedback }
        console.log(userReview);
        setUserInfo(userReview)
        fetch(`http://localhost:5000/reviewAdd`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    console.log(data);
                }
            });
    }

    return (
        <div className='my-20 container mx-auto'>
            <h1 className='text2-xl font-semibold font-serif'>Add Your Review Please</h1>
            <form onSubmit={handleFeedback} className='flex flex-col space-y-7 mt-5'>
                <input type="text" name='rating' placeholder="Rating" className="input input-bordered w-full max-w-xs" required />
                <textarea name='feedback' className="textarea textarea-bordered w-1/2 h-72" placeholder="Give your feedback" required></textarea>

                <button type="submit" className="btn w-2/6">add your Review
                </button>
            </form>
        </div>
    );
};

export default AddReview;