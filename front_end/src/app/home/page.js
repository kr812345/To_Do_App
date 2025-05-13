import React from 'react';
import Main from "@/components/Main";
import MainMenu from "@/components/MainMenu";
import Tasks from "@/components/Tasks";


const Home = () => {
    return (
        <>
        <div className="w-full h-screen flex bg-gray-100 p-4" >
                <MainMenu />
            <div className="pl-4 w-[83vw]" >
                <Main />
                <Tasks />
            </div>    
        </div> 
        </>
    );
}

export default Home;
