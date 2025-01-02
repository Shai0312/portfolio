import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";  

export default function Project() {
    return (
        <div>
            <h1 className="text-white text-5xl mt-24 text-center font-semibold">
                My <span className="text-red-700 text-5xl mt-24 text-center font-semibold">Work</span>
            </h1>

            <div className="flex flex-wrap gap-10 mt-16 justify-center items-center">
                
            
                <div className="rounded-md overflow-hidden relative group">
                    <Image 
                        className="w-[350px] h-[350px] rounded-md block transition-transform duration-300 ease-in-out group-hover:scale-110" 
                        src="/cake4.jpg" 
                        alt="Sugar Bliss cake"
                        width={350}  
                        height={350} 
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-zinc-400 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex items-center justify-center flex-col px-10 text-center">
                        <h3 className="text-2xl text-black font-bold text-center">Cake Delight</h3>
                        <p className="text-lg text-black font-semibold text-center mt-3">
                            Delighting your moments with <br />freshly baked treats and custom <br /> cakes made to perfection.
                        </p>
                        <Link href={"https://multiplepagewebsite.vercel.app"} target="_blank">
                            <FaExternalLinkAlt className="text-black text-4xl mt-6" />
                        </Link>
                    </div>
                </div>

                
                <div className="rounded-md overflow-hidden relative group">
                    <Image 
                        className="w-[350px] h-[350px] rounded-md block transition-transform duration-300 ease-in-out group-hover:scale-110" 
                        src="/shopping0.jpg" 
                        alt="E-Commerce"
                        width={350}  
                        height={350} 
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-zinc-400 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex items-center justify-center flex-col px-10 text-center">
                        <h3 className="text-2xl text-black font-bold text-center">E-Commerce</h3>
                        <p className="text-lg text-black font-semibold text-center mt-3">
                            Shop quality products with<br /> ease-fast delivery and secure <br /> payments.
                        </p>
                        <Link href={"https://github.com/Shai0312/ecommerce"}target="_blank">
                            <FaExternalLinkAlt className="text-black text-4xl mt-6" />
                        </Link>
                    </div>
                </div>

            
                <div className="rounded-md overflow-hidden relative group">
                    <Image 
                        className="w-[350px] h-[350px] rounded-md block transition-transform duration-300 ease-in-out group-hover:scale-110" 
                        src="/healthylife.jpg" 
                        alt="blog"
                        width={350}  
                        height={350} 
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-zinc-400 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex items-center justify-center flex-col px-10 text-center">
                        <h3 className="text-2xl text-black font-bold text-center">Dynamic Blog</h3>
                        <p className="text-lg text-black font-semibold text-center mt-3">
                            Stay informed and empowered with our dynamic health blog, offering expert insights, tips, and updates on all things wellness.
                        </p>
                        <Link href={"https://blog-three-ebon.vercel.app"}target="_blank">
                            <FaExternalLinkAlt className="text-black text-4xl mt-4" />
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}
