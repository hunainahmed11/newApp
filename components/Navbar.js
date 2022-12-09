import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Arrowleft from "../assets/Arrowleft.png";
import playicon from "../assets/playicon.png";
import logo from "../assets/logo.png";
import styles from "../styles/Home.module.css";
import { BsArrowLeftShort, BsGrid3X3GapFill, BsHouse, BsList, BsPlayBtn, BsSearch } from "react-icons/bs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
FaFire, FaHeadphonesAlt, FaHome, FaInfoCircle, FaMicrophone, FaPhotoVideo, FaPlay, FaPowerOff, FaQuestion, FaRegFileExcel, FaSms
} from "react-icons/fa";
import Link from "next/link";

export default function Navbar() {
  const Menus=[
    {title : "Home", icon: <FaHome/>  },
    {title : "Create Revohloo" ,icon : <FaPlay /> },
    {title : "Hot & New!" ,icon : <FaFire />},
    {title : "Revohloo Videos",icon : <FaPhotoVideo />},
    {title : "Artists" ,icon : <FaMicrophone />},
    {title : "About Us" ,icon : <FaInfoCircle />},
  ];
  const Settings=[
    {title : "FAQ's" ,icon : <FaSms />},
    {title : "Help Center" ,icon : <FaHeadphonesAlt /> },
    {title : "Terms Of Use" ,icon : <FaRegFileExcel />},
    {title : "Privacy Policy" ,icon : <FaPhotoVideo />},
    {title : "Log Out",icon : <FaPowerOff />},
  ]


  const [open, setOpen] = useState(true);



  return (
    <>
  <div className={`flex z-30  duration-500${
      open ? "w-[100%]" : "w-[42%]"}`}>
  <div
    className={`bg-purple h-[180vh] border-r-[1px]  border-r-[#273149]     p-5 pt-8 
    ${
      open ? "w-[100%]" : "w-[42%]"} 
      duration-500 relative`}
    
  >
    {/* <BsArrowLeftShort className='bg-white text-dark-purple
text3xl rounded-full absolute -right-2 top-9 border border-dark-purple cursor-pointer' size={20} onClick={()=>setOpen(!open)} /> */}
    <Image
      src={Arrowleft}
      alt={""}
      className={`bg-white text-dark-purple
text3xl rounded-full absolute -right-6 top-9 border
border-white cursor-pointer  hover:bg-slate-900  ${
 !open && "rotate-[360deg]"
}`}
      onClick={() => setOpen(!open)}
    />
    <div className="inline-flex relative right-1 " >
      <Image
        src={playicon}
        alt={""}
        width="50"
        className={`duration-300 mt-2.5  ${open ? "rotate-[  360deg]": "rotate-[-360deg]"} `}
      />
      <Image
        src={logo}
        alt={""}
        className={` w-[100%] p-2 duration-300 ${!open && "scale-0"}`}
      />
    </div>
    <div> 
      <h1 className="text-[#53648d] font-bold text-[20px] pt-7 underline  
        ">Menu</h1>
    </div>
    <div className="pt-2  ">
      <ul className="ml-[-10px]">
      
        {Menus.map((menu, index)=>(
          <>
          <Link href="#"></Link>
          <li key ={index} className={`border-b-2 border-[#273149] p-3 text-[#53648d] gap-x-4  cursor-pointer flex items-center  ${
      open ? "border-b-2 border-[#273149]" : "border-none"
    }`}>
            <span className={`text-2xl block float-left duration-300  
            transition transform hover:-translate-y-2 motion-reduce::transition-none motion-reduce:hover:transform-none  
            hover:text-white
            ${ open ? "text-2xl" : "text-4xl"}`
          } >
              {menu.icon ? menu.icon: <BsHouse/>}
            </span>
            
            <span className={`text-base font-medium flex-1 hover:text-white ${!open && "hidden" }`}>{menu.title}</span>
          </li>
          </>
        ))}

      </ul>
      <div> 
      <h1 className="text-[#53648d] font-bold text-[20px] pt-7 underline ml-[-10px]  ">Settings</h1>
    </div>
    <div className="pt-2">
      <ul className="ml-[-10px]">
        {Settings.map((setting, index)=>(
          <>
          <li key ={index}  className={`border-b-2 border-[#273149] p-3 text-[#53648d] gap-x-4  cursor-pointer flex items-center  ${
      open ? "border-b-2 border-[#273149]" : "border-none"
    }`}>
          <span className={`text-2xl block float-left duration-300 
          transition transform hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none 
          hover:text-white
          ${ open ? "text-2xl" : "text-4xl"}`}>
          {setting.icon ? setting.icon: <BsHouse/>}
            </span>
            <span className={`text-base font-medium flex-1 hover:text-white ${!open && "hidden"} ` }> {setting.title}</span>
          </li>
          </>
        ))}
        </ul>
        <div> 
      <h1 className="text-[#53648d]  text-[20px] pt-7 underline flex mt-16  
        "><FaQuestion className="mt-1 mr-2"/>Question? Contact US</h1>
    </div>
        </div>
    </div>
  </div>
 
</div>
    </>
   

);
}