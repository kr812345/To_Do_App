'use client'

import {React,useState} from 'react';
import Link from 'next/link';
import { Poppins } from 'next/font/google';
import axios from 'axios';
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { MdOutlineVisibility } from "react-icons/md";
import { useContext } from 'react';
import { AuthContext } from '@/Context/authContext';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '@/hooks/useLogin';



const poppins = Poppins({
  subsets: ['latin'],
  weight: [ '500'],
  display: 'swap',
});

const Login = () => {
    const { login } = useLogin();

    const [Email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword,setshowPassword] = useState(false);

    const handleShowPassword = (e) => {
        e.preventDefault();
        setshowPassword(!showPassword);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const success = await login(Email, password);
            if (success) {
                window.location.href = '/';
            } else {
                alert('Try again to Login.');
            }
        } catch (error) {
            console.log("Login error:", error.response?.data || error.message);
        }
    };
    
    return (
        <>
        <div className={`${poppins.className} flex flex-col justify-evenly items-center mx-auto`}>
            <div className='absolute'>
                <h1>LOGO</h1>
            </div>
            <div className='h-[447px] w-[392px] bg-[#D3D3D3] flex flex-col items-center rounded-2xl drop-shadow-lg'>
                    <h1 className='my-12 text-2xl'>Login</h1>
                    <form className='w-[350px] flex flex-col gap-10 h-full px-4 items-center mt-1' onSubmit={handleSubmit}>
                        <div className='relative w-full'>
                            <div className='absolute -top-3 left-1 text-center bg-[#d3d3d3] w-fit px-1 h-fit overflow-hidden'>
                                <label className='text-[.9rem] text-[#3b3b3b]'>E-mail</label>
                            </div>
                            <input 
                                className='w-full h-[44px] rounded-md bg-transparent border border-[#39393a56] px-2'
                                id='E-mail'
                                name='E-mail'
                                type='text'
                                value={Email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='relative w-full'>
                            <div className='absolute -top-3 left-1 text-center bg-[#d3d3d3] w-fit px-1 h-fit overflow-hidden'>
                                <label className='text-[.9rem] text-[#3b3b3b]'>Password</label>
                            </div>
                            <input 
                                className='w-full h-[44px] rounded-md bg-transparent border border-[#39393a56] px-2'
                                id='Password'
                                name='Password' 
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button className='absolute text-2xl text-gray-800 right-2 top-[25%]' onClick={handleShowPassword}>{showPassword === true ? <AiOutlineEyeInvisible /> : <MdOutlineVisibility />}</button>
                        </div>
                        <input className='h-fit w-fit rounded-md px-5 py-2 bg-purple-700 hover:bg-purple-600 transition' type="submit" value="Login" />
                    </form>
                    <div className='flex gap-4 items-center justify-center mb-8'>
                        <h2>New To Task ?</h2>
                        <Link href='/register'>
                        <input className='h-fit w-fit rounded-md px-5 py-2 bg-purple-700 hover:bg-purple-600 transition' type="button" value="Register" />
                        </Link>
                    </div>
            </div>
        </div>
        </>
    );
}

export default Login;
