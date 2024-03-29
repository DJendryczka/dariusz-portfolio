import React from "react";
import Image from "next/image";

const ProjectItem = ({title, bgImage, projectUrl}) => {
  return (
    <div className="relative p-2 flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <Image
        className="rounded-xl group-hover:opacity-10 "
        src={bgImage}
        alt="/"
      />
      <div className=" hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className=" text-2xl text-white font-bold">{title}</h3>
        <p className="pb-4 pt-2 text-white text-center">
          Can be viewed{" "}
          <a
            className=" text-orange-400 text-center p-2 rounded-lg bg-white"
            href={projectUrl}
          >
            here
          </a>
        </p>
      </div>
    </div>
  );
};

export default ProjectItem;
