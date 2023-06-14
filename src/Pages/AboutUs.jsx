import React from "react";
import image from "../Assets/Images/i.jpeg"
import i from "../Assets/Images/u.png"
import im from "../Assets/Images/t.png"
import ima from "../Assets/Images/s.png"

const About_Us = () => {
  return (
    <>   <div
    className="h-[50vh] bg-center bg-cover bg-no-repeat mb-[1250px]"
    style={{
      backgroundImage: `url(${image})`,
    }}
  >
    <div className="h-full flex flex-col justify-start pt-20 px-4 ">
        <h1 className="text-9xl  text-white px-40 mt-[90px]">The Big Data Blog </h1>

      </div>
     
      
      
     
        <div
          className="h-[50vh] bg-center bg-cover bg-no-repeat"
          style={{
              backgroundImage: `url(${im})`,
          }}
      >

          </div>
          <div
          className="h-[50vh]  bg-center bg-cover bg-no-repeat"
          style={{
              backgroundImage: `url(${i})`,
          }}
      >

          </div>
          <div
          className="h-[50vh] bg-center bg-cover bg-no-repeat"
          style={{
              backgroundImage: `url(${ima})`,
          }}
      >

          </div>
          </div>
         
      
      
      
    </>
  );
};

export default About_Us;
