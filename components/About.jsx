import React from "react";
import Image from "next/image";
import Dator from "../public/dator.jpg";

const About = () => {
  return (
    <div id="about" className=" w-full md:h-screen flex items-center p-2 py-16 text-center md:text-left">
      <div className=" max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className=" col-span-2">
          <h3 className=" text-3xl py-1 dark:text-gray-200">About</h3>
          <h2 className=" text-3xl py-1 dark:text-gray-200 font-bold">
            Who I Am
          </h2>
          <p className=" text-xl  py-2 leading-8 text-gray-700 dark:text-gray-200">
            I was born i Poland, and moved to Sweden in 1987. I have spent last
            30 years on diferent jobbs from welder, network engineer, floor
            layer, Vehicle technician, and cleaning stuff. Self tought in all
            areas. In 2021 i decided to do that i loved doing in my yanger days,
            learn to code. Back then in 1989 i wrote my first code in Basic V2
            on Commondore 64 - it was fun. Now i&apos;m learning to be
            <span className=" text-orange-600"> Full stack developer</span> . I
            love to code, and i&apos;m spending all my free time to gain knowledge.
          </p>
          <p className=" text-xl  py-2 leading-8 text-gray-700 dark:text-gray-200">
            At the moment i offer building responsive front-end web aplications
            while learning back-end technologis.
          </p>
          <p className=" py-2 text-gray-700 underline cursor-pointer">
            <a href="https://diagtech.se">Chek out some of my latest projects.</a>
          </p>
        </div>
        <div className=" w-full h-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4">
          <Image src={Dator} alt="Picture of computer" className=" rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default About;
