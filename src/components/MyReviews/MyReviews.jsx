import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewTable from './ReviewTable';

const MyReviews = () => {

    const [allReviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/reviewAdd`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])


    const handleDeleteReview = (id) => {
        fetch(`http://localhost:5000/reviewAdd/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-1/2 container mx-auto">
                    <h1 className='text-4xl font-bold font-serif text-center my-10'>All Reviews</h1>
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