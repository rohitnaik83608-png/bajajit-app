import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="header mobil">
      <div className="container-fluid">
        <div className="nav-front">

          <button className="hamburger" onClick={() => setOpen(!open)}>
            ☰
          </button>

          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>

        </div>

        {open && (
          <div className="mobile-menu">
            <ul>
              <li><Link to="/" onClick={()=>setOpen(false)}>Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/training">Training</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        )}

      </div>
    </section>
  );
};

export default MobileMenu;
