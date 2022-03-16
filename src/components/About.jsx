import React from 'react'

const About = () => {
  return (
    <div name='about'
         className='w-full h-screen
         bg-[#0a192f] text-gray-200'>

        <div className='flex flex-col
             justify-center items-center
             w-full h-full'>

            <div className='max-w-[1000px]
              w-full grid grid-cols-2 gap-8'>

                <div className='sm:text-right
                pb-8 pl-4'>
                    <p className='text-4xl font-bold
                    inline border-b-4 border-pink-700'>
                    About me
                    </p>
                </div>
                <div> </div>
                </div>
            
            <div className='max-w-[1000px] w-full
                grid md:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-center sm:text-3xl
                    md:ml-20 text-4xl font-bold'>
                  <p>Hi. I'm Kerim, nice to meet you.
                     Feel free to take a look around.
                  </p>
                </div>
                <div>
                  <p>I feel that my basic knowledge of frontend development
                     technologies such as HTML, CSS, Tailwind CSS, Javascript
                     and ReactJS, knack for finding defects in the development 
                     process, ability to commit to training in full-time 
                     capacity and passion for new skills and technologies makes 
                     me the ideal candidate to learn more about frontend 
                     development.
                  </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About