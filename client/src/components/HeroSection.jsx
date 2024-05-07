import React, { useState } from 'react';
import { heroPic } from '../assets';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

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
                <div className='relative flex flex-col items-center justify-center md:items-start w-full max-w-xl px-4 mx-auto xl:px-0 lg:max-w-screen-xl'>
                    <div className=' lg:my-40 lg:max-w-lg lg:pr-5'>
                        <h2 className='mb-5 font-sans text-5xl font-bold tracking-tight text-white sm:text-7xl  sm:leading-none text-center md:text-start'>
                            Find.
                            <br />
                            Book.
                            <br />
                            <span className='inline-block text-lime-300'>
                                Workout.
                            </span>
                        </h2>

                        <p className='text-gray-500 text-lg text-center md:text-start'>
                            Platform for booking personal coaching services
                        </p>
                        <form class='max-w-md mx-auto mt-5'>
                            <label
                                for='default-search'
                                class='mb-2 text-sm font-medium text-gray-900 sr-only'
                            >
                                Search
                            </label>
                            <div class='relative'>
                                <div class='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                                    <svg
                                        class='w-4 h-4 text-gray-500 dark:text-gray-400'
                                        aria-hidden='true'
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 20 20'
                                    >
                                        <path
                                            stroke='currentColor'
                                            stroke-linecap='round'
                                            stroke-linejoin='round'
                                            stroke-width='2'
                                            d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                                        />
                                    </svg>
                                </div>
                                <input
                                    type='search'
                                    className='block w-full p-4 ps-10 text-sm text-white  rounded-lg bg-gray-700 outline-none focus:outline-lime-300 '
                                    placeholder='Search Categories, Coaches ...'
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                                <button
                                    type='submit'
                                    className='text-white absolute end-2.5 bottom-2.5 bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 '
                                    onClick={() => {
                                        navigate(
                                            `/properties/search/${search}`
                                        );
                                    }}
                                >
                                    Search
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
