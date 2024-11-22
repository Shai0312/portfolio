



type IData = {
    title:string;
    description:string;
    image:string;
};
const data:IData[] =[
     
    { image:"/books1.png" ,title:"Education" , description: "I have completed a Bachelor's degree in Science,which has given me a  strong foundation in analytical skills and a structured  approach to problem solving."},
    { image:"/passion.png" ,title:"Passion" , description: "I'm passionate about learning new technologies and constantly improving my skills. Always eager to explore new ideas and tools."},
    { image:"/experience.png" ,title:"Experience" , description: "I have experience web development, and specialize in HTML, CSS, Typescript and Next.js. I build modern and responsive websites."},
   
];

export default function Skills(){
return(
    <>
    <div className="flex gap-10  flex-wrap  justify-center items-center mt-10 ">
        
        {data.map((item,index)=>(
            <div key={index} className=" border-4 border-zinc-900 bg-zinc-950 rounded-lg p-4 shadow-md h-96 w-80 ">
                <img className="h-32 w-32 rounded-lg ml-20 " src={item.image} alt={item.title}/>
                <h1 className="text-white text-3xl font-semibold text-center mt-2">{item.title}</h1>
                <p className="text-zinc-400 text-xl mt-1 text-center">{item.description}</p>
                
                

            </div>
        ))}

    </div>
    </>
)

}