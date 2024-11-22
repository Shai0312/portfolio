import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

export default function Project() {
    return (
        <div>
            <h1 className="text-white text-5xl mt-24 text-center font-semibold">
                My <span className="text-red-700 text-5xl mt-24 text-center font-semibold">Work</span>
            </h1>

            <div className="flex flex-wrap gap-10 mt-16 justify-center items-center">
                
                {/* Project 1: Sugar Bliss */}
                <div className="rounded-md overflow-hidden relative group">
                    <img 
                        className="w-[350px] h-[350px] rounded-md block transition-transform duration-300 ease-in-out group-hover:scale-110" 
                        src="/cake4.jpg" alt="cake" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-zinc-400 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex items-center justify-center flex-col px-10 text-center">
                        <h3 className="text-2xl text-black font-bold text-center">Sugar Bliss</h3>
                        <p className="text-lg text-black font-semibold text-center mt-3">
                            Delighting your moments with <br />freshly baked treats and custom <br /> cakes made to perfection.
                        </p>
                        <Link href={"/work is in progress on this"}>
                            <FaExternalLinkAlt className="text-black text-4xl mt-6" />
                        </Link>
                    </div>
                </div>

                {/* Project 2: E-Commerce */}
                <div className="rounded-md overflow-hidden relative group">
                    <img 
                        className="w-[350px] h-[350px] rounded-md block transition-transform duration-300 ease-in-out group-hover:scale-110" 
                        src="/shopping0.jpg" alt="shopping" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-zinc-400 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex items-center justify-center flex-col px-10 text-center">
                        <h3 className="text-2xl text-black font-bold text-center">E-Commerce</h3>
                        <p className="text-lg text-black font-semibold text-center mt-3">
                            Shop quality products with<br /> ease-fast delivery and secure <br /> payments.
                        </p>
                        <Link href={"/work is in progress on this"}>
                            <FaExternalLinkAlt className="text-black text-4xl mt-6" />
                        </Link>
                    </div>
                </div>

                {/* Project 3: Pana Cloud */}
                <div className="rounded-md overflow-hidden relative group">
                    <img 
                        className="w-[350px] h-[350px] rounded-md block transition-transform duration-300 ease-in-out group-hover:scale-110" 
                        src="/panacloud.png" alt="panacloud" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-zinc-400 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex items-center justify-center flex-col px-10 text-center">
                        <h3 className="text-2xl text-black font-bold text-center">Pana Cloud</h3>
                        <p className="text-lg text-black font-semibold text-center mt-3">
                            Ensures success with expert <br /> consultation, efficient work processes, timely delivery, <br />and continuous support.
                        </p>
                        <Link href={"/work is in progress on this"}>
                            <FaExternalLinkAlt className="text-black text-4xl mt-4" />
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}
