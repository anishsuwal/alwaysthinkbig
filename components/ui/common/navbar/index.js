import React, { useState } from 'react'
import Navbutton from '../navbutton';


import { useWeb3 } from "components/providers"
import { ActiveLink, Button } from "components/ui/common"
import { useAccount } from "components/hooks/web3"
import { useRouter } from "next/router"
import logo from "img/white-logo.png"
import Image from "next/image"
import { Link } from "react-router-dom"


const Navbar = () => {
    const Links =[
      {name:"NFTS",link:"#nft-id"},
      {name:"METAVERSE",link:"#metaverse-id"},
      {name:"WHITPAPER",link:"#whitepaper-id"},
      {name:"ROADMAP",link:"#roadmap-id"},
      {name:"ABOUT",link:"#about-id"},
      {name:"PARTNERS",link:"#partners-id"},
      {name:"CONTACT US",link:"#contactus-id"},

    ];
    let [open,setOpen]=useState(false);
  return (
    <div className='shadow-md w-full  top-0 left-0 sticky  z-50'>
      <div className='md:flex items-center justify-between bg-gradient-to-r from-blue-600 to-blue-700 py-4'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
        <div className="flex items-center flex-shrink-0  text-white ml-6 lg:ml-40 ">
          <a href="#home-id">
          <Image 
            alt="ATB"
            src={logo}
            layout="fixed" priority
          />
          </a>
        </div>
        
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <button name={open ? 'close':'menu'}><div className="w-5 h-1 bg-gray-600 mb-1"></div>
      <div className="w-5 h-1 bg-gray-600 mb-1"></div>
      <div className="w-5 h-1 bg-gray-600"></div></button>
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute mr-10
       md:static   md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9
        transition-all duration-500 ease-in ${open ? 'top-20 bg-blue-900 ':'top-[-490px] bg-transparent'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 -400 text-sm md:my-0 my-7'>
              <a href={link.link} onClick={() => setOpen=false} className='text-white hover:text-gray-400 duration-500'>{link.name}</a>
            </li>
          ))
        }

        <Navbutton>
          Login
        </Navbutton>
       
      </ul>
      </div>
    </div>
    
  )
  
}

export default Navbar