'use client'

import React, { useEffect } from "react";
import "@fontsource/merriweather-sans";
import Image from "next/image";
import { Poppins } from 'next/font/google';
import { useState } from "react";
import axios from 'axios';
import CreateTask from "./Create_task";

const poppins = Poppins({
  subsets: ['latin'],
  weight: [ '500'],
  display: 'swap',
});

const Tasks = () => {
  const [todos, setTodos] = useState([]);
  const [isOpened, setisOpened] = useState(false);

  useEffect(() => {
    axios.get('/todos')
      .then(response => {
        setTodos(response.data);
        console.log(response.data);
      })
      .catch(error => {
        alert(`${error}\n\nTasks not loading..`);
      });
  }, []);

    const tasks = [
      {
        title: "Title No 1.",
        Description:
        "Lorem ipsum dolor sit amet consectetur adipisdsdsd sdd sd dsd dsdd fd ffd df fdf df  icing elit. Error, maxime!",
        time: "12:00 12-12-2024",
      },
    {
      title: "title No 1.",
      Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, maxime!",
      time: "12:00 12-12-2024",
    },
    {
      title: "title No 1.",
      Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, maxime!",
      time: "12:00 12-12-2024",
    },
    {
      title: "title No 1.",
      Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, maxime!",
      time: "12:00 12-12-2024",
    },
  ];

  const handleClick = () => {
    setisOpened(!isOpened);
  }

  return (
    <>
      <div className={`${poppins.className} h-[calc(50%-16px)] flex gap-2 p-2 bg-white border border-[#BFBFBF] mt-4 rounded-md`}>
        {isOpened ? <CreateTask setisOpened={setisOpened} /> : null}
        <div className="h-[100%] w-[66%] rounded-md">
          <div className="w-full h-10 mb-2 px-4 flex justify-between items-center bg-[#E6E6FA] rounded-md">
            <h1 className="font-semibold">To-Do</h1>
            <button
              className="flex items-center text-white bg-[#6A4C9C] hover:bg-[#9570d2] rounded-md px-2 py-1 gap-2"
              type="button"
              onClick={handleClick}
            >
              Create Task
              <Image
                src={"/plus.svg"}
                width={16}
                height={16}
                alt=""
              />
            </button>
          </div>
          <div className="w-full h-[36vh] pt-2 px-2 grid grid-cols-3 gap-2 bg-[#ffffff] rounded-md overflow-y-scroll">
            {(todos.map((todo,i) => (
              <div key={i} className="relative h-full bg-white p-3 border border-[#BFBFBF] shadow-md rounded-md">
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <Image
                      src={"/unmarked.svg"}
                      width={16}
                      height={16}
                      alt=""
                    />
                    <h3 className="title text-[#39393A] font-medium normal-case">
                      {todo.title}
                    </h3>
                  </div>
                  <Image src={"/task_menu.svg"} width={20} height={20} alt="" />
                </div>
                <p className="h-[8vh] text-sm mt-3 mb-2 text-[#bfbfbf] line-clamp-3">
                  {todo.Description || "Lorem epsum he he hu hu ha ha"}
                </p>
                <div className="flex">
                  <p className="text-xs text-[#39393A]">{todo.time}</p>
                </div>
              </div>
            ))) || (<p>No Tasks created yet.</p>)}
          </div>
        </div>
        <hr className="border h-[90%] my-auto border-white" />
        <div className="h-[100%] bg-[#fff] w-[33%]">
          <div className="w-full h-[12%] rounded-md flex items-center p-4 font-semibold bg-[#E6E6FA]">
            <h1>Completed</h1>
          </div>
          <div className="w-full h-[88%] m-1 overflow-y-scroll">
            {todos.map((task,i) => (
              <div key={i} className="w-full h-10 flex font-medium justify-between items-center p-4 rounded-md bg-white border border-[#bfbfbf] my-2">
                <h2>{task.title}</h2>
                <Image
                  src={"/marked.svg"}
                  width={16}
                  height={16}
                  alt=""
                ></Image>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tasks;
