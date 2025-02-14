'use client'

import React from 'react';
import Login from '@/components/Login';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Register from '@/components/Register';
import Main from '@/components/Main';
import MainMenu from '@/components/MainMenu';
import Tasks from '@/components/Tasks';


const home = () => {
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
                <MainMenu />
            <div className="pl-4 w-[83vw]" >
                <Main />
                <Tasks />
            </div>    
        </div> 
            }/>
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