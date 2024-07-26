import React from 'react'
import './Navbar.css'
import blacklogo from '../../assets/Logo White.png'
import dropdown from '../../assets/chevron-down.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import telephone from '../../assets/long-arrow-right.png'

const Navbar = () => {
    return (
        <div className='Navbar bg-[#06060642] flex items-center justify-around  '>
            <div className='logobox'><img src={blacklogo} alt="logo" className=' w-44 h-20 max-lg:h-14 max-lg:w-32 max-md:h-10 max-md:w-20 ' /></div>
            <div className='nav_icons list-none flex items-center justify-center gap-10 text-xl font-bold max-lg:text-xs max-md:text-[10px] '>
                <li className="naviconsele " id='naviconhome'> <AnchorLink href='#Home' className='anchorlink'>Home</AnchorLink></li>
                <li className="naviconsele"> <AnchorLink href='#AboutUs' className='anchorlink'>About Us</AnchorLink></li>
                <li className="naviconsele flex items-center gap-2">  <AnchorLink href='#RoseAvenue' className='anchorlink'>Our Services</AnchorLink> <img src={dropdown} className=' w-4 h-3 max-lg:w-3 max-lg:h-2 ' alt="" /></li>
                <li className="naviconsele"> <AnchorLink href='#Projects' className='anchorlink'>Projects</AnchorLink></li>
                <li className="naviconsele"> <AnchorLink href='#Contact' className='anchorlink'>Contact</AnchorLink></li>
            </div>
            <div className='getquotes flex items-center justify-center gap-4 font-bold  '>
                <button className='quotes bg-[#B96D79] p-3 px-8 rounded-3xl max-lg:p-2 max-lg:text-xs max-lg:px-7 max-md:text-[10px] max-md:px-4 '> Get a Quote</button>
                <div className='contact flex items-center'><img src={telephone} alt="" className=' h-5 mr-2 max-lg:h-4 max-md:h-3 ' /><p className='max-lg:text-xs max-md:text-[10px]' >123 456 789</p></div>
            </div>
        </div>
    )
}

export default Navbar
