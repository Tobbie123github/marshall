import "./Navbar.css";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: "100%" },
};

const Navbar = () => {
  const handleMailto = () => {
    const email = 'tobbie2611@gmail.com'; 
    const mailtoLink = `mailto:${email}`;
    
    window.location.href = mailtoLink; 
  };

  

  const [isOpen, setIsOpen] = useState(false);
  const closeNav =()=>{
    setIsOpen(false);
}
const handleClick = () => {
  handleMailto();
  closeNav();
};
  return (
    <nav>
      <div className="nav_container">
        <h3>MARSHALL</h3>
        <ul>
          <li>
            <AnchorLink href="#home"  offset="120" >Home</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#about"  offset="120">About Me</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#services"  offset="120">Services</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#portfolio"  offset="120">Portfolio</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#contact"  offset="120">Contact</AnchorLink>
          </li>
        </ul>
        <div className="nav_connect" onClick={handleMailto} offset="120">Connect with me</div>
      </div>

      <div className="nav_container2">
        <h3>MARSHALL</h3>

        <motion.div
          animate={isOpen ? "open" : "closed"}
          variants={variants}
          className="side-menu"
        >
          <ul>
            <li>
              <AnchorLink href="#home" onClick={closeNav}  offset="120">Home</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#about" onClick={closeNav} offset="120">About Me</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#services" onClick={closeNav} offset="120">Services</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#portfolio" onClick={closeNav} offset="120">Portfolio</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#contact" onClick={closeNav}offset="120">Contact</AnchorLink>
            </li>
            <div className="nav_connect" onClick={handleClick} >Connect with me</div>
          </ul>
        </motion.div>
        <div className="toggleBtn">
          <span onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <IoMdClose className="btn" />
            ) : (
              <GiHamburgerMenu className="btn" />
            )}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
