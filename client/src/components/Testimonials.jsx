import React from 'react';
import { fakePeople } from '../constants/data';

const Testimonials = () => {
    return (
        <div className='relative'>
            <div className='lg:max-w-screen-xl max-w-xl px-4 xl:px-0 mx-auto py-8  object-cover lg:py-12'>
                <div className='w-full h-full  absolute left-0 -z-10 top-0 bg-black '></div>
                <div className='flex flex-col items-center justify-center md:items-start w-full '>
                    <h2 className='mb-5 font-sans text-4xl font-bold tracking-tight text-lime-300 sm:text-5xl  sm:leading-none text-center md:text-start'>
                        Transforming Lives
                    </h2>
                    <p className='text-xl text-center md:text-start text-white'>
                        See how our platform has empowered users to achieve
                        their fitness goals
                    </p>
                    <div className='mt-10 mb-10'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-white'>
                            {fakePeople.map((person, index) => (
                                <div
                                    className='flex flex-col  gap-4 border border-gray-500 rounded-xl p-5 hover:border-lime-300'
                                    key={index}
                                >
                                    <div className='flex flex-row items-center gap-5'>
                                        <img
                                            src={person.image}
                                            className=' w-14 rounded-[50%]'
                                            alt={`Picture of fake ${person.name}`}
                                        />

                                        <h1>{person.name}</h1>
                                    </div>
                                    <div>
                                        <p className='text-sm text-gray-300'>
                                            <span className='text-xl text-gray-500 italic'>
                                                "{' '}
                                            </span>
                                            {person.review}
                                            <span className='text-xl text-gray-500 italic'>
                                                
                                                "
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
