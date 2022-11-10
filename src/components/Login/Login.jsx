import React, { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import LoginImg from '../../assets/logo/login.png'
import { AuthContext } from '../../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Login = () => {
    const { login, user, signInWithGoogle } = useContext(AuthContext)
    console.log(user);
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
    })

    const [errors, setErrors] = useState({
        emailError: '',
        passwordErrors: '',
        submitErrors: ''
    })

    // Handle Login Form
    const handleLoginForm = e => {
        e.preventDefault();
        const form = e.target;

        // Login with email and password
        login(userInfo.email, userInfo.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Sign Up successfully');
                form.email.value = '';
                form.password.value = '';
            })
            .catch(e => {
                if (e.message) {
                    setErrors({ ...errors, submitErrors: 'You have no account register first' })
                }
            })
    }

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Sign Up successfully');
            })
            .catch(e => {
                setErrors({ errors, submitErrors: e.message })
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

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold mb-10">Login</h1>
                        <img src={LoginImg} className="w-60 lg:w-80" alt="" srcset="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLoginForm} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input onChange={handleEmail} type="email" placeholder="email" name='email' className="input input-bordered" required />
                                {
                                    errors.emailError && <small className='text-red-800 font-semibold'>{errors.emailError}</small>
                                }
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input onChange={handlePassword} type="password" placeholder="password" name='password' className="input input-bordered" required />
                                {
                                    errors.passwordErrors && <small className='text-red-800 font-semibold'>{errors.passwordErrors}</small>
                                }
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary text-white">Login</button>
                                {
                                    errors.submitErrors && <small className='text-red-800 font-semibold'>{errors.submitErrors}</small>
                                }
                            </div>
                        </form>
                        <div className='w-full text-center mb-10'>
                            <button onClick={handleGoogleLogin} type='submit' className="btn btn-success w-4/5"><FcGoogle className='w-16 h-10'></FcGoogle>Login With Google</button>
                        </div>
                        <small className='font-bold text-center'>I have any account?<Link to='/register' className="ml-2 btn btn-xs btn-link bg-red-500 hover:bg-black hover:text-red-700 text-white mb-5">Sign Up</Link></small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;