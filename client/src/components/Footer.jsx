import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineFitnessCenter } from 'react-icons/md';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className='relative'>
            <div className='lg:max-w-screen-xl max-w-xl px-4 xl:px-0 mx-auto py-5  object-cover  border-t border-gray-500'>
                <div className='w-full h-full  absolute left-0 -z-10 top-0 bg-black '></div>

                <div className='flex flex-col md:flex-row gap-5 mx-auto justify-between items-center px-5 lg:px-0 '>
                    {/* Primary menu and logo */}
                    <div className='flex items-center gap-16 '>
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
                    <div className='flex flex-row gap-5 text-gray-500  text-sm '>
                        <Link
                            to='/'
                            className='hover:text-gray-300'
                        >
                            About
                        </Link>
                        <Link
                            to='/'
                            className='hover:text-gray-300'
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            to='/'
                            className='hover:text-gray-300'
                        >
                            FAQ
                        </Link>
                    </div>
                </div>
                <div>
                    
                </div>
                <div className='mt-5 flex flex-col items-center justify-center text-gray-500 text-xs gap-2'>
                    <p className=''>
                        &copy;{currentYear} CoachBooker. All Rights Reserved.
                    </p>
                    <p>
                        {' '}
                        Developed by{' '}
                        <a
                            href='https://shakportfolio.web.app/'
                            target='_blank'
                            className='underline text-lime-600 hover:text-lime-300'
                        >
                            Shak Yuldashev
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
