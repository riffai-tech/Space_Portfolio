import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Our Work in Action
      </h1>
      
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-10">
        <ProjectCard
          src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg"
          title="Flood Warning & Water Management"
          description="Advanced satellite monitoring for early flood detection and comprehensive water resource management using NDWI analysis and real-time data processing."
          project_link="#"
        />

        <ProjectCard
          src="https://images.pexels.com/photos/2827392/pexels-photo-2827392.jpeg"
          title="Illegal Landfill & Methane Detection"
          description="AI-powered identification of unauthorized waste sites and methane emission monitoring through spectral analysis and satellite imagery."
          project_link="#"
        />

        <ProjectCard
          src="https://images.pexels.com/photos/9875414/pexels-photo-9875414.jpeg"
          title="Renewable Energy Site Automation"
          description="Automated monitoring and optimization of wind turbine and solar panel installations for maximum efficiency and predictive maintenance."
          project_link="#"
        />

        <ProjectCard
          src="https://images.pexels.com/photos/1624438/pexels-photo-1624438.jpeg"
          title="Erosion & Land Damage Assessment"
          description="Comprehensive land degradation monitoring and erosion pattern analysis for environmental protection and agricultural planning."
          project_link="#"
        />
      </div>

      {/* Team Section */}
      <div className="w-full max-w-6xl mx-auto mt-32 px-10">
        <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-16">
          A Shared Ambition
        </h2>
        
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-xl text-gray-300 leading-relaxed mb-12">
            RIFFAI was founded by a team of highly experienced professionals from backgrounds in 
            Satellite, AI, Climate Science, and Earth Observation. Our team includes specialists 
            from institutions like Imperial College London, Stanford University, and MIT.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-center items-center">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">CEO</span>
              </div>
              <p className="text-gray-300 text-sm">Founder & CEO</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">CTO</span>
              </div>
              <p className="text-gray-300 text-sm">Chief Technology Officer</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">CSO</span>
              </div>
              <p className="text-gray-300 text-sm">Chief Science Officer</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">COO</span>
              </div>
              <p className="text-gray-300 text-sm">Chief Operations Officer</p>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="w-full max-w-4xl mx-auto mt-32 text-center px-10">
        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-8">
          Impact Space and Everyday Life on a Planetary Scale
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <a
            href="#"
            className="py-3 px-8 button-primary text-center text-white cursor-pointer rounded-lg hover:scale-105 transition-transform duration-300"
          >
            Explore the Demo
          </a>
          <a
            href="#"
            className="py-3 px-8 bg-transparent border border-purple-500 text-center text-white cursor-pointer rounded-lg hover:bg-purple-500/10 transition-colors duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;