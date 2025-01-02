import Link from "next/link";
import Image from "next/image"; 

export default function Homepage() {
  return (
    <>
      <div className="main mt-36 flex gap-8 px-10 xs:px-10 md:px-32 lg:px-52 text-white xs:flex-col sm:flex-col md:flex-col lg:flex-row">
      
        <div>
          <h1 className="text-3xl xs:text-4xl sm:text-5xl leading-loose mt-0">Hi</h1>
          <p className="text-4xl sm:text-5xl">I&apos;m Shaista</p> 
          <p className="text-4xl sm:text-5xl">
            a <span className="text-red-700">Frontend Developer</span>
          </p>
          <br />
          <p className="md:text-2xl lg:text-2xl text-lg">
            I&apos;m a dedicated web developer with a flair for creating 
            elegant and responsive websites. I craft seamless user 
            experiences that blend design and functionality.
          </p>

          
          <button className="btn hover:bg-black hover:scale-90 bg-red-700 border-2 rounded-full p-1 w-40 h-10 text-xl text-white mt-10 ml-32 font-serif font-semibold xs:h-8 xs:w-32 xs:justify-center items-center text-center xs:ml-4 xs:mt-7 sm:ml-40 sm:h-9 sm:w-32 md:h-11 w-40 mt-6">
            <Link href={"/contact"}>Hire me</Link>
          </button>
        </div>

        
        <div className="Bcircles">
          <div className="c-one circle"></div>
          <div className="c-two circle"></div>
          <div className="c-three circle"></div>

          
          <Image
            className="image mt-8 sm:mt-0"
            src="/myimg.webp"  
            alt="Shaista"
            width={400}  
            height={400} 
            layout="intrinsic"  
          />
        </div>
      </div>
    </>
  );
}
