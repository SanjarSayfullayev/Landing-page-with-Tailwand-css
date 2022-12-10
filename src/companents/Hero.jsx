import React from 'react';
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import AirplanemodeActiveOutlinedIcon from "@mui/icons-material/AirplanemodeActiveOutlined";
import DnsIcon from "@mui/icons-material/Dns";
import bgImg from '../assets/cyber-bg.png'
import NetworkWifiIcon from "@mui/icons-material/NetworkWifi";

const Hero = () => {
    return (
      <div className="w-full h-screen bg-zinc-200 flex flex-col justify-between">
        <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
          <div className="flex flex-col justify-center md:items-start w-full px-2 py-2">
            <p className="text-2xl">Unique Sequencing & Production</p>
            <h1 className="py-3 text-5xl md:text-6xl font-bold">
              Cloud Managemant
            </h1>
            <p className="text-2xl">This is our Tech brend.</p>
            <button className="py-3 sm:w-[60%] my-4">Get started</button>
          </div>
          <div>
            <img className="w-full" src={bgImg} alt="/" />
          </div>
          <div
            className="absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%]
          mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 borderborder-slate-300 rounded-xl text-center shadow-xl"
          >
            <p>Data Services</p>
            <div className='flex justify-between flex-wrap px-4'>
              <p className="flex px-4 py-2 text-slate-500">
                <CloudUploadOutlinedIcon className="text-indigo-600 mx-2"/> App
                security
              </p>
              <p className="flex px-4 py-2 text-slate-500">
                <NetworkWifiIcon className="text-indigo-600 mx-2"/> Deshboard Design
              </p>
              <p className="flex px-4 py-2 text-slate-500">
                <DnsIcon className="text-indigo-600 mx-2"/> Cloud Data
              </p>
              <p className="flex px-4 py-2 text-slate-500">
                <AirplanemodeActiveOutlinedIcon className="text-indigo-600 mx-2"/>
                API
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Hero;
