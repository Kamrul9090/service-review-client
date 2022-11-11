import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.png'
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { ImHipster } from "react-icons/im";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then()
            .then(e => console.log(e))
    }

    return (
        <div className='shadow-lg'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/reviews'>My Reviews</Link></li>
                            <li><Link to='/addService'>Add service</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <h1 className='text-sm lg:text-xl font-bold font-serif uppercase'><Link to='/'>Hot Foodies</Link></h1>
                    <img className='w-20 h-20' src={logo} alt='' />
                </div>
                <div className="navbar-end">
                    {
                        user?.uid ?
                            <>
                                <button onClick={handleLogout} className="btn btn-sm rounded-md btn-ghost">
                                    <Link to='/login'>log out</Link>
                                </button>
                                <span>
                                    {user?.photoURL ?
                                        <img className='w-10 rounded-full ml-2' src={user?.photoURL} alt="" />
                                        :
                                        <ImHipster className='w-10 h-8'></ImHipster>
                                    }
                                </span>

                            </>
                            :
                            <>
                                <button className="btn btn-sm rounded-md btn-ghost">
                                    <Link to='/login'>Login</Link>
                                </button>
                                <button className="btn btn-sm rounded-md btn-ghost">
                                    <Link to="register">Sign Up</Link>
                                </button>
                            </>
                    }

                </div>
            </div>
        </div>
    );
};

export default Header;