'use client'
import Typewriter from 'typewriter-effect';
import { IoLogoHtml5 } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

export default function Myskill() {
    return (
        <>
            <h1 className='text-white text-5xl   font-semibold text-center mt-20'>
                My <span className='text-red-700 text-5xl   font-semibold'>Skills</span>
            </h1>

            <div className='flex flex-wrap justify-center items-center mt-16 gap-4 sm:gap-6 md:gap-16'>
                <div className='animate-fade-in-out delay-[0s] flex flex-col items-center'>
                    <IoLogoHtml5 className="text-orange-500 text-6xl sm:text-5xl md:text-8xl" />
                    <h1 className='text-lg sm:text-xl md:text-2xl text-white font-semibold mt-2'>HTML</h1>
                </div>
                
                <div className='animate-fade-in-out delay-[1s] flex flex-col items-center'>
                    <FaCss3Alt className="text-sky-500 text-6xl sm:text-5xl md:text-8xl" />
                    <h1 className='text-lg sm:text-xl md:text-2xl text-white font-semibold mt-2'>CSS</h1>
                </div>

                <div className='animate-fade-in-out delay-[2s] flex flex-col items-center'>
                    <SiTypescript className="text-sky-500 text-6xl sm:text-5xl md:text-8xl" />
                    <h1 className='text-lg sm:text-xl md:text-2xl text-white font-semibold mt-2'>Typescript</h1>
                </div>

                <div className='animate-fade-in-out delay-[3s] flex flex-col items-center'>
                    <RiNextjsFill className="text-black-500 text-6xl sm:text-5xl md:text-8xl bg-white rounded-md" />
                    <h1 className='text-lg sm:text-xl md:text-2xl text-white font-semibold mt-2'>Next.js</h1>
                </div>
            </div>
        </>
    )
}
