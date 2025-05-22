import { MdLocalLibrary } from "react-icons/md";
import facebook from './../../assets/imgs/Facebook.png'
import linkedin from './../../assets/imgs/linkedin.webp'
import youtube from './../../assets/imgs/youtube.png'
import twitter from './../../assets/imgs/twitter.webp'
import instagram from './../../assets/imgs/instagram.webp'
import { Link } from 'react-scroll';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="logo">
          <MdLocalLibrary/>
          <h3>Library</h3>
        </div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit eaque distinctio eos id optio maiores. Ab optio voluptate quos rem voluptatem amet pariatur excepturi ducimus.</p>
        <div className="icons">
          <img src={facebook} alt="Facebook" id="facebook" />
          <img src={twitter} alt="Twitter"  id="twitter"/>
          <img src={linkedin} alt="Linkedin" id="linkedin" />
          <img src={instagram} alt="Instagram" id="instagram" />
          <img src={youtube} alt="Youtube" id="youtube" />
        </div>
        <ul>
                <li><Link  to='header' smooth={true} duration={500}>Home</Link></li>
                <li><Link to="about-us" smooth={true} duration={500}>About us</Link></li>
                <li><Link to="book" smooth={true} duration={500}>Book</Link></li>
                <li><Link to="category" smooth={true} duration={500}>Category</Link></li>
                <li><Link to="contact" smooth={true} duration={500}>Contact us</Link></li>
        </ul>
      </div>
      <div className="copyright">
        <span>Copyright &copy; All right reserved</span>
      </div>
    </footer>
  )
}

export default Footer