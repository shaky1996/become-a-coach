import React from 'react';
import { categoryList } from '../constants/data';
import SVG from 'react-inlinesvg';

const Categories = () => {
    return (
        <div className='relative'>
            <div className='lg:max-w-screen-xl max-w-xl px-4 xl:px-0 mx-auto py-8   lg:py-12'>
                <div className='w-full absolute bg-lime-200 left-0 h-full -z-10 top-0'>

                </div>
                <div className='flex flex-col items-center justify-center md:items-start w-full '>
                    <h2 className='mb-5 font-sans text-4xl font-bold tracking-tight text-black sm:text-5xl  sm:leading-none text-center md:text-start'>
                        Find Your Perfect Fit
                    </h2>
                    <p className='text-xl text-center md:text-start text-black'>
                        Explore coaches by categories
                    </p>
                    <div className='mt-10 flex flex-wrap gap-5 lg:gap-14 items-center justify-center  p-2 lg:p-5 rounded-xl shadow-xl bg-white'>
                        {categoryList.map((item, index) => {
                            return (
                                <button
                                    key={index}
                                    className='flex flex-col items-center justify-center lg:p-4 gap-3 lg:gap-5 hover:fill-lime-500 hover:text-lime-500 hover:scale-110 transition duration-300 ease-in-out'
                                >
                                    <SVG
                                        src={item.image}
                                        className='w-8 lg:w-16 h-auto '
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
