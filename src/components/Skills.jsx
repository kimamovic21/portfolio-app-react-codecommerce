import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Github from '../assets/github.png';
import Tailwind from '../assets/tailwind.png'

const Skills = () => {
  return (
    <div name='skills'
         className='bg-[#0a192f]'>

      {/* Container */}
        <div className='max-w-[1000px] 
            max-h-[600px] mx-auto
            p-4 flex flex-col justify-center 
            w-full h-screen text-gray-200'>

            <div>
              <p className='text-4xl font-bold
              inline border-b-4 border-pink-700'>
                Skills
              </p>
              <p className='py-4'>
                // These are the technologies i worked with.</p>
            </div>

            <div className='w-full h-screen grid grid-cols-2
                sm:grid-cols-3 md:grid-cols-3 gap-4 
                text-center py-8'>

                <div className='shadow-md shadow-[#040c16]
                hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' 
                       src={HTML} 
                       alt="HTML icon" />
                  <p className='py-4'>HTML 5</p>
                </div>
                <div className='shadow-md shadow-[#040c16]
                hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' 
                       src={CSS} 
                       alt="CSS icon" />
                  <p className='py-4'>CSS 3</p>
                </div>
                <div className='shadow-md shadow-[#040c16]
                hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' 
                       src={JavaScript} 
                       alt="Javascript" />
                  <p className='py-4'>Javascript</p>
                </div>
                <div className='shadow-md shadow-[#040c16]
                hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' 
                       src={ReactImg} 
                       alt="React" />
                  <p className='py-4'>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16]
                hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' 
                       src={Github} 
                       alt="Github" />
                  <p className='py-4'>Github</p>
                </div>
                <div className='shadow-md shadow-[#040c16]
                hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' 
                       src={Tailwind} 
                       alt="Tailwind" />
                  <p className='py-4'>Tailwind CSS</p>
                </div>

            </div>

        </div>

    </div>
  )
}

export default Skills;