import React, { useState } from 'react';
import { steps } from '../constants/data';

const Accordion = () => {
    const [openStep, setOpenStep] = useState(0);

    const handleClick = (index) => {
        setOpenStep((prevStep) => (prevStep === index ? prevStep : index));
    };

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 text-gray-600 items-center justify-center gap-5'>
            <div className='flex flex-col gap-8 '>
                {steps.map((step, index) => (
                    <div
                        key={index}
                        onClick={() => handleClick(index)}
                        className={`border-b py-2 ${
                            openStep === index
                                ? 'text-lime-300 border-white'
                                : 'hover:text-gray-400 border-gray-700 '
                        } `}
                    >
                        <button className='text-lg lg:text-2xl'>
                            {index + 1}. {step.label}
                        </button>

                        {openStep === index && (
                            <div className=' py-2 transition-all duration-500 text-white'>
                                <p className='text-sm lg:text-lg '>
                                    {step.description}
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div>
                {openStep !== null && (
                    <img
                        src={steps[openStep].image}
                        alt={steps[openStep].label}
                        className='max-w-full  rounded-xl'
                    />
                )}
            </div>
        </div>
    );
};

export default Accordion;
