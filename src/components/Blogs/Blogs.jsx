import React from 'react';
import UseTitle from '../UseTitle/UseTitle';

const Blogs = () => {
    UseTitle('blog')
    return (
        <div>

            <h1 className='text-center text-5xl mt-20 font-bold'>Blogs</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 my-32 p-10'>
                <div className='font-bold'>
                    <h1 className='text-3xl'>
                        Difference between SQL and NoSQL
                    </h1>
                    <p>
                        When it comes to choosing a database the biggest decisions is picking a relational (SQL) or non-relational (NoSQL) data structure. While both the databases are viable options still there are certain key differences between the two that users must keep in mind when making a decision.
                        <p>
                            There are five practical differences between SQL and NoSQL:
                        </p>
                        <li>Language</li>
                        <li>Scalability</li>
                        <li>Structure</li>
                        <li>Support and communities</li>
                    </p>
                </div>
                <div className='font-bold'>
                    <h1 className='text-3xl'>
                        What is JWT? and how does it work?

                    </h1>
                    <p>
                        JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server.
                    </p>
                    <p>
                        JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted
                    </p>

                </div>
                <div className='font-bold'>
                    <h1 className='text-3xl'>
                        What is the difference between javascript and NodeJS?
                    </h1>
                    <div className='my-5'>
                        <h4 className='text-xl'>JavaScript</h4>
                        <li>Javascript is a programming language that is used for writing scripts on the website.</li>
                        <li>Javascript can only be run in the browsers.</li>
                        <li>It is basically used on the client-side.</li>
                        <li>Javascript is capable enough to add HTML and play with the DOM.</li>
                    </div>
                    <div className='my-5'>
                        <h4 className='text-3xl'>Node.js</h4>
                        <li>NodeJS is a Javascript runtime environment.</li>
                        <li>We can run Javascript outside the browser with the help of NodeJS.</li>
                        <li>It is mostly used on the server-side.</li>
                        <li>Nodejs does not have capability to add HTML tags.</li>
                        <li>V8 is the Javascript engine inside of node.js that parses and runs Javascript. </li>
                    </div>
                </div>
                <div className='font-bold'>
                    <h1 className='text-3xl'>
                        How does NodeJS handle multiple requests at the same time?
                    </h1>
                    <p>
                        NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;