import React from 'react';
import Accordion from './Accordion';
import { stepsBg } from '../assets';

const StepByStep = () => {
    return (
        <div className='relative'>
            <div className='lg:max-w-screen-xl max-w-xl px-4 xl:px-0 mx-auto py-8  object-cover lg:py-12'>
                <div className='w-full h-full  absolute left-0 -z-10 top-0 bg-white '>
                    <img
                        src={stepsBg}
                        className='w-full h-full object-cover'
                        alt='Man working out'
                    />
                </div>
                <div className='flex flex-col items-center justify-center md:items-start w-full '>
                    <h2 className='mb-5 font-sans text-4xl font-bold tracking-tight text-lime-300 sm:text-5xl  sm:leading-none text-center md:text-start'>
                        Fitness Made Simple
                    </h2>
                    <p className='text-xl text-center md:text-start text-white'>
                        3 easy steps to get you started
                    </p>
                    <div className='mt-10 mb-10'>
       
                        <Accordion />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StepByStep;
