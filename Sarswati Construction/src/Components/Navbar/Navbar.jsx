import React, { useRef, useState } from 'react';
import './Navbar.css';
import blacklogo from '../../assets/Logo White.png';
import dropdown from '../../assets/chevron-down.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import telephone from '../../assets/long-arrow-right.png';
import navhamburger from '../../assets/hamburger.png';
import crossicon from '../../assets/menu_close.svg'

const Navbar = () => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='Navbar bg-[#0606066b] flex items-center justify-around p-4'>
  
      <img src={blacklogo} alt="logo" className='w-44 h-20 max-lg:h-14 max-lg:w-32 max-md:h-20 max-md:w-40 ' />
      <img src={navhamburger} alt="" className='navhamburger md:hidden w-6 h-6  max-md:h-14 max-md:w-14 max-sm:h-12 max-sm:w-12 cursor-pointer' onClick={toggleMenu} />
      
      
      <div
        className={`nav-menu list-none flex flex-col md:flex-row items-center justify-center gap-6 md:gap-6 text-xl font-bold max-lg:text-base   max-md:text-4xl max-sm:gap-4 absolute md:relative max-md:px-4 bg-[#0606066b] md:bg-transparent top-0 right-0 w-full md:w-auto  h-screen md:h-auto transform ${isMenuOpen ? 'translate-y-0 bg-black ' : '-translate-y-full'} md:transform-none transition-transform duration-300 ease-in-out`}
      >
        <img src={crossicon} alt="" className='md:hidden w-6 h-6 cursor-pointer absolute top-48 right-14' onClick={toggleMenu} />
        <li className="naviconsele"><AnchorLink href='#Home' className='anchorlink'>Home</AnchorLink></li>
        <li className="naviconsele"><AnchorLink href='#AboutUs' className='anchorlink'>About Us</AnchorLink></li>
        <li className="naviconsele flex items-center gap-2">
          <AnchorLink href='#RoseAvenue' className='anchorlink'>Our Services</AnchorLink>
          
        </li>
        <li className="naviconsele "><AnchorLink href='#Amenities' className='anchorlink'>Amenities</AnchorLink></li>
        <li className="naviconsele"><AnchorLink href='#Contact' className='anchorlink'>Contact</AnchorLink></li>
        
      </div>
      <div className='getquotes flex items-center justify-center gap-2 font-bold max-md:hidden md:flex'>
        <button className='quotes bg-[#B96D79] p-3 px-8 rounded-3xl max-lg:p-2 max-lg:text-base  max-lg:px-5 max-md:text-[10px] max-md:px-4'>Get a Quote</button>
        <div className='contact flex items-center max-lg:hidden'><img src={telephone} alt="" className='h-5 mr-1 max-lg:h-4 max-md:h-3' /><p className='max-lg:text-xs max-md:text-[10px]'>062002 91302</p></div>
      </div>
    </div>
  );
};

export default Navbar;











