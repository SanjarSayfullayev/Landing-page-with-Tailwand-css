import React, {useState} from 'react';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const Navbar = () => {

    const [nav,setNav]=useState(true)
    const handlarClick = () => setNav(!nav)
    
    return (
      <div className="w-screen z-40 h-[80px] bg-zinc-200 fixed drop-shadow-lg">
        <div className="px-2 w-full h-full flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-3xl font-bold mr-4 sm:text-4xl">Sanco.</h1>
            <ul className="hidden md:flex">
              <li>Home</li>
              <li>About</li>
              <li>Support</li>
              <li>Platforms</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div className="hidden md:flex pr-4">
            <button className="border-none bg-transparent text-black pr-4">
              Sign In
            </button>
            <button className="px-8 py-2">Sign Up</button>
          </div>
          <div className="md:hidden mr-4" onClick={handlarClick}>
            {nav ? <MenuOutlinedIcon /> : <CloseOutlinedIcon/>}
          </div>
        </div>
        <ul className={nav ? 'hidden' : "absolute bg-zinc-200 w-full px-8 md:hidden"}>
          <li className="border-b-2 border-zinc-300 w-full">Home</li>
          <li className="border-b-2 border-zinc-300 w-full">About</li>
          <li className="border-b-2 border-zinc-300 w-full">Support</li>
          <li className="border-b-2 border-zinc-300 w-full">Platforms</li>
          <li className="border-b-2 border-zinc-300 w-full">Pricing</li>
          <div className="flex flex-col my-4">
            <button className="bg-transparent text-indigo-600 px-4 py-2 mb-4">
              Sign In
            </button>
            <button className="px-4 py-2">Sign Up</button>
          </div>
        </ul>
      </div>
    );
}

export default Navbar;
