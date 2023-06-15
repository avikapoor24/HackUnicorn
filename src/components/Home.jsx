import React from "react";
import image from "../Assets/Images/a.jpeg";
import Space from "../components/Space";

const Home = () => {
  return (
    <>
      <Space />
      <div
        className="h-[85vh] bg-center bg-cover bg-no-repeat "
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="h-full flex flex-col justify-start pt-20 px-4 ">
          <h1 className="text-8xl  text-white px-80">
            Empowering Your Financial{" "}
          </h1>
          <h1 className="text-8xl  text-white px-80">
            {" "}
            Future with Cutting-Edge
          </h1>
          <h1 className="text-8xl  text-white px-80">Fintech Solutions</h1>
          <h2 className="text-5xl pt-20 text-white  px-80">
            Use Data to Get a 360-Degree View of
          </h2>
          <h2 className="text-5xl  text-white px-80">
            Your Business and Portfolio
          </h2>
        </div>
      </div>
    </>
  );
};

export default Home;
