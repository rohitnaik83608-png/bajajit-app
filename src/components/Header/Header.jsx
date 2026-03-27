import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import callIcon from "../../assets/img/header-no.png";

const Header = () => {
  return (
    <section className="new-header">
      <div className="container-fluid">
        <div className="new-navbar">

          {/* Logo */}
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="new-nav">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>

              <li className="our-dropdown">
                <span><Link to="/Service">Our Services</Link></span>
                <ul className="sub-menu">
                  <li><Link to="/services/web-design">Website & Graphic Design</Link></li>
                  <li><Link to="/services/web-development">Web Development</Link></li>
                  <li><Link to="/services/mobile-app">Mobile App</Link></li>
                  <li><Link to="/services/marketing">Online Marketing</Link></li>
                  <li><Link to="/services/seo">SEO Services</Link></li>
                  <li><Link to="/services/software">Software Development</Link></li>
                </ul>
              </li>

              <li className="our-dropdown relative">
                    <span>Portfolio </span>
                   <div className="wrp sub-menu">

    {/* Web design */}
    <div>
      <h2>Web design</h2>
      <ul className="mega-ul">
        <li><Link to="/email-signature">Email Signature</Link></li>
        <li><Link to="/mobile-app">Mobile App</Link></li>
        <li><Link to="/e-commerce">E-Commerce</Link></li>
        <li><Link to="/newsletter">News Letter</Link></li>
        <li><Link to="/landing-page">Landing Page</Link></li>
        <li><Link to="/mockup">Mockup Design</Link></li>
        <li><Link to="/click-funnel">Click Funnel</Link></li>
      </ul>
    </div>

    {/* Social Media */}
    <div>
      <h2>Social Media</h2>
      <ul className="mega-ul">
        <li><Link to="/facebook-timeline">Facebook Timeline</Link></li>
        <li><Link to="/facebook-post">Facebook Post</Link></li>
        <li><Link to="/youtube-cover">Youtube Cover</Link></li>
        <li><Link to="/youtube-thumbnails">Youtube Thumbnails</Link></li>
        <li><Link to="/instagram-post">Instagram Post</Link></li>
      </ul>
    </div>

    {/* Graphic design */}
    <div>
      <h2>Graphic design</h2>
      <ul className="mega-ul">
        <li><Link to="/ad-banner">Ad Banner</Link></li>
        <li><Link to="/character-design">Character Design</Link></li>
        <li><Link to="/infographics">Infographics</Link></li>
        <li><Link to="/logo">Logo</Link></li>
        <li><Link to="/presentation">Presentation</Link></li>
      </ul>
    </div>

    {/* Print Media */}
    <div>
      <h2>Print Media</h2>
      <ul className="mega-ul">
        <li><Link to="/book-cover">Book Cover</Link></li>
        <li><Link to="/business-card">Business Card</Link></li>
        <li><Link to="/letterhead">Letter Head</Link></li>
        <li><Link to="/magazine">Magazine</Link></li>
        <li><Link to="/flyer-brochure">Flyer & Brochure</Link></li>
        <li><Link to="/pullup-banner">Pullup Banner</Link></li>
      </ul>
    </div>

    {/* Wedding Kit */}
    <div>
      <h2>Wedding Kit</h2>
      <ul className="mega-ul">
        <li><Link to="/wedding-kit-1">Wedding Kit 1</Link></li>
        <li><Link to="/wedding-kit-2">Wedding Kit 2</Link></li>
        <li><Link to="/wedding-kit-3">Wedding Kit 3</Link></li>
        <li><Link to="/wedding-kit-4">Wedding Kit 4</Link></li>
      </ul>
    </div>

  </div>
              </li>

              <li><Link to="/Training">Training Program</Link></li>
              <li><Link to="/Contact">Contact Us</Link></li>
            </ul>
          </nav>

          {/* Call Button */}
          <div className="login">
            <a href="tel:919872217838">
              <img src={callIcon} alt="Call" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Header;
