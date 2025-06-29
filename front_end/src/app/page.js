'use client'

import { React, useState } from 'react';
import Login from '@/components/Login';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Register from '@/components/Register';
import Main from '@/components/Main';
import MainMenu from '@/components/MainMenu';
import ChatBot from '@/components/ChatBot';
import Tasks from '@/components/Tasks';
import Setting from '@/components/Setting';

const home = () => {
    const [active,setActive] = useState('');

    const handleDatafromMainMenu = (data) => {
        setActive(data)
    };

    console.log(active);

    return (
        <BrowserRouter>
        <Routes>
        <Route
        path='/login'
        element={
            <div className="w-full h-screen flex bg-gray-100 p-4" >
                <Login/>
            </div>
        }/>
        <Route
            path='/'
            element={
                <div className="w-full h-screen flex bg-gray-100 p-4" >
                    <MainMenu dataFromMainMenu={handleDatafromMainMenu}/>
                    <div className="pl-4 w-[83vw]" >
                    
                        { active === 'Dashboard' && <> <Main /> <Tasks /> </>}

                        { active === 'ChatBot' && <ChatBot/> }
                        
                        { active === 'Setting' && <Setting/> }
                    
                    </div>
                </div>
            }/>
            {/* w-[83vw] */}
        <Route
            path='/register'
            element={
                <div className="w-full h-screen flex bg-gray-100 p-4" >
                    <Register/>
                </div>
            }/>
        </Routes>
        </BrowserRouter>
    );
}

export default home;