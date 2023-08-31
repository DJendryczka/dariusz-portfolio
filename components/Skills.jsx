import React from "react";
import Image from "next/image";
import Html from '../public/skills/html.png'
import Css from '../public/css.png'
import Js from '../public/skills/javascript.png'
import react from '../public/skills/react.png'
import next from '../public/skills/nextjs.png'
import blazor from '../public/skills/Blazor.png'
import github from '../public/skills/github1.png'
import fire from '../public/skills/firebase.png'
import tailwind from '../public/skills/tailwind.png'

const Skills = () => {
  return (
    <div id="skills" className=" w-full lg:h-screen p-2">
      <div className=" max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className=" text-xl uppercase">Skills</p>
        <h2 className=" text-xl uppercase font-bold py-4">What i Can do</h2>
        <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className=" p-6 shadow-xl rounded-xl ">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto">
                <Image
                  src={Html}
                  alt=" Html icon"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className=" p-6 shadow-xl rounded-xl ">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto">
                <Image
                  src={Css}
                  alt=" Css icon"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className=" p-6 shadow-xl rounded-xl ">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto">
                <Image
                  src={Js}
                  alt=" Javascript icon"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className=" p-6 shadow-xl rounded-xl ">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto">
                <Image
                  src={blazor}
                  alt=" Blazor icon"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>Blazor</h3>
              </div>
            </div>
          </div>
          <div className=" p-6 shadow-xl rounded-xl ">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto">
                <Image
                  src={react}
                  alt=" React icon"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className=" p-6 shadow-xl rounded-xl ">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto">
                <Image
                  src={next}
                  alt=" Next.js icon"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>NextJs</h3>
              </div>
            </div>
          </div>
       
          <div className=" p-6 shadow-xl rounded-xl ">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto">
                <Image
                  src={github}
                  alt=" Github icon"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>GITHUB</h3>
              </div>
            </div>
          </div>
          {/* <div className=" p-6 shadow-xl rounded-xl ">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto">
                <Image
                  src={fire}
                  alt=" Firebase icon"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>FIREBASE</h3>
              </div>
            </div>
          </div> */}
          <div className=" p-6 shadow-xl rounded-xl ">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto">
                <Image
                  src={tailwind}
                  alt=" Tailwind icon"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
