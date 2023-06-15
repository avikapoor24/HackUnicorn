import React from "react";
import images from "../Assets/Images/h.png";

const Fifth = () => {
  return (
    <div className=" md:py -[80] py-6 flex mx-auto flex-col md:flex-row ">
      <div className=" flex justify-center md:justify-start">
        <img className="py-2  " src={images} alt="" srcset="" />
      </div>
      <div className="basis-[20%] px-5 text-center"></div>
      <div className="basis-[65%] px-5 text-center">
        <h2 class="text-5xl  py-8 text-white/50 font-sans  p-6 flex justify-center md:justify-start m-2 text-center pt-9 ">
          TRY OUR​
        </h2>

        <h2 class="text-4xl  text-white/50  font-sans p-3 flex justify-center md:justify-start m-2 text-center ">
          -Expense Tracking​
        </h2>

        <h2 class="text-4xl  text-white/50  font-sans p-3 flex justify-center md:justify-start m-2 text-center ">
          -Budgeting Tools​
        </h2>

        <h2 class="text-4xl  text-white/50 font-sans p-3 flex justify-center md:justify-start m-2 text-center ">
          -Insights ​
        </h2>
        <h2 class="text-4xl  text-white/50 font-sans p-3 flex justify-center md:justify-start m-2 text-center ">
          -Recommendations​
        </h2>

        <h2 class="text-4xl  text-white/50 font-sans p-3 flex justify-center md:justify-start m-2 text-center ">
          -​Goal Setting ​
        </h2>
        <h2 class="text-4xl  text-white/50 font-sans p-3 flex justify-center md:justify-start m-2 text-center ">
          -Tracking ​
        </h2>
        <div className="py-20">
          <button className="bg-red-600/75 text-black text-6xl ml-5 py-1 px-4 rounded-full hover:bg-red-700 flex justify-start transition duration-300">
            <a href="/"> Get Started </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Fifth;
