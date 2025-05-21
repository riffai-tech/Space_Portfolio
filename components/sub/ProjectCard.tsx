import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  project_link: string;
}

const ProjectCard = ({ src, title, description, project_link }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <a href= {project_link} target="_blank" rel="noopener noreferrer">
        <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="cursive text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
        </a>
    </div>
  );
};

export default ProjectCard;