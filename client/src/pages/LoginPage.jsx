import { useState } from 'react';
import { setLogin } from '../redux/state';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { MdOutlineFitnessCenter } from 'react-icons/md';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3001/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            // Get data after fetching
            const loggedIn = await response.json();

            if (loggedIn) {
                dispatch(
                    setLogin({
                        user: loggedIn.user,
                        token: loggedIn.token
                    })
                );
                navigate('/');
            }
        } catch (err) {
            console.log('Login failed', err.message);
        }
    };

    return (
        <div className='h-[100dvh] flex items-center justify-center bg-black'>
 
            <div className=' bg-black p-5 border rounded-xl w-80'>
                <div className='flex flex-col items-center justify-center gap-5 mb-5 border-b py-2'>
                    <MdOutlineFitnessCenter className='h-14 w-14 bg-lime-300 rounded-xl ' />
                    <p className='text-lg text-white'>
                        Log In into your account
                    </p>
                    
                </div>
                
                <form onSubmit={handleSubmit}>
                    <div className='grid gap-6 text-gray-200 '>
                        <div>
                            <label
                                htmlFor='email'
                                className='block mb-1'
                            >
                                Your email
                            </label>
                            <input
                                type='email'
                                placeholder='Email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className='bg-gray-700 border outline-none border-gray-500  text-sm rounded-lg focus:outline-lime-300  block w-full p-2.5 text-white'
                            />
                        </div>
                        <div>
                            <label
                                htmlFor='password'
                                className='block mb-1'
                            >
                                Your password
                            </label>
                            <input
                                type='password'
                                placeholder='Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className='bg-gray-700 border outline-none border-gray-500  text-sm rounded-lg focus:outline-lime-300  block w-full p-2.5 text-white'
                            />
                        </div>
                        <button
                            type='submit'
                            className='text-white mt-5 bg-blue-600 hover:bg-blue-800 rounded-lg text-sm  px-5 py-2.5 text-center '
                        >
                            Log In
                        </button>
                        <div className='flex gap-1 items-center justify-center text-gray-400'>
                            <span>No account? </span>{' '}
                            <a
                                href='/register'
                                className='underline-offset-2 underline hover:text-lime-300'
                            >
                                Sign Up here
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
