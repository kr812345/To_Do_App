"use client"

import React, { use, useState, useEffect } from 'react';
import { LuPanelLeft } from "react-icons/lu";
import { RiHomeLine } from "react-icons/ri";
import { TbMessageChatbot } from "react-icons/tb";
import { IoVideocamOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import Image from "next/image";
import { Merriweather_Sans, Poppins } from 'next/font/google';

const poppins = Poppins({
    subsets: ['latin'],
    weight: [ '500'],
    display: 'swap',
  });

const MainMenu = ({dataFromMainMenu}) => {
    const [Activate, setActivate] = useState("Dashboard");
    
    const menuItems = [
        {name:"Dashboard", icon:<RiHomeLine/>},
        {name:"ChatBot", icon:<TbMessageChatbot />},
        {name:"Meeting", icon:<IoVideocamOutline/>},
        {name:"Setting", icon:<IoSettingsOutline/>}];

    useEffect(() => {
        dataFromMainMenu(Activate);
    }, [Activate, dataFromMainMenu]);

    const handleClick = () => {
        const element = document.getElementById('menuBtn');
        element.setAttribute = 'hidden';
    }

    return (
        <>
        <div id='menuBtn' className={`${poppins.className} h-full w-[15vw] p-4 bg-white border border-[#bfbfbf] rounded-md`}>
            <div className='logo flex gap-4 items-center justify-between'>
                <div className='flex gap-2 text-xl'>
                <Image 
                className='m-1'
                src='/logo.svg' 
                width={20}
                height={20}
                alt="#" />
                <h1><strong> TASKs </strong></h1>
                </div> 
                <LuPanelLeft  onClick={handleClick}/>
            </div>

            <div className='w-[100%] min-h-[content-fit] mt-6 rounded-md'>
                    {menuItems.map((item,i) => (
                        <div 
                        key = {i}
                        onClick={() => (setActivate(item.name))} 
                        className={`${Activate === item.name ? 'bg-[#6A4C9C] text-white' : ''} text-[1.4vw] lg:text-[1vw] hover:border-2 hover:border-[#6A4C9C] h-8 w-full p-2 rounded-md flex items-center my-1`}>
                        <button
                            className={` flex gap-2 items-center`}
                            >
                            {item.icon}
                            {item.name}
                        </button>
                        </div>
                    ))}
            </div>

        </div>
        </>
    );
}

export default MainMenu;