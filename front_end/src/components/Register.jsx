import React from 'react';
import Link from 'next/link';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: [ '500'],
  display: 'swap',
});

const Login = () => {

    const inputs = [
        {
            label: 'Name',
            type: 'text'
        },
        {
            label: 'E-mail', 
            type: 'text'
        },
        {
            label: 'Password',
            type: 'password'
        },
        {
            label: 'Register',
            type: 'submit'
        }
    ];

    return (
        <>
        <div className={`${poppins.className} flex flex-col justify-evenly items-center mx-auto`}>
            <div className='absolute'>
                <h1>LOGO</h1>
            </div>
            <div className='h-[447px] w-[392px] bg-[#D3D3D3] flex flex-col items-center rounded-2xl drop-shadow-lg'>
                    <h1 className='my-12 text-2xl'>Login</h1>
                    <form className='w-[350px] flex flex-col gap-4 h-full px-4 items-center mt-1'>
                        {
                            inputs.slice(0,-1).map((input) => (
                                <div key={input.index} className='relative w-full'>
                            <div className='absolute -top-3 left-1 text-center bg-[#d3d3d3] w-fit px-1 h-fit overflow-hidden'>
                                <label>{input.label}</label>
                            </div>
                            <input className='w-full h-[44px] rounded-md bg-transparent border border-[#39393a56] px-2' id={input.label} name={input.label} type={input.type} />
                        </div>
                        ))}
                        <input className='h-fit w-fit rounded-md px-5 py-2 bg-purple-700 hover:bg-purple-600 transition' type='submit' value='Register' />
                    </form>
                    <div className='flex gap-4 items-center justify-center mb-6'>
                        <h2>Already On Task ?</h2>
                        <Link href='/'>
                        <input className='h-fit w-fit rounded-md px-5 py-2 bg-purple-700 hover:bg-purple-600 transition' type="button" value="Login" />
                        </Link>
                    </div>
            </div>
        </div>
        </>
    );
}

export default Login;
