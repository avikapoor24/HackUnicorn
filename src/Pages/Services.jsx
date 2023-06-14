import React from "react";
import image from "../Assets/Images/i.jpeg"
import i from "../Assets/Images/n.png"
import im from "../Assets/Images/o.png"
import ima from "../Assets/Images/p.png"
const Services = () => {
  return (
    <div
    className="h-[50vh] bg-center bg-cover bg-no-repeat mb-[1600px]"
    style={{
      backgroundImage: `url(${image})`,
    }}
  >
    <div className="h-full flex flex-col justify-start pt-20 px-4 ">
        <h1 className="text-8xl  text-white px-40 mt-[90px]">Dive Into the New Age of  </h1>
<h1 className="text-8xl  text-white px-40"> Accelerated Analytics
</h1>


<h2 className="text-5xl  text-white px-40 pt-11">Our Services</h2>
      </div>
      <div
          className="h-[60vh] bg-center bg-cover bg-no-repeat"
          style={{
              backgroundImage: `url(${im})`,
          }}
      >

          </div>
          <div
          className="h-[60vh]  bg-center bg-cover bg-no-repeat"
          style={{
              backgroundImage: `url(${ima})`,
          }}
      >

          </div>
          <div
          className="h-[60vh] bg-center bg-cover bg-no-repeat"
          style={{
              backgroundImage: `url(${i})`,
          }}
      >

          </div>
         
      

  </div>
  
  
  );
};

export default Services;


