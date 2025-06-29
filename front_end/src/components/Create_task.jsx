import React, { useState } from 'react';
import Select from 'react-select';
import axios from 'axios';

const CreateTask = ({isOpened,setisOpened}) => {
    const [selectedOption, setselectedOption] = useState(null);
    const [title, setTitle] = useState('');
    const [description,setDescription] = useState('');

    const handleClick = () => {
        setisOpened(prev => !prev);
    };

    const handleSubmit = async () => {
        try{
            console.log({title,description})
            const res = await axios.post('/api/create/todo',{ title, description});
            console.log(res);
            handleClick()
            console.log({title,description})
        } catch (error) {
            console.log(error);
        }
        
    }

    const options = [
        {
            value: 'high',
            label: 'High'
        },
        {
            value: 'moderate', 
            label: 'Moderate'
        },
        {
            value: 'low',
            label: 'Low'
        }
    ];
    return (
        <>
        <div className='h-screen w-screen absolute top-0 left-0 bg-[#c5c5c5c0] z-10 backdrop-blur-sm flex items-center justify-center' id='cancel_btn'>
            <div className='h-fit w-[500px] bg-slate-100 rounded-lg p-4 flex flex-col gap-4 border border-slate-700/50'>
                <input required className='w-full h-8 p-2 bg-white border border-gray-500 rounded-md text-lg' type="text" name="Title" id="Title" onChange={(e)=>{setTitle(e.target.value)}} placeholder='Title'/>
                <textarea required className='w-full h-28 p-2 bg-white border border-gray-500 rounded-md flex justify-start text-start' type="text" name="Description" onChange={(e)=>{setDescription(e.target.value)}} id="Description" placeholder='description'/>
                <div className='flex justify-between'>
                <div className='flex gap-1'>
                <input className='w-32 h-9 rounded-md bg-green-500 hover:bg-green-400' type="submit" onClick={handleSubmit} name="submit" id="Create_btn" value="Create" />
                <input className='w-32 h-9 rounded-md border-2 border-green-500 hover:bg-green-100' type="button" name="Cancel" 
                id='Cancel'
                onClick={handleClick}
                value="Cancel"/>
                </div>
                <Select
                    defaultValue={selectedOption}
                    onChange={setselectedOption}
                    options={options}
                    />
                </div>
            </div>
        </div>
        </>
    );
}

export default CreateTask;
