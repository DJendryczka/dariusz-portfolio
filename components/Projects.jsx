import React from "react";
import ProjectItem from "./ProjectItem";
import Sweet from "../public/sweet.jpg";
import Skanor from "../public/skanor.jpg";
import Keto from "../public/keto.jpg";
import Bella from "../public/Bella.jpg";

const Projects = () => {
  return (
    <div id="projects" className=" w-full">
      <div className=" max-w-[1240px] mx-auto px-2 py-16">
        <p className=" text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className=" py-4">What i've Built</h2>
        <div className=" grid md:grid-cols-2 gap-8">
          <ProjectItem title="The Sweet Paradise" bgImage={Sweet} projectUrl="https://djendryczka.github.io/cakebyn/" />
          <ProjectItem title="Skanorsservice" bgImage={Skanor} projectUrl='https://skanorsservice.se' />
          <ProjectItem title="Ketosupercharged" bgImage={Keto} projectUrl='https://majestic-gecko-a4efa4.netlify.app' />
          <ProjectItem title="BelaStäd" bgImage={Bella} projectUrl='https://bellastad.se' />
        </div>
      </div>
    </div>
  );
};

export default Projects;
