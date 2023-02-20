import React from "react";
import Image from "next/image";
import Html from '../public/skills/html.png'

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
                  src="/../public/css.png"
                  alt=" Html icon"
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
                  src="/../public/skills/javascript.png"
                  alt=" Html icon"
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
                  src="/../public/skills/react.png"
                  alt=" Html icon"
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
                  src="/../public/skills/nextjs.png"
                  alt=" Html icon"
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
                  src="/../public/skills/node.png"
                  alt=" Html icon"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>NodeJs</h3>
              </div>
            </div>
          </div>
          <div className=" p-6 shadow-xl rounded-xl ">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto">
                <Image
                  src="/../public/skills/github1.png"
                  alt=" Html icon"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>GITHUB</h3>
              </div>
            </div>
          </div>
          <div className=" p-6 shadow-xl rounded-xl ">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto">
                <Image
                  src="/../public/skills/firebase.png"
                  alt=" Html icon"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>FIREBASE</h3>
              </div>
            </div>
          </div>
          <div className=" p-6 shadow-xl rounded-xl ">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center">
              <div className=" m-auto">
                <Image
                  src="/../public/skills/tailwind.png"
                  alt=" Html icon"
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
