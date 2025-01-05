import React from 'react';
import { CiCalendarDate } from "react-icons/ci";
import profile_icon from '@/Assets/profile_icon.svg';
import Menu from '@/Assets/menu_icon.svg';
// import Calender from '@/Assets/calender_icon.svg';


const navbar = () => {
  return (
    <>
    <div className='flex justify-end items-center w-full h-[10vh] border border-b-[1px] border-b-white border-t-0 border-x-0'>
    <h1>
        {/* To Do App */}
        <img src={Menu} alt="menu"/>
        
        <div className='flex gap-2 right-0'>
        <img src={profile_icon} alt="profile" />
        <img src={Calender} alt="calender" />
        </div>

    </h1>
    </div>
    </>
  )
}

export default navbar