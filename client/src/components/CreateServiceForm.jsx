import React, { useState } from 'react';
import SVG from 'react-inlinesvg';
import { categoryList } from '../constants/data';
import { states } from '../constants/data';

import { IoIosPerson, IoIosPeople } from 'react-icons/io';
import { BsCurrencyDollar } from 'react-icons/bs';



const CreateServiceForm = () => {
    const [selectedCategory, setSelectedCategory] = useState('Weight Lifting');
    const [selectedSession, setSelectedSession] = useState('individual');

    const handleRadioChange = (session) => {
        setSelectedSession(session);
    };

    return (
        <div>
            <form className='text-white'>
                <div>
                    <h2 className='text-lg md:text-2xl'>
                        1. Tell clients about your service (pick one)
                    </h2>

                    <div className='flex flex-wrap gap-5 lg:gap-8 items-center justify-center p-5 rounded-xl'>
                        {categoryList.map((item, index) => {
                            return (
                                <button
                                    key={index}
                                    className={`flex flex-col items-center justify-center lg:p-4 gap-3 lg:gap-2 hover:text-lime-300 hover:fill-lime-300  hover:scale-110 transition duration-300 ease-in-out  ${
                                        item.label === selectedCategory
                                            ? 'fill-lime-300 scale-110 text-lime-300 cursor-default'
                                            : 'fill-gray-400 text-gray-400'
                                    }`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setSelectedCategory(item.label);
                                    }}
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
                    <hr />
                    <div>
                        <h2 className='text-lg md:text-2xl mt-5'>
                            2. What type of coaching session do you provide?
                        </h2>
                        <div className='mt-5 flex flex-row gap-5 items-center justify-center py-5 '>
                            <div
                                className={`flex flex-col items-center justify-center border  p-5 gap-2 rounded-xl w-32 md:w-60 text-center  ${
                                    selectedSession === 'individual'
                                        ? 'border-lime-300 text-lime-300 cursor-default '
                                        : ' border-gray-400 text-gray-400 cursor-pointer hover:border-lime-300'
                                }`}
                                onClick={() => handleRadioChange('individual')}
                            >
                                <IoIosPerson className='w-12 h-auto ' />
                                <p>Indivdual Session</p>
                            </div>
                            <div
                                className={`flex flex-col items-center justify-center border  p-5 gap-2 rounded-xl w-32 md:w-60 text-center ${
                                    selectedSession === 'group'
                                        ? 'border-lime-300 fill-lime-300 text-lime-300 cursor-default'
                                        : 'border-gray-400 text-gray-400 cursor-pointer hover:border-lime-300 '
                                }`}
                                onClick={() => handleRadioChange('group')}
                            >
                                <IoIosPeople className='w-12 h-auto' />
                                <p>Group Session</p>
                            </div>
                        </div>
                    </div>

                    <hr />
                    <div>
                        <h2 className='text-lg md:text-2xl mt-5'>
                            3. Where do you provide your services?
                        </h2>
                        <div className='mt-5 flex flex-row w-full gap-5  py-5 text-gray-400'>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor='city'>City</label>
                                <input
                                    type='text'
                                    placeholder='City'
                                    name='city'
                                    id='city'
                                    required
                                    className='lg:w-72 p-2  text-sm text-white  rounded-lg bg-gray-700 outline-none focus:outline-lime-300'
                                />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor='state'>State</label>
                                <select
                                    id='state'
                                    name='state'
                                    className='p-2  text-sm text-white  rounded-lg bg-gray-700 outline-none focus:outline-lime-300'
                                    required
                                >
                                    <option value=''></option>
                                    {states.map((state, index) => (
                                        <option
                                            key={index}
                                            value={state.abbr}
                                        >
                                            {state.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <h2 className='text-lg md:text-2xl mt-5'>
                            4. Describe your services
                        </h2>
                        <div className='mt-5 flex flex-col  w-full gap-5  py-5 text-gray-400'>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor='title'>Title</label>
                                <input
                                    type='text'
                                    placeholder='Title'
                                    name='title'
                                    id='title'
                                    required
                                    className='lg:w-72 p-2  text-sm text-white  rounded-lg bg-gray-700 outline-none focus:outline-lime-300'
                                />
                            </div>
                            <div className='flex flex-col lg:w-1/2 gap-1'>
                                <label htmlFor='description'>Description</label>
                                <textarea
                                    placeholder='Describe your services...'
                                    name='description'
                                    id='description'
                                    required
                                    className='p-2  text-sm text-white  rounded-lg bg-gray-700 outline-none focus:outline-lime-300'
                                    rows={6}
                                />
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <h2 className='text-lg md:text-2xl mt-5'>
                            5. Set your price
                        </h2>
                        <div className='mt-5 flex flex-row items-center w-full gap-5  py-5 text-white'>
                            <div className='relative'>
                                <div className='absolute text-lime-300  rounded-l inset-y-0 start-0 flex items-center ps-1 pointer-events-none text-2xl'>
                                    <BsCurrencyDollar />
                                </div>
                                <input
                                    type='number'
                                    className='p-2 ps-10 w-32   text-lg text-white  rounded-lg bg-gray-700 outline-none focus:outline-lime-300'
                                    required
                                />
                                <span className='text-lg ml-2'>USD</span>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CreateServiceForm;
