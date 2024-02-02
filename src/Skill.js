import React from "react";

function Skill() {
  const data = [
    { img: "2afde877-0407-4911-9db8-df1639cb4c4f.png", name: "Mongo DB" },
    { img: "be305a30-379d-4224-a9ca-9e0126833591.png", name: "Node JS" },
    { img: "d90916be-2c63-47d0-a7cf-91cc989fc375.png", name: "Express JS" },
    { img: "c918b788-4ea2-459d-91d0-bbd248a1bd15.png", name: "Mongoose" },
    { img: "ae352b32-a108-49e0-879a-6f12d3c72f7a.png", name: "HTTP" },
    { img: "d3872f5c-4990-46bd-a804-9fc19f800ae1.png", name: "HTML" },
    { img: "13f80bdf-fc16-48f7-a207-e7dc10fdb72a.png", name: "CSS" },
    { img: "d2ce38c9-cbee-481e-92fb-1b829dcd239c.png", name: "React" },
    { img: "b37f01c7-1aab-4c72-b5b6-0e7de7406629.png", name: "JavaScript" },
    { img: "253a6780-733b-456e-8a5e-361999c93818.png", name: "Git" },
    { img: "d2ce38c9-cbee-481e-92fb-1b829dcd239c.png", name: "React Native" },
    { img: "d18aee7a-647e-4c32-beea-2328572ba8b0.png", name: "Bootstrap" },

  ];
  return (
    <div className="mt-10 h-screen">
      <div className="md:flex items-center    md:mx-auto md:w-10/12">
        <div className="mr-4 text-center">
          <span className="text-lg font-bold text-white">Skill Acquired</span>
        </div>
        <div className="flex-1 border-t my-4 hidden md:flex"></div>
      </div>
      <div className=" flex gap-y-10 flex-wrap justify-between items-center m-5   md:mx-auto md:w-10/12">
       {
        data.map((item,index)=>  <div key={index} className="flex flex-col text-center items-center w-20 md:w-24 mx-1  md:mx-8 ">
            <div className="rounded-lg " style={{backgroundColor:'#3366ff'}}>
            <img alt="#" src={item.img} className="md:w-20 w-14  p-2"  />
            </div>
       
        <p className="text-sm font-semibold text-white py-2">{item.name}</p>
      </div>
        )
       }  
      </div>
    </div>
  );
}

export default Skill;
