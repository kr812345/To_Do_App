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
            label: 'E-mail', 
            type: 'text'
        },
        {
            label: 'Password',
            type: 'password'
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
                    <div className='w-[350px] flex flex-col gap-10 h-full px-4 items-center mt-1'>
                    {
                            inputs.map((input) => (
                                <div key={input.index} className='relative w-full'>
                            <div className='absolute -top-3 left-1 text-center bg-[#d3d3d3] w-fit px-1 h-fit overflow-hidden'>
                                <label className='text-[.9rem] text-[#3b3b3b]'>{input.label}</label>
                            </div>
                            <input className='w-full h-[44px] rounded-md bg-transparent border border-[#39393a56] px-2' id={input.label} name={input.label} type={input.type} />
                        </div>
                        ))}
                        <Link href={'/home'}>
                        <input className='h-fit w-fit rounded-md px-5 py-2 bg-purple-700 hover:bg-purple-600 transition' type="button" value="Login" />
                        </Link>
                    </div>
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
