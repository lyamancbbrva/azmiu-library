import { HiMiniXMark } from "react-icons/hi2";
import { Link } from "react-scroll";


function Sidebar({setSidebarStatus}:any) {
  return (
    <div className="sidebar">
        <HiMiniXMark  onClick={() => setSidebarStatus(false)}/>
        <ul>
            <li><Link  onClick={() => setSidebarStatus(false)} to='header' smooth={true} duration={500}>Home</Link></li>
            <li><Link  onClick={() => setSidebarStatus(false)} to="about-us" smooth={true} duration={500}>About us</Link></li>
            <li><Link  onClick={() => setSidebarStatus(false)} to="book" smooth={true} duration={500}>Book</Link></li>
            <li><Link  onClick={() => setSidebarStatus(false)} to="category" smooth={true} duration={500}>Category</Link></li>
            <li><Link  onClick={() => setSidebarStatus(false)} to="contact" smooth={true} duration={500}>Contact us</Link></li>
        </ul>
    </div>
  )
}

export default Sidebar