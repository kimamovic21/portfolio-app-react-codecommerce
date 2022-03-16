import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen
    bg-[#0a192f] flex justify-center items-center p-4'>
      
      <form method='POST'
      action="https://getform.io/f/dca02e7e-afff-4d0f-98a4-7ccc66ea5d33" 
      className='flex flex-col
      max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-gray-200 text-4xl 
          font-bold inline border-b-4 border-pink-700'>
            Contact</p>
          <p className='text-gray-200 py-4'>
            // Submit the form below or send me an email
          </p>
        </div>
        <input className='bg-[#ccd6f6] p-2' type="text" 
               placeholder='Name' name='name' required/>
        <input className='my-4 p-2 bg-[#ccd6f6]' type="email" 
               placeholder='Email' name='email' required/>
        <textarea className='bg-[#ccd6f6] p-2' required
               name="message" rows="6" placeholder='Message...'>
        </textarea>
        <button className='text-white border-2
        hover:bg-pink-700 hover:border-pink-700
        pl-10 pr-10 pt-3 pb-3 my-8 mx-auto flex 
        items-center rounded-lg hover:scale-[1.2] 
        transition ease-in duration-300'>
          Send the form</button>
      </form>

    </div>
  )
}

export default Contact