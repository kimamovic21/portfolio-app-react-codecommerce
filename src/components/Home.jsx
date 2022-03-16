import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen
    bg-[#0a192f]'>

      {/* Container */}
      <div className='max-w-[1000px] mx-auto
      px-8 flex flex-col justify-center h-full
      pl-20'>
        <p className='text-pink-700 mt-12'>
          Hi, my name is
        </p>
        <h1 className='text-4xl md:text:5xl sm:text-6xl
        font-bold text-[rgb(245,236,236)]'>
          Kerim Imamović
        </h1>
        <h2 className='text-4xl md:text:5xl sm:text-6xl
        font-bold text-[hsl(0,11%,85%)]'>
          I'm learing a frontend development
        </h2>
        <p className='text-[rgb(209,204,204)]
        py-4 max-w-[700px]'>
           Welcome to my portfolio web page. I am practising a front-end development. 
           Front-end web development is the development of the graphical
           user interface of a website, through the use of HTML, CSS, Tailwind CSS, JavaScript and ReactJS.
        </p>
       
        <div>
           <button className='text-white group border-2
           px-6 py-3 my-2 flex items-center rounded-lg
           hover:bg-pink-700 hover:border-pink-700'>
             View work 
             <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3'/>
             </span>
           </button>
        </div>

      </div>
   
    </div>
  )
}

export default Home