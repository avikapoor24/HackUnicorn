import React from 'react'
import images from "../Assets/Images/a.jpeg"


const Space = () =>  {
  return (
    <><div
          className="h-[6vh] bg-center bg-cover bg-no-repeat"
          style={{
              backgroundImage: `url(${images})`,
          }}
      >

          </div></>
  );
};
    
  

export default Space
