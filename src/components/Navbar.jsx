import React, {useState} from 'react';
import {
    FaBars, 
    FaTimes, 
    FaFacebook,
    FaGithub, 
    FaLinkedin
} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import {BiCodeAlt} from 'react-icons/bi';
import {Link} from 'react-scroll';

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-20 flex 
    justify-between items-center px-4 
    bg-[#0a192f] text-gray-300'>

        <div>
            <BiCodeAlt className='mt-4 ml-2 
            w-20 h-20 text-pink-700'/>
        </div>

        {/* Menu */}
        <ul className='hidden md:flex'>
            <li>
                <Link to="home" smooth={true} 
                offset={50} duration={500}>
                    Home
                </Link>
            </li>
            <li>
                <Link to="about" smooth={true} 
                offset={10} duration={500}>
                    About
                </Link>
            </li>
            <li>
                <Link to="skills" smooth={true} 
                offset={-70} duration={500}>
                    Skills
                </Link>
            </li>
            <li>
                <Link to="work" smooth={true} 
                offset={20} duration={500}>
                    Work
                </Link>
            </li>
            <li>
                <Link to="contact" smooth={true} 
                offset={-50} duration={500}>
                    Contact
                </Link>
            </li>
        </ul>
      

        {/* Hamburger */}
        <div onClick={handleClick}
             className='md:hidden z-10 cursor-pointer'>  
            {!nav ? <FaBars/> : <FaTimes/>}
        </div>
        
        {/* Mobile menu */}
        <ul className={!nav ? 'hidden' :
            'md:hidden absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick}
                to="home" smooth={true} 
                offset={20} duration={500}>
                    Home
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick}
                to="about" smooth={true} 
                offset={10} duration={500}>
                    About
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick}
                to="skills" smooth={true} 
                offset={-70} duration={500}>
                    Skills
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick}
                to="work" smooth={true} 
                offset={-70} duration={500}>
                    Work
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick}
                to="contact" smooth={true} 
                offset={-50} duration={500}>
                    Contact
                </Link>
            </li>
        </ul>

        {/* Social icons */}
        <div className='hidden lg:flex fixed 
        flex-col top-[35%] left-0'>

            <ul>

                <li className='w-[160px] 
                h-[60px] flex justify-between
                items-center ml-[-100px]
                hover:ml-[-5px] duration-300
                bg-blue-600'>
                    <a className='flex justify-between
                    items-center w-full text-[#fff]'
                        href="http://www.facebook.com/imamovic.kerim"
                        target="_blank">
                        Facebook <FaFacebook size={30}/>
                    </a>
                </li>

                <li className='w-[160px] 
                h-[60px] flex justify-between
                items-center ml-[-100px]
                hover:ml-[-5px] duration-300
                bg-[#fff]'>
                    <a className='flex justify-between
                    items-center w-full text-[rgb(9,84,245)]'
                        href="https://ba.linkedin.com/in/kerim-imamovic-261918165"
                        target="_blank">
                        Linkedin
                        <FaLinkedin size={30}/>
                    </a>
                </li>

                <li className='w-[160px] 
                h-[60px] flex justify-between
                items-center ml-[-100px]
                hover:ml-[-5px] duration-300
                bg-zink-900 hover:bg-slate-600'>
                    <a className='flex justify-between
                    items-center w-full text-gray-300'
                        href="https://github.com/kimamovic21"
                        target="_blank">
                        Github <FaGithub size={30}/>
                    </a>
                </li>

                <li className='w-[200px] 
                h-[60px] flex justify-between
                items-center ml-[-140px]
                hover:ml-[-5px] duration-300
                bg-cyan-400 '>
                    <a className='flex justify-between
                    items-center w-full text-[#000]'
                        href="/"
                        target="_blank">
                        imamovic.kerim<br></br>
                        @gmail.com
                        <HiOutlineMail size={30}/>
                    </a>
                </li>

                <li className='w-[180px] 
                h-[60px] flex justify-between
                items-center ml-[-120px]
                hover:ml-[-5px] duration-300
                bg-neutral-600'>
                    <a className='flex justify-between
                    items-center w-full text-gray-300'
                        href="/"
                        target="_blank">
                        062/128-430<BsFillPersonLinesFill size={30}/>
                    </a>
                </li>

            </ul>

        </div>

    </div>
  )
}

export default Navbar