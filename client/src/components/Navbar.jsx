import React, { useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import { MdOutlineFitnessCenter } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className='bg-slate-900'>
            <nav>
                <div className='max-w-screen-xl mx-auto '>
                    <div className='flex mx-auto justify-between px-5 '>
                        {/* Primary menu and logo */}
                        <div className='flex items-center gap-16 my-5'>
                            {/* logo */}
                            <div className='bg-lime-300 rounded-xl'>
                                <a
                                    href='/'
                                    className='flex gap-1 font-bold  items-center '
                                >
                                    <MdOutlineFitnessCenter className='h-14 w-14 ' />
                                </a>
                            </div>
                            {/* primary */}
                        </div>
                        {/* secondary */}
                        <div className='flex gap-6'>
                            {/* Mobile navigation toggle */}
                            <div className='flex items-center gap-10'>
                                <div>
                                    <button className='rounded-full border-solid border-2 text-gray-200 border-lime-300 py-2 px-4 hover:bg-lime-300 hover:text-black'>
                                        Become A Coach
                                    </button>
                                </div>
                            </div>
                            <div className='flex items-center justify-center text-lime-300 relative'>
                                <button
                                    onClick={() => setToggleMenu(!toggleMenu)}
                                >
                                    {!toggleMenu ? (
                                        <IoMenu className='w-10 h-10' />
                                    ) : (
                                        <IoMdClose className='w-10 h-10' />
                                    )}
                                </button>
                     
                                    <div
                                        className={`absolute w-max top-20 shadow-md shadow-black right-0 text-white rounded-xl bg-slate-700 flex flex-col duration-700 p-5 ${toggleMenu ? 'block' : 'hidden'}`}
                                    >
                                        <div className=''>
                                            <div className='flex flex-col gap-6 tracking-wider'>
                                                <a
                                                    className='hover:text-blue-600 '
                                                    href='#'
                                                >
                                                    Login
                                                </a>
                                                <a
                                                    className='block'
                                                    href='#'
                                                >
                                                    Sign Up
                                                </a>
                                                <hr />
                                                <a
                                                    className='text-lime-300'
                                                    href='#'
                                                >
                                                    Become A Coach
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
                {/* mobile navigation */}
            </nav>
        </div>
    );
};

export default Navbar;
