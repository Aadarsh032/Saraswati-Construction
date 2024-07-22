import React from 'react'
import './Navbar.css'
import blacklogo from '../../assets/Logo White.png'
import dropdown from '../../assets/chevron-down.png'

import telephone from '../../assets/long-arrow-right.png'

const Navbar = () => {
    return (
        <div className='Navbar bg-[#06060642] flex items-center justify-center justify-between justify-around '>
            <div className='logobox'><img src={blacklogo} alt="logo" className=' w-44 h-20' /></div>
            <div className='nav_icons list-none flex items-center justify-center gap-10 text-xl font-bold '>
                <li className="naviconsele " id='naviconhome'>Home</li>
                <li className="naviconsele">About Us</li>
                <li className="naviconsele flex items-center gap-2">Our Services <img src={dropdown} className=' w-4 h-3  ' alt="" /></li>
                <li className="naviconsele">Projects</li>
                <li className="naviconsele">Contact</li>
            </div>
            <div className='getquotes flex items-center justify-center gap-4 font-bold'>
                <button className='quotes bg-[#B96D79] p-4 px-8 rounded-3xl'> Get a Quote</button>
                <div className='contact flex'><img src={telephone} alt="" className=' h-5 mr-2' /><p>123 456 789</p></div>
            </div>
        </div>
    )
}

export default Navbar
