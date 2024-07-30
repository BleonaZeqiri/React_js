import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const closeNavbar = () => {
    navRef.current.classList.remove("responsive_nav");
  };

  return (
    <header>
      <h3>Bleona</h3>
      <nav ref={navRef}>
        <Link to="/" onClick={closeNavbar}>
          Home
        </Link>
        <Link to="/about" onClick={closeNavbar}>
          About
        </Link>
        <Link to="/first-task" onClick={closeNavbar}>
          FirstTask
        </Link>
        <Link to="/second-task" onClick={closeNavbar}>
          SecondTask
        </Link>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
