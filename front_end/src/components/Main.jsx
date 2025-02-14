"use client";

import React, { useContext } from "react";
import { RiNotification4Line } from "react-icons/ri";
import { RiLogoutCircleRLine } from "react-icons/ri";
import QuoteOfTheDay from "./QuoteOfTheDay";
import Meeting from "./Meeting.jsx";
import Link from 'next/link';
import { Poppins } from 'next/font/google';
import { AuthContext } from "@/Context/authContext";

const poppins = Poppins({
  subsets: ['latin'],
  weight: [ '500'],
  display: 'swap',
});

const Main = () => {
  const today = new Date();
  const date = today.getDate();
  const day = today.toLocaleString("en-US", { weekday: "long" });
  const month = today.toLocaleString("en-US", { month: "long" });

  const {user} = useContext(AuthContext);
  console.log(user);

  return (
    <>
        <div className={`${poppins.className} h-[50%] p-2rounded-md`}>
          <div className="w-full h-10 mb-2 flex rounded-md justify-between">
            <div className="w-40 h-full flex rounded-md font-medium">
              <div className="w-10 h-10 flex rounded-full bg-[#E6E6FA] my-auto">
                <h1 className="text-[#6A4C9C] font-semibold m-auto text-2xl">
                  {date}
                </h1>
              </div>
              <div className=" text-[#6A4C9C] mx-2 my-1 font-semibold">
                {day}
                <div className="text-[10px] tracking-wider -my-1 text-[#8c6ac2]">{month}</div>
              </div>
            </div>
            <div className="w-[13vw] h-full flex px-2 items-center shadow bg-white border border-[#bfbfbf] rounded-md">
              <div className="flex w-[15vw] gap-2 items-center">
                <img
                  className="h-8 w-8 bg-[#E6E6FA] rounded-full"
                  src={null}
                  alt=""
                />
                <div className="my-auto ">
                  <h1 className={`${poppins.className} text-[.8rem]`}>{user}</h1>
                  <h3 className={`${poppins.className} text-[.6rem] -mt-1 tracking-wide indent-[0.5px]`}>Student</h3>
                </div>
              </div>
              <div className=" flex size-7 h-8 w-full gap-3 items-center justify-evenly pl-3">
                <RiNotification4Line className="hover:text-slate-500 bg-[#E6E6FA] rounded-full p-1 h-7 w-7" />
                <Link href={'/login'}>
                <RiLogoutCircleRLine className="hover:text-slate-500 bg-[#E6E6FA] rounded-full p-1 h-7 w-7" />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex h-[calc(100%-48px)]">
            <div className="w-[50%] mr-2  rounded-md">
              <QuoteOfTheDay />
            </div>
            <div className="w-[50%] ml-2">
              <Meeting />
            </div>
          </div>
        </div>
    </>
  );
};

export default Main;
