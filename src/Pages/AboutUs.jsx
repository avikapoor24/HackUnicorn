import React from "react";
import image from "../Assets/Images/BgImg-3.jpeg"

const About_Us = () => {
  return (
    <>  
      <div className="h-[85vh] bg-center bg-cover bg-no-repeat mb-[10%] "
    style={{
      backgroundImage: `url(${image})`,
    }}>
    <div className="m-3 Heading  text-8xl relative left-[70px] top-[170px]  text-white text-left   ">
    The Big Data Blog
      </div>
      
      <div className="
      bg-[#141414] w-[1500px] h-[480px] 
       border-[0.2px] border-[#858585] 
       mx-[5%] mt-[17%] mb-[50%]
       ">
        
        <div className=" text-white text-center relative top-[225px] ">
          <p className="text-5xl">Check back soon</p>
          <p className="text-[#9e9e9e] text-[15px]">Once posts are published, you’ll see them here.</p>
        </div>
        </div>
      </div>
      
      
      
    </>
  );
};

export default About_Us;
