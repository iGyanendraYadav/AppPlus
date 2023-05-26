import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  let Pages = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Features", link: "#features" },
    { name: "Review", link: "#review" },
    { name: "Pricing", link: "#pricing" },
  ];
  const [open, setOpen] = useState(false);

  return (
    <>

      <div className=" w-full  fixed lg:absolute top-0 left-0  z-10">
        <div className="md:flex justify-between md:justify-between lg:justify-between 2xl:justify-center items-center text-gray-100 bg-transparent lg:bg-transparent  py-2 md:py-2 px-7 md:px-5 lg:px-20 2xl:mx-auto 2xl:container">
          <div className="font-bold text-2xl cursor-pointer flex items-center space-x-[6.5rem] md:space-x-10 lg:space-x-60 text-white md:max-w-screen-md lg:max-w-screen-2xl">
            <a href="#hero">
              <span className=" mr-1 pt-0  ">
              <Image src="/logo.png" width={150} height={50} alt="logo" />
              </span>
            </a>







          </div>
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-4 md:top-2 cursor-pointer lg:hidden p-[6px] rounded-xl border border-indigo-300 "
          >
            {open ? <span className=" "><AiOutlineClose /></span>  : <span className=""><AiOutlineMenu /></span> }
          </div>
          <ul
            className={`lg:flex lg:justify-end lg:items-center rounded-xl lg:rounded-none border border-indigo-300 lg:border-none pt-2 md:pt-0  lg:pt-0 absolute lg:static text-blue-600 md:text-blue-600 lg:text-white  bg-gray-200  lg:bg-transparent    lg:z-auto z-[-1] left-64 md:left-[550px] md:w-full lg:left-0 w-full  lg:pl-0 pl-0 transition-all duration-500 ease-in ${

              open
                ? "top-16 md:top-14 opacity-100"
                : "top-[-500px] opacity-0 md:opacity-100"
            } `}
          >
            {Pages.map((page, i) => {
              return (
                <li
                  key={i}
                  className="md:ml-8 text-xl md:my-0 my-2 p-2 indent-5 lg:indent-0  cursor-pointer bg-white lg:bg-transparent  hover:text-pink-600 lg:hover:text-white     "
                >
                  <a href={page.link}>{page.name}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
