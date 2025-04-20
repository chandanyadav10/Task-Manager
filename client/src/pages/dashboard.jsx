import React from "react";
import dp from "../assets/dp.jpeg";
import logoutImg from "../assets/icons/logout.svg";
import task from "../assets/icons/alltask.png";
import { AiOutlineDoubleRight, AiOutlineCheck } from "react-icons/ai";
import RuleIcon from "@mui/icons-material/Rule";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import AssignmentIcon from "@mui/icons-material/Assignment";
import LogoutIcon from "@mui/icons-material/Logout";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Task from "../components/task";

export default function Dashboard() {
  return (
    <div className="flex">
      <div className="bg-gray-50 w-[20%] h-auto m-4 rounded-3xl border-1 shadow-gray-900 shadow-3xl">
        <div className="flex flex-col justify-center items-center bg-gray-50 m-4 rounded-3xl h-[360px] shadow-inner">
          <span className=" flex flex-col justify-center algin-center bg-gray-50 rounded-full m-4 w-32 h-32 p-2 shadow-3xl">
            <img
              src={dp}
              className=" flex justify-center items-center w-full rounded-full"
              alt="dp"
            />
          </span>
          <span className="flex flex-col justify-center items-center">
            <h1 className="text-xl font-semibold">Chandan Yadav </h1>
            <p className="text-sm font-semibold ">Admin</p>
          </span>
        </div>
        <div className="flex flex-col pl-10 pt-10 bg-gray-50 m-4 rounded-3xl h-[400px] ">
          <button className="flex flex-row  w-[80%] rounded-lg hover:bg-gray-50 cursor-pointer mb-4">
            <AssignmentIcon className="w-5 h-5 mr-2 ml-4 mt-1" />
            <h1 className="text-xl font-semibold"> All tasks</h1>
          </button>
          <button className="flex flex-row   w-[80%] rounded-lg hover:bg-gray-50 cursor-pointer mb-4">
            {/* <AiOutlineDoubleRight className="w-5 h-5 mr-2 ml-4 mt-1" /> */}
            <LabelImportantIcon className="w-5 h-5 mr-2 ml-4 mt-1" />
            <h1 className="text-xl font-semibold">Important tasks</h1>
          </button>
          <button className="flex flex-row  w-[80%] rounded-lg hover:bg-gray-50 cursor-pointer mb-4">
            {/* <AiOutlineCheck className="w-5 h-5 mr-2 ml-4 mt-1   " /> */}
            <FactCheckIcon className="w-5 h-5 mr-2 ml-4 mt-1" />
            <h1 className="text-xl font-semibold"> Completed tasks</h1>
          </button>
          <button className="flex flex-row  w-[80%] rounded-lg hover:bg-gray-50 cursor-pointer mb-4">
            <RuleIcon className="w-5 h-5 mr-2 ml-4 mt-1" />
            <h1 className="text-xl font-semibold"> Incomplete tasks</h1>
          </button>
        </div>
        <div className="flex  justify-center items-bottom bg-gray-400 m-4 p-4 rounded-3xl cursor-pointer">
          <LogoutIcon />
          <h1>Logout</h1>
        </div>
      </div>
      <div className="bg-gray-100 w-[80%] h-auto mr-4 mb-4 mt-4 rounded-3xl ">
        <div className="flex justify-end items-center w-full h-20 bg-gray-400 ">
          <AddBoxIcon />
        </div>
        <div>
          <Task />
        </div>
      </div>
    </div>
  );
}
