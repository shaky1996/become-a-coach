import React from 'react';
import { categoryList } from '../constants/data';
import SVG from 'react-inlinesvg';
import { categoryBg } from '../assets';

const Categories = () => {
    return (
        <div className='relative'>
            <div className='lg:max-w-screen-xl max-w-xl px-4 xl:px-0 mx-auto py-8  object-cover lg:py-12'>
                <div className='w-full h-full  absolute left-0 -z-10 top-0 bg-black flex items-end justify-end'>
                    <img
                        src={categoryBg}
                        className=' h-full object-contain blur-sm md:blur-0'
                        alt='Man working out'
                    />
                </div>
                <div className='flex flex-col items-center justify-center md:items-start w-full '>
                    <h2 className='mb-5 font-sans text-4xl font-bold tracking-tight text-lime-300 sm:text-5xl  sm:leading-none text-center md:text-start'>
                        Find Your Perfect Fit
                    </h2>
                    <p className='text-xl text-center md:text-start text-white'>
                        Explore coaches by categories
                    </p>
                    <div className='mt-10 flex flex-wrap gap-5 lg:gap-8 items-center justify-center  p-2 lg:p-5 rounded-xl bg-white'>
                        {categoryList.map((item, index) => {
                            return (
                                <button
                                    key={index}
                                    className='flex flex-col items-center justify-center lg:p-4 gap-3 lg:gap-2 hover:fill-lime-500  hover:scale-110 transition duration-300 ease-in-out'
                                >
                                    <SVG
                                        src={item.image}
                                        className='w-8 lg:w-14 h-auto '
                                        title={item.label}
                                    />
                                    <p className='text-xs lg:text-lg'>
                                        {item.label}
                                    </p>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;
