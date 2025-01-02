import Image from 'next/image';

type IData = {
  title: string;
  description: string;
  image: string;
};

const data: IData[] = [
  { image: "/computer1.png", title: "Web Development", description: "Building responsive, user-friendly websites using HTML, CSS, Typescript, and frameworks like Next.js." },
  { image: "/code.png", title: "UI/UX Design", description: "Designing modern and intuitive interfaces focused on creating seamless user experiences." },
  { image: "/responsive.png", title: "Responsive Design", description: "Ensuring websites look great on all devices with flexible, mobile-friendly layouts." },
];

export default function Services() {
  return (
    <>
      <h1 className="text-5xl text-white font-semibold text-center mt-20">
        <span className="text-red-700 text-6xl">S</span>ervices
      </h1>
      <div className="flex gap-16 mt-16 flex-wrap justify-center items-center sm:flex-col md:flex-row">
        {data.map((item, index) => (
          <div key={index} className="bg-zinc-900 border-4 border-zinc-800 rounded-lg p-6 shad h-72 w-72 duration-300 hover:scale-105 transition-transform hover:shadow-2xl hover:bg-zinc-800 xs:w-72">
            <Image 
              className="ml-20"
              src={item.image} 
              alt={item.title}
              width={64}  
              height={64} 
              objectFit="contain" 
            />
            <h1 className="text-white text-2xl mt-3 text-center font-semibold">{item.title}</h1>
            <p className="text-white text-center text-xl mt-1">{item.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
