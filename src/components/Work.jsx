import React from 'react';
import Cloud from '../assets/Cloud.jpg';
import Travel from '../assets/Travel.jpg';
import Defi from '../assets/Defi.jpg';

const Work = () => {
  return (
    <div name='work' className='w-full
    md:h-screen text-gray-200 bg-[#0a192f]'>

        <div className='max-w-[1000px] mx-auto
        p-4 flex flex-col justify-center w-full h-full'>

            <div className='pb-8'>
                <p className='text-4xl font-bold
                inline border-b-4 text-gray-200 
                border-pink-700'>
                    Work</p>
                <p className='py-6'>
                    // Check out some of my recent work</p>
            </div>

            <div className='grid lg:grid-cols-3 sm:grid-cols-1
              md:grid-cols-2 gap-4'>

              <div style={{backgroundImage:`url(${Cloud})`}}
              className='shadow-lg shadow-[#040c16]
              group container rounded-md flex justify-center
              items-center mx-auto content-div'>

                    {/* Hover effects */}
                  <div className='opacity-0 group-hover:opacity-100'>
                      <span className='text-2xl font-bold
                      text-white tracking-wider'>
                        Cloud ReactJS app
                      </span>
                      <div className='pt-8 text-center'>
                          <a href="/">
                              <button className='text-center rounded-lg
                              px-4 py-3 m-2 bg-white text-gray-700
                              font-bold text-lg'>
                                  Demo</button>
                          </a>
                          <a href="https://github.com/kimamovic21/cloud-app-react"
                             target="_blank">
                              <button className='text-center rounded-lg
                              px-4 py-3 m-2 bg-white text-gray-700
                              font-bold text-lg'>
                                  Code</button>
                          </a>
                      </div>
                  </div>

              </div>

              <div style={{backgroundImage:`url(${Travel})`}}
              className='shadow-lg shadow-[#040c16]
              group container rounded-md flex justify-center
              items-center mx-auto content-div'>

                    {/* Hover effects */}
                  <div className='opacity-0 group-hover:opacity-100'>
                      <span className='text-2xl font-bold
                      text-white tracking-wider'>
                        Travel ReactJS app
                      </span>
                      <div className='pt-8 text-center'>
                          <a href="/">
                              <button className='text-center rounded-lg
                              px-4 py-3 m-2 bg-white text-gray-700
                              font-bold text-lg'>
                                  Demo</button>
                          </a>
                          <a href="https://github.com/kimamovic21/travel-react-app"
                             target="_blank">
                              <button className='text-center rounded-lg
                              px-4 py-3 m-2 bg-white text-gray-700
                              font-bold text-lg'>
                                  Code</button>
                          </a>
                      </div>
                  </div>

              </div>

              <div style={{backgroundImage:`url(${Defi})`}}
              className='shadow-lg shadow-[#040c16]
              group container rounded-md flex justify-center
              items-center mx-auto content-div'>

                    {/* Hover effects */}
                  <div className='opacity-0 group-hover:opacity-100'>
                      <span className='text-2xl font-bold
                      text-white tracking-wider'>
                        Data ReactJS app
                      </span>
                      <div className='pt-8 text-center'>
                          <a href="/">
                              <button className='text-center rounded-lg
                              px-4 py-3 m-2 bg-white text-gray-700
                              font-bold text-lg'>
                                  Demo</button>
                          </a>
                          <a href="https://github.com/kimamovic21/data-react-app"
                            target="_blank">
                              <button className='text-center rounded-lg
                              px-4 py-3 m-2 bg-white text-gray-700
                              font-bold text-lg'>
                                  Code</button>
                          </a>
                      </div>
                  </div>

              </div>

            </div>

        </div>

    </div>
  )
}

export default Work;