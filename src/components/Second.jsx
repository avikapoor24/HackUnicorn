import React from "react";
import images from "../Assets/Images/w.png";
import imagesa from "../Assets/Images/x.png";
const Second = () => {
    return (
        <div className="   flex mx-auto flex-col md:flex-row ">
        <div className=" flex justify-center md:justify-start">
          <img className="py-2  " src={images} alt="" srcset="" />
        </div>
        
        <div className="basis-[65%]  text-center">
        <img className=" " src={imagesa} alt="" srcset="" />
            </div>
            </div>
       
      
    
          

        );
};

export default Second;