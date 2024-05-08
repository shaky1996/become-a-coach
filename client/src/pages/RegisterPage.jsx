
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { MdOutlineFitnessCenter, MdOutlineFileUpload } from 'react-icons/md';



const RegisterPage = () => {

     const [formData, setFormData] = useState({
         fullName: '',
         email: '',
         password: '',
         confirmPassword: '',
         profileImage: null
     });

     const handleChange = (e) => {
         const { name, value, files } = e.target;
         setFormData({
             ...formData,
             [name]: value,
             [name]: name === 'profileImage' ? files[0] : value
         });
     };

     const [passwordMatch, setPasswordMatch] = useState(true);

     useEffect(() => {
         setPasswordMatch(
             formData.password === formData.confirmPassword ||
                 formData.confirmPassword === ''
         );
     });

     const navigate = useNavigate();
     const handleSubmit = async (e) => {
         e.preventDefault();

         try {
             const register_form = new FormData();

             for (var key in formData) {
                 register_form.append(key, formData[key]); //look through form data and every key chain pair will be appeneded
             }

             const response = await fetch(
                 'http://localhost:3001/auth/register',
                 {
                     method: 'POST',
                     body: register_form
                 }
             );

             if (response.ok) {
                 navigate('/login');
             }
         } catch (err) {
             console.log('Registration failed', err.message);
         }
     };


  return (
      <div className='bg-black'>
          <div className='h-screen flex items-center justify-center bg-black p-5'>
              <div className=' bg-black p-5 md:border rounded-xl w-80'>
                  <div className='flex flex-col items-center justify-center gap-5 mb-5 border-b py-2 '>
                      <MdOutlineFitnessCenter className='h-14 w-14 bg-lime-300 rounded-xl hidden md:flex' />
                      <p className='text-md md:text-lg text-white'>
                          Create account
                      </p>
                  </div>

                  <form onSubmit={handleSubmit}>
                      <div className='grid  gap-6 text-gray-200 text-sm'>
                          <div>
                              <label
                                  htmlFor='firstName'
                                  className='block mb-1'
                              >
                                  Full Name
                              </label>
                              <input
                                  name='fullName'
                                  placeholder='Full Name'
                                  value={formData.fullName}
                                  onChange={handleChange}
                                  required
                                  className='bg-gray-700 border outline-none border-gray-500  text-sm rounded-lg focus:outline-lime-300  block w-full p-2.5 text-white'
                              />
                          </div>

                          <div>
                              <label
                                  htmlFor='firstName'
                                  className='block mb-1'
                              >
                                  Email
                              </label>
                              <input
                                  name='email'
                                  placeholder='Email'
                                  type='email'
                                  value={formData.email}
                                  onChange={handleChange}
                                  required
                                  className='bg-gray-700 border outline-none border-gray-500  text-sm rounded-lg focus:outline-lime-300  block w-full p-2.5 text-white'
                              />
                          </div>
                          <div>
                              <label
                                  htmlFor='password'
                                  className='block mb-1'
                              >
                                  Password
                              </label>
                              <input
                                  name='password'
                                  placeholder='Password'
                                  type='password'
                                  value={formData.password}
                                  onChange={handleChange}
                                  required
                                  className='bg-gray-700 border outline-none border-gray-500  text-sm rounded-lg focus:outline-lime-300  block w-full p-2.5 text-white'
                              />
                          </div>
                          <div>
                              <label
                                  htmlFor='firstName'
                                  className='block mb-1'
                              >
                                  Confirm Password
                              </label>
                              <input
                                  name='confirmPassword'
                                  placeholder='Confirm Password'
                                  value={formData.confirmPassword}
                                  onChange={handleChange}
                                  required
                                  className='bg-gray-700 border outline-none border-gray-500  text-sm rounded-lg focus:outline-lime-300  block w-full p-2.5 text-white'
                              />
                              {!passwordMatch && (
                                  <p className='text-red-600 mt-1 text-center'>
                                      Password doesn't match
                                  </p>
                              )}
                          </div>

                          <div className='flex flex-col items-center justify-center '>
                              <input
                                  id='image'
                                  type='file'
                                  name='profileImage'
                                  accept='image/*'
                                  onChange={handleChange}
                                  style={{ display: 'none' }}
                              />
                              <label
                                  htmlFor='image'
                                  className='hover:text-lime-300 cursor-pointer'
                              >
                                  <MdOutlineFileUpload className='w-full h-8 mb-1 ' />
                                  <p>Upload your photo</p>
                              </label>
                              {formData.profileImage && (
                                  <img
                                      src={URL.createObjectURL(
                                          formData.profileImage
                                      )}
                                      alt='profile photo'
                                      style={{ maxWidth: '80px' }}
                                  />
                              )}
                          </div>
                          <button
                              type='submit'
                              className='text-white mt-5 bg-blue-600 hover:bg-blue-800 rounded-lg text-sm  px-5 py-2.5 text-center '
                              disabled={!passwordMatch}
                          >
                              Register
                          </button>
                          <div className='flex gap-1 items-center justify-center text-gray-400'>
                              <span>Have account? </span>{' '}
                              <a
                                  href='/login'
                                  className='underline-offset-2 underline hover:text-lime-300'
                              >
                                  Log In here
                              </a>
                          </div>
                      </div>
                  </form>
              </div>
          </div>
      </div>
  );
}

export default RegisterPage