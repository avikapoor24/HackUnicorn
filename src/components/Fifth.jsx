import React from 'react'
import images from "../Assets/Images/h.png"

const Fifth = () =>  {
  return (
    
    <div className=" md:py -[80] py-6 flex mx-auto flex-col md:flex-row ">
        
      <div className=" flex justify-center md:justify-start"  >
      <img className="py-2  " src={images} alt="" srcset="" />


      </div>
      <div className="basis-[65%] px-5 text-center">
        
        
        <h2 class="text-4xl  text-white  p-6 flex justify-center md:justify-start m-2 text-center ">TRY OUR​</h2>

        <h2 class="text-4xl  text-white  p-3 flex justify-center md:justify-start m-2 text-center ">*Expense Tracking​</h2>

        <h2 class="text-4xl  text-white  p-3 flex justify-center md:justify-start m-2 text-center ">*Budgeting Tools​</h2>

        <h2 class="text-4xl  text-white  p-3 flex justify-center md:justify-start m-2 text-center ">*Insights and Recommendations​</h2>

        <h2 class="text-4xl  text-white  p-3 flex justify-center md:justify-start m-2 text-center ">*​Goal Setting and Tracking

​</h2>
<div className='py-20'>
<button className="bg-red-500 hover:bg-red-700 text-white font-bold py-8 px-10 rounded">
              Get Started
            </button>
            </div>
        
        
        
      </div>
  
    
    
    </div>
    
  );
};
    
  

export default Fifth
