import React, { useState } from 'react';
import { heroPic } from '../assets';

const HeroSection = () => {
    const [search, setSearch] = useState('');

    return (
        <div>
            <div className='relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 bg-black'>
                <div className='inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0'>
                    <svg
                        className='absolute left-0 hidden h-full text-black transform -translate-x-1/2 lg:block z-10'
                        viewBox='0 0 100 100'
                        fill='currentColor'
                        preserveAspectRatio='none slice'
                    >
                        <path d='M50 0H100L50 100H0L50 0Z' />
                    </svg>
                    <img
                        className='object-cover w-full h-56 rounded shadow-lg hidden lg:flex lg:rounded-none lg:shadow-none md:h-96 lg:h-full grayscale-[100%]'
                        src={heroPic}
                        alt='Coach looking at man pushing tire'
                    />
                </div>
                <div className='relative flex flex-col items-center justify-center md:items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl'>
                    <div className='mb-16 lg:my-40 lg:max-w-lg lg:pr-5'>
                        {/* <p className='inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-lime-300'>
                          Brand new
                      </p> */}
                        <h2 className='mb-5 font-sans text-5xl font-bold tracking-tight text-white sm:text-6xl sm:leading-none'>
                            Find.
                            <br />
                            Book.
                            <br />
                            <span className='inline-block text-lime-300'>
                                Workout.
                            </span>
                        </h2>
                        <p className='pr-5 mb-5 text-base text-gray-300 md:text-lg'>
                            Connecting Coaches and Clients:
                            <br />
                            platform for booking personal coaching services
                        </p>
                        <div className='flex items-center'>
                            <input
                                type='text'
                                placeholder='Search...'
                                className='bg-gray-700 h-10 px-5 pr-16 rounded-lg text-white outline-none focus:outline-lime-300'
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
