import { IoMdMenu } from "react-icons/io";
import { useState } from "react";
import Logo from "../assets/images disaster/Logo.png"

export default function Navbar() {
  const [onClickMenu, setOnClickMenu] = useState(false);
  function HandleClick() {
    setOnClickMenu(!onClickMenu);
    console.log("after click", onClickMenu);
  }

  return (
    <div className=" md:pl-4 pl-4 lg:pl-6  flex justify-between items-center sm:items-center pr-4  absolute  h-[80px] lg:max-h-[60px] sm:h-[80px] w-screen lg:min-w-screen bg-white/30 backdrop-blur-md shadow-md  ">
      <img src={Logo}  className="h-full w-[13%] md:max-w-[12%] lg:w-[7%] "/>
      <div className=" md:hidden">
      <button onClick={HandleClick} >
      <IoMdMenu className="min-h-10 relative min-w-10"/>
      </button>
      {onClickMenu && (
        <div className="text-sm absolute  right-40  top-12 font-bold">
          <div className=" absolute  bg-blue-300  transition-transform shadow-md h-[12rem] w-[9rem] flex-col ">
            <p className="border-b-[0.5px] pl-2 pt-2 pb-2 hover:bg-gray-200 border-black">Home</p>
            <p className="border-b-[0.5px] hover:bg-gray-200 pl-2 pt-2 pb-2 border-black">
              Emergency
            </p>
            <p className="border-b-[0.5px] pl-2 hover:bg-gray-200 pt-2 pb-2 border-black">
              Become volunteer
            </p>
            <p className="border-b-[0.5px] hover:bg-gray-200 pl-2 pt-2 pb-2 border-black">
              Contact Us
            </p>
            <p className=" pl-2 pt-2 pb-2 hover:bg-gray-200 border-black">Log out</p>
          </div>
        </div>
      )}
      </div>
      <div className="md:flex lg:w-4/5 md:font-semibold md:items-center md:gap-10 lg:gap-14 lg:justify-center lg:items-center lg:pr-12 md:h-full md:pr-14   hidden sm:hidden "> 
        <button className="hover:bg-white focus:scale-110 hover:text-blue-400 hover:border-blue-400 hover:border-2 focus:border-2 focus:border-blue-400 focus:text-blue-400 focus:bg-white rounded-md bg-blue-400 text-white md:border transition-transform shadow-md  md:h-[50%] lg:h-[55%] lg:w-[7%] lg:text-sm md:w-[18%]">Home</button>
        <button className="hover:bg-white focus:scale-110 hover:text-blue-400 hover:border-blue-400 hover:border-2 focus:border-2 focus:border-blue-400 focus:text-blue-400 focus:bg-white  rounded-md bg-blue-400 text-white md:border transition-transform shadow-md md:h-[50%] lg:h-[55%] lg:text-sm lg:w-[10%] md:w-[23%]">Emergency</button>
        <button className="hover:bg-white focus:scale-110 hover:text-blue-400 hover:border-blue-400 hover:border-2 focus:border-2 focus:border-blue-400 focus:text-blue-400 focus:bg-white rounded-md bg-blue-400 text-white md:border transition-transform shadow-md leading-none lg:leading-none lg:h-[55%] lg:w-[15%] lg:text-sm md:h-[55%] md:w-[21%]">Become volunteer</button>
        <button className="hover:bg-white focus:scale-110 hover:text-blue-400 hover:border-blue-400 hover:border-2 focus:border-2 focus:border-blue-400 focus:text-blue-400 focus:bg-white rounded-md bg-blue-400 text-white md:border transition-transform shadow-md md:h-[50%] lg:h-[55%] lg:text-sm lg:w-[10%]  md:w-[23%]">Contact Us</button>
        <button className="hover:bg-white focus:scale-110 hover:text-blue-400 hover:border-blue-400 hover:border-2 focus:border-2 focus:border-blue-400 focus:text-blue-400 focus:bg-white rounded-md bg-blue-400 text-white md:border transition-transform shadow-md  md:h-[50%] lg:h-[55%] lg:text-sm lg:w-[7%] md:w-[18%]">Logout</button>
      </div>
      <></>
    </div>
  );
}
