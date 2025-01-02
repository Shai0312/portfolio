'use client'
import { useState } from "react";
import Link from "next/link";
export default function Sidenavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="   text-white ">
      <div className=" flex items-center justify-between   md:ml-6    ">
        {/* Logo or Name - fixed in position */}
        <div className="text-4xl font-semibold font-serif xs: text-2xl  md:text-4xl">
          <span className="text-red-700">S</span>haista{" "}
          <span className="text-red-700">K</span>han
        </div>

        {/* Hamburger Icon - visible on small screens only */}
        <button
          onClick={toggleMenu}
          className="lg:hidden flex flex-col gap-1 md:mr-6"
          aria-label="Toggle navigation menu"
        >
          <div className="w-8 h-1 bg-red-700"></div>
          <div className="w-8 h-1 bg-red-700"></div>
          <div className="w-8 h-1 bg-red-700"></div>
        </button>

        
        <nav
          className={`absolute top-16 right-4  rounded-md p-4 ${
            isOpen ? "block" : "hidden"
          } lg:static lg:flex lg:items-center lg:gap-8`}
        >
          <ul className="flex flex-col lg:flex-row items-center gap-6   xs:gap-1  lg:gap-10  ">
            <li className="flex  gap-2 ">
              <span className="text-2xl font-semibold hover:border-b-2 hover: border-red-700   xs:text-xl lg:text-3xl ">
               <Link href={"/"} >Home</Link> 
              </span>
            </li>
            <li className="flex  gap-2 ">
              
              <span className="text-2xl font-semibold  hover:border-b-2 hover: border-red-700 xs:text-xl lg:text-3xl ">
              <Link href={"/about"} > About </Link>
              </span>
            </li>
            <li className="flex  gap-2 ">
              
              <span className="text-2xl font-semibold   hover:border-b-2 hover: border-red-700  xs:text-xl lg:text-3xl ">
              <Link href={"/services"} > Services </Link>
              </span>
            </li>
            <li className="flex  gap-2 ">
              
              <span className="text-2xl font-semibold   hover:border-b-2 hover: border-red-700  xs:text-xl lg:text-3xl ">
              <Link href={"/project"} > Projects </Link>
              </span>
            </li>
            <li className="flex  gap-2 ">
              <span className="text-2xl font-semibold   hover:border-b-2 hover: border-red-700 xs:text-xl lg:text-3xl ">
              <Link href={"/contact"} > Contact</Link>
              </span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

            
           




       