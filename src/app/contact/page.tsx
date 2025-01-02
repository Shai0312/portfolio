import Link from "next/link";
import Image from "next/image";  

export default function Contact() {
  return (
    <div className="flex flex-col lg:flex-row">
      
      <div className="xs:pl-6 sm:ml-20 md:pl-8 lg:pl-20 lg:w-1/2 xl:w-1/3">
        <h2 className="text-4xl text-center sm:text-5xl font-semibold text-white mb-6 mt-24 xs:text-center lg:text-left">
          Contact <span className="text-5xl text-red-700">Me</span>
        </h2>
        <p className="text-xl sm:text-2xl text-white pl-6 xs:pl-4 sm:pl-8 md:pl-0 ">
          Thanks for visiting! Fill out the form, 
          and I&apos;ll be in touch shortly.
        </p>
        
        
        <div className="flex mt-6 gap-5 justify-center lg:justify-start xs:px-4 sm:px-8">
          <Link href={"https://www.linkedin.com/in/shaista-abdulhakeem-2935732a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}>
            <Image
              className="hover:scale-110 block hover:border-red-700 hover:border-2 transition-all duration-300 rounded-full xs:h-8 w-8 sm:h-9 md:h-9"
              src="/in.png"
              alt="linkedin"
              width={36}
              height={36}
            />
          </Link>
          <Link href={"https://www.facebook.com/ukhteali.abdulhakeem.3?mibextid=ZbWKwL"}>
            <Image
              className="hover:scale-110 block hover:border-red-700 hover:border-2 transition-all duration-300 rounded-full xs:h-7 w-8 sm:h-9 md:h-9"
              src="/face.png"
              alt="facebook"
              width={36}
              height={36}
            />
          </Link>
          <Link href={"https://www.instagram.com/ukhteali_abdulhakeem/profilecard/?igsh=MTg4NTY5NG9zaG4z"}>
            <Image
              className="hover:scale-110 block hover:border-red-700 hover:border-2 transition-all duration-300 rounded-full xs:h-9 w-9 sm:h-10 md:h-10"
              src="/insta.png"
              alt="instagram"
              width={40}
              height={40}
            />
          </Link>
          <Link href={"https://github.com/Shai0312"}>
            <Image
              className="hover:scale-110 block hover:border-red-700 hover:border-2 transition-all duration-300 rounded-full xs:h-9 w-9 sm:h-9 md:h-10 w-10"
              src="/github3.png"
              alt="github"
              width={36}
              height={36}
            />
          </Link>
        </div>
      </div>

      
      <div className="w-full max-w-lg p-8 shadow-md xs:ml-4 sm:ml-16 md:ml-20 lg:ml-10 xl:ml-20 lg:w-1/2 xl:w-2/3">
        <form className="space-y-4">
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mt-14">Name</label>
            <input
              type="text"
              className="bg-zinc-900 w-full px-4 py-2 mt-1 focus:outline-none"
              required
            />
          </div>

          
          <div>
            <label className="block text-sm font-medium text-gray-300">Email</label>
            <input
              type="email"
              className="bg-zinc-900 w-full px-4 py-2 mt-1 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">Subject</label>
            <input
              type="text"
              className="bg-zinc-900 w-full px-4 py-2 mt-1 focus:outline-none"
            />
          </div>

          
          <div>
            <label className="block text-sm font-medium text-gray-300">Message</label>
            <textarea
              className="bg-zinc-900 w-full px-4 py-2 mt-1 focus:outline-none"
              rows={4}
            ></textarea>
          </div>

        
          <button
            type="submit"
            className="w-32 bg-zinc-900 text-gray-300 font-semibold py-2 hover:bg-red-700 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
