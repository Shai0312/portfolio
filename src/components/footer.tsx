
import Link from "next/link"
export default function Footer(){
    return(
        <>
        <div className="h-32 w-full text-white text-xl  bg-zinc-950 mt-40">
            <div className="flex   gap-8  justify-center items-center xs:gap-3 sm:gap-8 "><Link href={"https://www.linkedin.com/in/shaista-abdulhakeem-2935732a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}><img  className=" mt-4 h-9 w-9 hover:scale-110 block hover: border-red-700 hover:border-2  transition-all duration-300 rounded-full xs:h-8 w-8  md:h-9  w-9" src="/in.png" alt="linkedin" /></Link>
 <Link href={"https://www.facebook.com/ukhteali.abdulhakeem.3?mibextid=ZbWKwL"}><img className=" mt-4 h-9 w-9 hover:scale-110 block hover: border-red-700 hover:border-2  transition-all duration-300 rounded-full xs:h-8 w-8  md:h-9  w-9" src="/face.png" alt="facebook" /></Link>
 <Link href={"https://www.instagram.com/ukhteali_abdulhakeem/profilecard/?igsh=MTg4NTY5NG9zaG4z"}><img className="  mt-5 h-10 w-10 hover:scale-110 block hover: border-red-700 hover:border-2  transition-all duration-300 rounded-full xs:h-9 w-9  md:h-10 w-10" src="/insta.png" alt="instagram" /></Link>
 <Link href={"https://github.com/Shai0312"}><img className=" mt-4 h-9 w-9 hover:scale-110 block hover: border-red-700 hover:border-2  transition-all duration-300 rounded-full xs:h-9 w-9  md:h-10  w-10" src="/github3.png" alt="github" /></Link></div>
        <div className="text-white  justify-center items-center text-center mt-2"> &copy; Shaista All rights reserved.</div>
        </div>
        </>
    )
}