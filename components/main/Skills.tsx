import React from 'react'
import SkillDataProvider from '../sub/SkillDataProvider'
import { Backend_skill, Frontend_skill, Full_stack, Other_skill, Skill_data } from '@/constants'
import SkillText from '../sub/SkillText'

const Skills = () => {
  return (
    <section
      id="skills"
      className='flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20'
      style={{transform: "scale(0.9)"}}
      >

        <SkillText/>

        {/* Problem Statement Section */}
        <div className="w-full max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            The Rising Cost of Environmental Uncertainty
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            <div className="text-center">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4">
                $2T
              </div>
              <p className="text-gray-300 text-lg">
                in annual productivity losses from climate extremes
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4">
                83%
              </div>
              <p className="text-gray-300 text-lg">
                increase in climate-related disaster events
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4">
                $25T
              </div>
              <p className="text-gray-300 text-lg">
                in supply chain losses from climate disruptions
              </p>
            </div>
          </div>
        </div>

        {/* Technology Section */}
        <div className="w-full max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-8">
            Clarity From Above
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We deliver insights with 97% accuracy by integrating over 20 satellites and 800+ parameters 
            into our proprietary AI models. Our platform provides analysis without reliance on traditional 
            ground-based stations.
          </p>
        </div>

     <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Skill_data.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Frontend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Backend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Full_stack.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Other_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  )
}

export default Skills