
import Skills from "@/components/skills"


export default function About(){
    return(
        <>
        
        <div className="text-center  xs:px-6 lg:px-8 max-w-screen-sm mx-auto">
            
            <h1 className="text-white text-5xl font-semibold  justify-center items-center mt-24 ">About <span className="text-5xl text-red-700 font-semibold">Me</span></h1>
            <p className="text-white text-2xl  justify-center items-center mt-7">I am a passionate web developer focused on creating engaging and user 
                friendly web applications.  I believe in blending creativity and functionality 
                to deliver exceptional digital experiences.
            </p>
            
        </div>
        <Skills />
        </>
    )
}