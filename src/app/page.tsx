


 import Homepage from "@/components/homepage";
 import About from "./about/page";
 import Myskill from "@/components/myskill";
 import Services from "./services/page";
 import Project from "./project/page";
 import Contact from "./contact/page";



 export default function Home() {
   return (
     <>
     <div className="fixed top-0 h-1 bg-red-700 w-0 transition-all transition-2000"></div>
    
     <div>
      
       <Homepage />
       <About />
       <Myskill />
       <Services />
       <Project />
       <Contact />
      
     </div>
    </>
   )}

 