import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 px-10">
        <ProjectCard
          src="/mealmate_banner.png"
          title="MealMate"
          description="MealMate is a social recipe and meal planning app that lets users discover, share, and organize meals with ease. It combines community-driven recipes, personalized meal planning, and ingredient tracking to help users cook smarter and eat better."
          project_link="https://github.com/aaditya7788/MealMate.git"
        />

        <ProjectCard
          src="/space_portfolio.png"
          title="Space Portfolio"
          description="A sleek space-inspired portfolio with glowing cosmic visuals and orbital tech icons, reflecting innovation, exploration, and your journey as a future-ready full stack developer. 🚀✨"
          project_link="https://github.com/aaditya7788/MealMate.git"
        />

        
      </div>
    </div>
  );
};

export default Projects;
