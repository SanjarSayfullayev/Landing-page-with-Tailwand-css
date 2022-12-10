import React from 'react';
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MemoryIcon from "@mui/icons-material/Memory";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import supportImg from '../assets/support.jpg'
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Support = () => {
    return (
      <div className="w-full mt-24">
        <div className="w-full bg-gray-900/90 absolute">
          <img
            src={supportImg}
            className="w-full h-[650px] object-cover mix-blend-overlay"
            alt="/"
          />
        </div>
        <div className="max-w-[1240px] mx-auto text-white relative">
          <div className="px-4 py-12">
            <h2 className="pt-8 text-3xl text-slate-300 uppercase text-center">
              Support
            </h2>
            <h3 className="text-5xl font-bold py-6 text-center">
              Finding the right team
            </h3>
            <p className="py-4 text-3xl text-slate-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              fugit, iste error quo id fugiat. Vitae sunt incidunt deleniti!
              Culpa.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-16 sm:pt-20 text-black">
            <div className="bg-white rounded-xl shadow-2xl">
              <div className="p-8">
                <LocalPhoneIcon
                  sx={{ fontSize: 40 }}
                  className="px-2 py-2 bg-indigo-600 text-white  rounded-lg mt-[-6rem]"
                />
                <h3 className="font-bold text-2xl my-2">Sales</h3>
                <p className="text-gray-600 text-xl">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Earum aliquam facere voluptates autem accusamus, quod quae
                  ratione error unde quia?
                </p>
              </div>
              <div className="bg-slate-100 pl-8 py-4">
                <p className="text-indigo-600">
                  Contact us <ArrowRightAltIcon />
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-2xl">
              <div className="p-8">
                <SupportAgentIcon
                  sx={{ fontSize: 40 }}
                  className="px-2 py-2 bg-indigo-600 text-white  rounded-lg mt-[-6rem]"
                />
                <h3 className="font-bold text-2xl my-2">Technical support</h3>
                <p className="text-gray-600 text-xl">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Earum aliquam facere voluptates autem accusamus, quod quae
                  ratione error unde quia?
                </p>
              </div>
              <div className="bg-slate-100 pl-8 py-4">
                <p className="text-indigo-600">
                  Contact us <ArrowRightAltIcon />
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-2xl">
              <div className="p-8">
                <MemoryIcon
                  sx={{ fontSize: 40 }}
                  className="px-2 py-2 bg-indigo-600 text-white  rounded-lg mt-[-6rem]"
                />
                <h3 className="font-bold text-2xl my-2">Media inquires</h3>
                <p className="text-gray-600 text-xl">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Earum aliquam facere voluptates autem accusamus, quod quae
                  ratione error unde quia?
                </p>
              </div>
              <div className="bg-slate-100 pl-8 py-4">
                <p className="text-indigo-600">
                  Contact us <ArrowRightAltIcon />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Support;
