import React from "react";
import Image from "next/image";
import Darek from "../public/Darek Mem..png";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Main = () => {
  return (
    <div className=" ">
      <section className=" w-full h-screen text-center ">
        <div className=" max-w-[1240px] w-full h-full mx-auto  flex justify-center items-center flex-col">
          <p className=" uppercase text-sm tracking-widest text-gray-600 mt-[7rem] md:mt-20">
            Let's build something together
          </p>
          <h2 className=" text-5xl py-4  font-bold md:text-6xl">
            Hi, I'm <span className="text-orange-600">Dariusz</span>
          </h2>
          <div className=" relative  shadow-gray-400 bg-gradient-to-b from-orange-600 rounded-full w-[8rem] h-[8rem] my-10 mx-auto overflow-hidden md:h-64 md:w-64 shadow-2xl">
            <Image
              src={Darek}
              alt="Pic of me"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <h3 className=" text-2xl py-2 my-4 md:text-3xl dark:text-white font-bold">
            Front-End Web Developer
          </h3>
          <p className=" text-xl p-4  leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-200">
            Freelancer providing services in front-end. At the moment i offer
            building responsive front-end web aplications while learning
            back-end technologis. Learning new things, building new projects,
            always moving forward means you are alive ...
          </p>
          <div className=" flex my-2">
            <div className=" shadow-lg shadow-gray-400 rounded-full p-4 mx-2  cursor-pointer hover:scale-105 ease-in duration-200">
              <a
                href="https://github.com/DJendryczka?tab=repositories"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size={25} />
              </a>
            </div>
            <div className=" shadow-lg shadow-gray-400 rounded-full p-4 mx-2 cursor-pointer hover:scale-105 ease-in duration-200">
              <a
                href="https://linkedin.com/in/20211975dariusz-jendryczka-ab062834"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn size={25} />
              </a>
            </div>
            <div className=" shadow-lg shadow-gray-400 rounded-full p-4 mx-2 cursor-pointer hover:scale-105 ease-in duration-200">
              <a
                href="https://linkedin.com/in/20211975dariusz-jendryczka-ab062834"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineMail size={25} />
              </a>
            </div>
            <div className=" shadow-lg shadow-gray-400 rounded-full p-4 mx-2 cursor-pointer hover:scale-105 ease-in duration-200">
              <a
                href="https://linkedin.com/in/20211975dariusz-jendryczka-ab062834"
                target="_blank"
                rel="noreferrer"
              >
                <BsFillPersonLinesFill size={25} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
