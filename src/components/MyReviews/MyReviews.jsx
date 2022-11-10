import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import UseTitle from '../UseTitle/UseTitle';
import ReviewTable from './ReviewTable';

const MyReviews = () => {
    UseTitle('Reviews')
    const [allReviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/reviewAdd`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])


    const handleDeleteReview = (id) => {
        const proceed = window.confirm('Are you sure? you want to delete this review');
        if (proceed) {
            fetch(`http://localhost:5000/reviewAdd/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaningReview = allReviews.filter(singleReview => singleReview._id !== id);
                    setReviews(remaningReview);
                    toast.success('Successfully delete')
                })
        }

    }
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-1/2 container mx-auto">
                    {
                        allReviews.length === 0 ?
                            <h1 className='text-4xl font-bold font-serif text-center my-72'>No reviews were added</h1>
                            :
                            <h1 className='text-4xl font-bold font-serif text-center my-10'>All Reviews</h1>
                    }
                    <tbody>
                        {
                            allReviews.map(review => <ReviewTable review={review} key={review._id} handleDeleteReview={handleDeleteReview}></ReviewTable>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyReviews;