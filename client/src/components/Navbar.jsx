import React, { useState, useRef, useEffect } from 'react';
import { IoMenu } from 'react-icons/io5';
import { MdOutlineFitnessCenter } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';
import { CiUser } from 'react-icons/ci';

import { Link, useNavigate } from 'react-router-dom';
import { setLogout } from '../redux/state';
import { useSelector, useDispatch } from 'react-redux';

const Navbar = () => {
    //Toggle state (open/closed)
    const [toggleMenu, setToggleMenu] = useState(false);

    //To check if user is registered
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    //If clicked outside of toggle menu, toggle menu will close
    const navbarRef = useRef(null);
    const handleClickOutside = (event) => {
        if (navbarRef.current && !navbarRef.current.contains(event.target)) {
            setToggleMenu(false);
        }
    };
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='bg-black sticky top-0 z-40'>
            <nav>
                <div className='max-w-screen-xl mx-auto '>
                    <div className='flex mx-auto justify-between px-5 lg:px-0 '>
                        {/* Primary menu and logo */}
                        <div className='flex items-center gap-16 my-5'>
                            {/* logo */}
                            <Link
                                to='/'
                                className='flex flex-row  justify-center items-center gap-3'
                            >
                                <MdOutlineFitnessCenter className='h-10 w-10 md:h-14 md:w-14 bg-lime-300 rounded-xl ' />
                                <p className='flex text-lime-300 text-xl md:text-2xl'>
                                    CoachBooker
                                </p>
                            </Link>
                        </div>
                        {/* Navigation toggle */}
                        <div className='flex gap-6'>
                            <div className='flex items-center gap-10'>
                                <div>
                                    <button className='rounded-full border-solid border-2 text-gray-200 border-lime-300 py-2 px-4 hover:bg-lime-300 hover:text-black hidden sm:flex'>
                                        {user ? (
                                            <Link to='/create-listing'>
                                                Coach? Click here
                                            </Link>
                                        ) : (
                                            <Link to='/register'>
                                                Coach? Click here
                                            </Link>
                                        )}
                                    </button>
                                </div>
                            </div>
                            <div
                                className='flex items-center justify-center text-lime-300 relative'
                                ref={navbarRef}
                            >
                                <button
                                    className='flex flex-row justify-center items-center '
                                    onClick={() => setToggleMenu(!toggleMenu)}
                                >
                                    {!toggleMenu ? (
                                        <IoMenu className='w-10 h-10' />
                                    ) : (
                                        <IoMdClose className='w-10 h-10' />
                                    )}
                                    {/* Profile picture if user logged in or not (icon) */}
                                    {!user ? (
                                        <CiUser className='w-10 h-10 text-black bg-gray-200 rounded-[50%] p-1' />
                                    ) : (
                                        <img
                                            src={`http://localhost:3001/${user.profileImagePath.replace(
                                                'public',
                                                ''
                                            )}`}
                                            alt='profile photo'
                                            style={{
                                                objectFit: 'cover',
                                                borderRadius: '50%'
                                            }}
                                            className='w-10 h-10'
                                        />
                                    )}
                                </button>

                                {/* Showing different menu depending if user registered or not */}
                                {/* If not registered: */}
                                {toggleMenu && !user && (
                                    <div className='absolute w-max top-20 shadow-md shadow-black right-0 text-white rounded-xl bg-slate-800 flex flex-col  p-5 z-30'>
                                        <div className='flex flex-col gap-6 tracking-wider '>
                                            <Link
                                                to='/login'
                                                className='hover:text-lime-300 '
                                            >
                                                Log In
                                            </Link>

                                            <Link
                                                to='/register'
                                                className='hover:text-lime-300 '
                                            >
                                                Sign Up
                                            </Link>
                                            <hr />
                                            <Link
                                                to='/register'
                                                className='hover:text-lime-300 '
                                            >
                                                Post Your Service
                                            </Link>
                                        </div>
                                    </div>
                                )}

                                {/* If  registered: */}
                                {toggleMenu && user && (
                                    <div className='absolute w-max top-20 shadow-md shadow-black right-0 text-white rounded-xl bg-slate-800 flex flex-col  p-5 z-30'>
                                        <div className='flex flex-col gap-6 tracking-wider'>
                                            <Link
                                                to={`/${user.id}/reservations`}
                                                className='hover:text-lime-300 '
                                            >
                                                Your Reservations
                                            </Link>
                                            <Link
                                                to={`/${user.id}/wishList`}
                                                className='hover:text-lime-300 '
                                            >
                                                Your Wishlist
                                            </Link>

                                            <Link
                                                to={`/${user.id}/postings`}
                                                className='hover:text-lime-300 '
                                            >
                                                Your Postings
                                            </Link>
                                            <hr />
                                            <Link to='/create-listing'>
                                                Post Your Service
                                            </Link>
                                            <hr />
                                            <Link
                                                to='/login'
                                                onClick={() => {
                                                    dispatch(setLogout());
                                                }}
                                            >
                                                Log Out
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
