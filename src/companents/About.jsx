import React from 'react';

const About = () => {
    return (
      <div className="w-full my-32">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center">
            <h2 className="text-5xl font-bold">
              Trusted by developers across the world
            </h2>
            <p className="text-3xl py-6 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque ad dolorum eligendi.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-1 px-2 text-center">
            <div className="border py-8 rounded-xl shadow-xl">
              <p className="text-5xl font-bold text-indigo-600">100%</p>
              <span className='text-gray-400 mt-2'>Completion</span>
            </div>
            <div className="border py-8 rounded-xl shadow-xl">
              <p className="text-5xl font-bold text-indigo-600">24/7</p>
              <span>Delivery</span>
            </div>
            <div className="border py-8 rounded-xl shadow-xl">
              <p className="text-5xl font-bold text-indigo-600">100K</p>
              <span>Transaction</span>
            </div>
          </div>
        </div>
      </div>
    );
}

export default About;
