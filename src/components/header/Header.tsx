import { Element, Link } from 'react-scroll';
import { MdLocalLibrary } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { HiBars3 } from "react-icons/hi2";
import { useState } from 'react';
import Sidebar from './Sidebar';

function Header() {
  const [sidebarStatus, setSidebarStatus] = useState(false)
  return (
    <header>
      <Element name='header'>

        <nav className='container'>
            <div className="logo">
                <Link to={'/'}>
                <MdLocalLibrary />
                <span>Library</span>
                {/* <img src={logo} alt="Library Logo" /> */}
                </Link>
            </div>
            <div>
              <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to="about-us" smooth={true} duration={500}>About us</Link></li>
                <li><Link to="book" smooth={true} duration={500}>Book</Link></li>
                <li><Link to="category" smooth={true} duration={500}>Category</Link></li>
                <li><Link to="contact" smooth={true} duration={500}>Contact us</Link></li>
              </ul>
              <IoIosSearch className='search-icon'/>
              <HiBars3 onClick={() => setSidebarStatus(true)} className='bar-icon'/>
            </div>
        </nav>
        {sidebarStatus ? <Sidebar setSidebarStatus={setSidebarStatus}/> : ''}
        <div className="header-library">
            <h1>Welcome <br /> to <br /> AZMIU library</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, itaque!</p>
            <button>Get started</button>
        </div>
      </Element>
    </header>
  )
}

export default Header