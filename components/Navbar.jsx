import React, {useState, useEffect} from "react";
import {  BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";



const Navbar = () => {
  const [shadow, setShadow] = useState(false)
  const [ nav, setNav] = useState(false)

 
  const handleNav = () => {
    setNav(!nav)
  }
  useEffect(() =>{
    const handleShadow = () => {
      if(window.scrollY >= 90){
        setShadow(true)
      }else{
        setShadow(false)
      }
    }
    window.addEventListener('scroll', handleShadow)
  },[])
  return (
    <div className={shadow ? " fixed w-full h-20 shadow-xl z-[100]" : " fixed w-full h-20 z-[100]"}>
      <div className=" flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <h2 className=" text-2xl font-bold">D.J.</h2>
      
        <ul className=" hidden md:flex items-center">
          
          <Link href="/">
            <li className=" ml-10 text-sm hover:border-b cursor-pointer">HOME</li>
          </Link>
          <Link href="/#about" scroll={false}>
            <li className=" ml-10 text-sm hover:border-b cursor-pointer">ABOUT</li>
          </Link>
          <Link href="/#skills" scroll={false}>
            <li className=" ml-10 text-sm hover:border-b cursor-pointer">SKILLS</li>
          </Link>
          <Link href="/#projects" scroll={false}>
            <li className=" ml-10 text-sm hover:border-b cursor-pointer">PROJECTS</li>
          </Link>
          <Link href="/#contact" scroll={false}>
            <li className=" ml-10 text-sm hover:border-b cursor-pointer">CONTACT</li>
          </Link>
        </ul>
        <div className=" md:hidden">
          <AiOutlineMenu size={25}  onClick={handleNav}/>
        </div>
      </div>
      <div className={ nav ? " md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ''}>
        <div className={nav ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500" : " fixed left-[-100%] top-0  p-10 ease-in duration-500" }>
          <div>
            <div className=" flex items-center justify-between">
              <h2 className=" text-2xl font-bold">D.J.</h2>
              <div className=" rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                <AiOutlineClose size={25} onClick={handleNav} />
              </div>
            </div>
            <div className=" border-b border-gray-300 my-4">
              <p className=" w-[85%] md:w-[90%] py-4">
                Let's build something together
              </p>
            </div>
          </div>
          <div className=" py-4 flex flex-col">
            <ul>
              <Link href="/">
              <li onClick={()=> setNav(false)} className=" py-4 text-sm">HOME</li>
              </Link>
            </ul>
            <ul>
              <Link href="/#about" scroll={false}>
              <li onClick={()=> setNav(false)} className=" py-4 text-sm">ABOUT</li>
              </Link>
            </ul>
            <ul>
              <Link href="/#skills" scroll={false}>
              <li onClick={()=> setNav(false)} className=" py-4 text-sm">SKILLS</li>
              </Link>
            </ul>
            <ul>
              <Link href="/#projects" scroll={false}>
              <li onClick={()=> setNav(false)} className=" py-4 text-sm">PROJECTS</li>
              </Link>
            </ul>
            <ul>
              <Link href="/#contact" scroll={false}>
              <li onClick={()=> setNav(false)} className=" py-4 text-sm">CONTACT</li>
              </Link>
            </ul>
            <div className=" pt-40">
              <p className=" uppercase tracking-widest text-[#5651e9]">
                Let's connect
              </p>
            </div>
            <div className=' flex items-center justify-between my-4 w-[70%] text-gray-700 dark:text-gray-200'>
              <div className=" shadow-lg shadow-gray-400 rounded-full p-3 mx-2 cursor-pointer hover:scale-105 ease-in duration-200">
              <a
                href="https://github.com/DJendryczka?tab=repositories"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              </div>
              <div className=" shadow-lg shadow-gray-400 rounded-full p-3 mx-2 cursor-pointer hover:scale-105 ease-in duration-200">
              <a
                href="https://linkedin.com/in/20211975dariusz-jendryczka-ab062834"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
              </div>
              <div className=" shadow-lg shadow-gray-400 rounded-full p-3 mx-2 cursor-pointer hover:scale-105 ease-in duration-200">
              <a
                href="https://linkedin.com/in/20211975dariusz-jendryczka-ab062834"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineMail />
              </a>
              </div>
              <div className=" shadow-lg shadow-gray-400 rounded-full p-3 mx-2 cursor-pointer hover:scale-105 ease-in duration-200">
              <a
                href="https://linkedin.com/in/20211975dariusz-jendryczka-ab062834"
                target="_blank"
                rel="noreferrer"
              >
                <BsFillPersonLinesFill />
              </a>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
