import Image from "next/image";
import React from "react";
import sreerag from "@/public/img/Sreerag.jpg";
const Banner = () => {
  return (
    <div className="wrapper flex flex-col md:flex-row items-center gap-10">
      {/* image */}
      <div className="w-44 h-44 bg-black rounded-full">
        <Image
          src={sreerag}
          alt="profileimage"
          className="w-full h-full object-cover object-top rounded-full border-[1px] border-indigo-700 p-2"
        />
      </div>
      {/* description */}
      <div className="w-3/4 flex flex-col items-center md:items-start gap-2">
        <h1 className="text-5xl max-sm:text-4xl max-sm:text-center font-bold text-white">
          Sreerag K P
        </h1>
        <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-tr from-blue-300 via-red-300 to-indigo-300 tracking-wide">
          React Developer
        </h3>
        <p className="text-base tracking-wide text-center md:text-start">
          React Learner, Problem Solver, Developer.
        </p>
      </div>
    </div>
  );
};

export default Banner;
