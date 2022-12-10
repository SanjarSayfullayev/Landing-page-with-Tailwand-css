import React from 'react';
import CheckIcon from "@mui/icons-material/Check";


const Pricing = () => {
    return (
      <div className="w-full text-white my-24">
        <div className="w-full h-[800px] bg-slate-800 absolute mix-blend-overlay"></div>

        <div className="w-[1240px] mx-auto py-12">
          <div className="text-center text-slate-300">
            <h2 className="text-3xl uppercase">Pricing</h2>
            <h3 className="text-5xl text-white py-8">
              The right price for your research.
            </h3>
            <p className="text-3xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Cupiditate a deleniti illum explicabo, itaque libero.
            </p>
          </div>

          <div className="grid md:grid-cols-2">
            <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
              <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">
                Standart
              </span>
              <div>
                <p className="text-6xl flex font-bold py-4">
                  $49{" "}
                  <span className="text-indigo-500 text-xl flex flex-col justify-end">
                    /mo
                  </span>
                </p>
              </div>
              <p className="text-2xl py-8 text-slate-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing.
              </p>
              <div>
                <p className="py-2 text-xl">
                  <CheckIcon className="mr-5 text-green-500" />
                  Lorem, ipsum dolor.
                </p>
                <p className="py-2 text-xl">
                  <CheckIcon className="mr-5 text-green-500" />
                  Lorem, ipsum dolor.
                </p>
                <p className="py-2 text-xl">
                  <CheckIcon className="mr-5 text-green-500" />
                  Lorem, ipsum dolor.
                </p>
                <p className="py-2 text-xl">
                  <CheckIcon className="mr-5 text-green-500" />
                  Lorem, ipsum dolor.
                </p>
                <p className="py-2 text-xl">
                  <CheckIcon className="mr-5 text-green-500" />
                  Lorem, ipsum dolor.
                </p>
                <button className="w-full py-4 my-4">Get started</button>
              </div>
            </div>
            <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
              <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">
                Premium
              </span>
              <div>
                <p className="text-6xl flex font-bold py-4">
                  $99{" "}
                  <span className="text-indigo-500 text-xl flex flex-col justify-end">
                    /mo
                  </span>
                </p>
              </div>
              <p className="text-2xl py-8 text-slate-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing.
              </p>
              <div>
                <p className="py-2 text-xl">
                  <CheckIcon className="mr-5 text-green-500" />
                  Lorem, ipsum dolor.
                </p>
                <p className="py-2 text-xl">
                  <CheckIcon className="mr-5 text-green-500" />
                  Lorem, ipsum dolor.
                </p>
                <p className="py-2 text-xl">
                  <CheckIcon className="mr-5 text-green-500" />
                  Lorem, ipsum dolor.
                </p>
                <p className="py-2 text-xl">
                  <CheckIcon className="mr-5 text-green-500" />
                  Lorem, ipsum dolor.
                </p>
                <p className="py-2 text-xl">
                  <CheckIcon className="mr-5 text-green-500" />
                  Lorem, ipsum dolor.
                </p>
                <button className="w-full py-4 my-4">Get started</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Pricing;
