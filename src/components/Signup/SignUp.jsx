import React, { useContext, useState } from 'react';
import img from '../../assets/images/SignUpPage.jpg'
import { FcUnlock } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
const SignUp = () => {
    const { createUser } = useContext(AuthContext);

    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
        confirm: '',
    })

    const [errors, setErrors] = useState({
        emailError: '',
        passwordErrors: '',
        confirmErrors: '',
        submitError: ''
    })
    const handleSignUpForm = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        createUser(userInfo.email, userInfo.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Sign Up success')
            })
            .catch(e => {
                console.log(e.code);
                if (e.code === 'auth/email-already-in-use') {
                    setErrors({ ...errors, submitError: 'Your Email already user' })
                }
            })
    }
    const handleEmail = e => {
        const email = e.target.value;

        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            setErrors({ ...errors, emailError: 'Invalid email' });
            setUserInfo({ userInfo, email: '' })
        } else {
            setErrors({ ...errors, emailError: '' })
            setUserInfo({ ...userInfo, email: email })
        }

    }

    const handlePassword = e => {
        const password = e.target.value;
        if (password.length < 6) {
            setUserInfo({ ...userInfo, password: '' })
            setErrors({ ...errors, passwordErrors: 'password must be 6 characters' })
        } else {
            setUserInfo({ ...userInfo, password: password })
            setErrors({ ...errors, passwordErrors: '' })
        }
    }


    const handleConfirm = e => {
        const confirm = e.target.value;
        if (confirm !== userInfo.password) {
            setUserInfo({ ...userInfo, confirm: '' })
            setErrors({ ...errors, confirmErrors: 'Your password not match' })
        } else {
            setUserInfo({ ...userInfo, confirm: confirm })
            setErrors({ ...errors, confirmErrors: '' })
        }
    }

    console.log(userInfo);
    console.log(errors);


    return (
        <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div>
                <img src={img} alt="" className='bg-center' />
            </div>
            <div>
                <div className="hero bg-base-200 h-full">
                    <div className="mb-10">
                        <div className="flex justify-evenly items-center">
                            <h1 className="text-5xl font-bold">Sign Up</h1>
                            <p><FcUnlock className='w-20 h-20'></FcUnlock></p>
                        </div>
                        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100 mt-10">
                            <form onSubmit={handleSignUpForm} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input onChange={handleEmail} name="email" type="email" placeholder="email" className="input input-bordered" required />
                                    {
                                        errors.emailError && <small className='text-red-800 font-semibold'>{errors.emailError}</small>
                                    }
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input onChange={handlePassword} type="password" name="password" placeholder="password" className="input input-bordered" required />
                                    {
                                        errors.passwordErrors && <small className='text-red-800 font-semibold'>{errors.passwordErrors}</small>
                                    }
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input onChange={handleConfirm} type="password" name="confirm" placeholder="Confirm password" className="input input-bordered" required />
                                    {
                                        errors.confirmErrors && <small className='text-red-800 font-semibold'>{errors.confirmErrors}</small>
                                    }
                                </div>
                                <div className="form-control mt-6">
                                    <button type='submit' className="btn btn-primary">Sign Up</button>
                                    {
                                        errors.submitError && <small className='text-red-800 font-semibold'>{errors.submitError}</small>
                                    }
                                </div>
                            </form>

                            <small className='font-bold text-center'>Already have an account?<Link to='/login' className="ml-2 btn btn-link">Login</Link></small>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;