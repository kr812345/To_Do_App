import Image from 'next/image';
import React from 'react';
import '@fontsource/merriweather-sans';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: [ '600'],
  display: 'swap',
});

const Meeting = () => {

    const meeting = [
        {
            title: "lorem Efd dfdsfds fdl fsdf sdlfh sdkslsdkj",
            time: "00:00",
            date: "00/00/0000"
        },
        {
            title: "Lorem Ep",
            time: "00:00",
            date: "00/00/0000"
        },
        {
            title: "oorem Eps affdsfl sf sf lskfj df f sdf d fs",
            time: "00:00",
            date: "00/00/0000"
        },
        {
            title: "Lorem Epsu fsdf  dfs dsfsdf sdfd sf sdf d s ",
            time: "00:00",
            date: "00/00/0000"
        },
        {
            title: "Lorem Epsu fsdf  dfds dsfsdf sdfd sf sdf d s ",
            time: "00:00",
            date: "00/00/0000"
        } ,
        {
            title: "Lorem Epsu fsdf  dfs dsfsdf sdfd sf sdf d ds ",
            time: "00:00",
            date: "00/00/0000"
        } ,
        {
            title: "Lorem Epsu fsdf  dfs dsfsdf sdfd sf sdf dd s ",
            time: "00:00",
            date: "00/00/0000"
        } ,
        {
            title: "Lorem Epsu fsdf  dfs dsfsdf sdfd sf sdf sd s ",
            time: "00:00",
            date: "00/00/0000"
        } ,
        {
            title: "Lorem Epsu fsdf  dfs dsfsdf sdfd sf sdedf d s ",
            time: "00:00",
            date: "00/00/0000"
        } 
    ]

    return (
        <>
        <div className={`${poppins.className} h-[100%] w-full p-2 overflow-hidden rounded-md border bg-white border-[#BFBFBF]`}>
            <div className='h-10 w-full px-4 mb-2 rounded-md flex items-center bg-[#E6E6FA]'>
                <h1>Today's Meetings</h1>
            </div>
            <div className='h-[34vh] gap-2 p-2 grid grid-cols-3 overflow-y-scroll'>
            {meeting.slice(0,5).map((item,i) => (
                <div key={i} className='merriweather-regular relative w-full h-28 flex justify-between overflow-hidden p-4 text-sm bg-white rounded-md border border-[#BFBFBF] shadow-md'>
                    <div className=''>
                    <h1 className='font-semibold text-[#39393A]'>{item.time}</h1>
                    <h1 className='text-[#39393A] text-sm font-medium my-2 line-clamp-2 normal-case'>{item.title}</h1>
                    </div>
                    <div className="absolute right-0 top-5 w-10 h-10">
                    <Image 
                    src={'/gmeet.svg'}
                    alt='gmeet_logo'
                    width={20}
                    height={20}
                    />   
                    </div>
                </div>
            ))}
            <div className='w-full h-full flex flex-col justify-center items-center p-4 text-lg bg-[#6A4C9C] hover:bg-[#9570d2] rounded-md'>
                <Image 
                    className='text-white'
                    src={'/create.svg'}
                    alt='gmeet_logo'
                    width={20}
                    height={20}
                    />        
                <h1 className='text-slate-200 text-sm mt-2'>Create Meeting</h1>
            </div>
            {meeting.slice(6).map((item,i) => (
                <div key={i} className='merriweather-regular relative w-full h-28 flex justify-between p-4 text-sm border border-[#BFBFBF] rounded-md'>
                    <div className=''>
                    <h1 className='font-semibold text-[#39393A]'>{item.time}</h1>
                    <h1 className='text-[#adadae] text-sm my-2 line-clamp-2'>{item.title}</h1>
                    </div>
                    <div className="absolute right-0 top-5 w-10 h-10">
                    <Image 
                    src={'/gmeet.svg'}
                    alt='gmeet_logo'
                    width={20}
                    height={20}
                    />   
                    </div>
                </div>
            ))}
            </div>
        </div>
        </>
    );
}

export default Meeting;
