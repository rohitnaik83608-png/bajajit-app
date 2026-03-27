import { Link } from "react-router-dom";
import fb from "../../assets/img/facebook.png";
import insta from "../../assets/img/in.png";
import linkedin from "../../assets/img/Lindin.png";

import call from "../../assets/img/call.png";
import landline from "../../assets/img/landline.png";
import mail from "../../assets/img/mail.png";
import teams from "../../assets/img/teams.png";
import whatsapp from "../../assets/img/whatsapp.png";


function Footer() {
  return (
    <section className="footer">

      {/* Top Social Section */}
      <div className="lets-talk container-fluid">
        <div className="container">
          <div className="cont">
            <h2>Let’s Talk</h2>
            <ul>
              <li>
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                  <img src={fb} alt="facebook" />
                </a>
              </li>

              <li>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                  <img src={insta} alt="instagram" />
                </a>
              </li>

              <li>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                  <img src={linkedin} alt="linkedin" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="container links">
        <div className="row">

          {/* Services */}
          <div className="col-lg-3 col-md-3 col-12">
            <h2>Our Services</h2>
            <ul>
              <li><Link to="/website-design">Website Design</Link></li>
              <li><Link to="/graphic-design">Graphic Design</Link></li>
              <li><Link to="/seo-services">SEO Services</Link></li>
              <li><Link to="/responsive-design">Responsive Web Design</Link></li>
              <li><Link to="/web-hosting">Web Hosting Suggestions</Link></li>
              <li><Link to="/training">Web Design Training</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="col-lg-3 col-md-3 col-12">
            <h2>Our Solutions</h2>
            <ul>
              <li><Link to="/ecommerce">Ecommerce Web Design</Link></li>
              <li><Link to="/classified">Classified Website</Link></li>
              <li><Link to="/event-management">Event Management</Link></li>
              <li><Link to="/booking-system">Appointment Booking</Link></li>
              <li><Link to="/restaurant">Restaurant Website</Link></li>
            </ul>
          </div>

          {/* Domain */}
          <div className="col-lg-3 col-md-3 col-12">
            <h2>Domain Expertise</h2>
            <ul>
              <li><Link to="/real-estate">Real Estate</Link></li>
              <li><Link to="/hotel">Hotel</Link></li>
              <li><Link to="/recruitment">Recruitment</Link></li>
              <li><Link to="/accountants">Accountants</Link></li>
              <li><Link to="/lawyers">Lawyers</Link></li>
              <li><Link to="/travel">Travel</Link></li>
            </ul>
          </div>

          {/* Contact Desktop */}
          <div className="col-lg-3 col-md-3 col-12 content-desk">
            <h2>Contact us</h2>
            <ul className="contact-col">
              <li>
                <img src={call} alt="" />
                <a href="tel:919872217838">(+91) 9872217838</a>
              </li>

              <li>
                <img src={landline} alt="" />
                <a href="tel:+911604608569">(+91) 1604608569</a>
              </li>

              <li>
                <img src={mail} alt="" />
                <a href="mailto:bajajitsolution24@gmail.com">
                  bajajitsolution24@gmail.com
                </a>
              </li>

              <li>
                <img src={teams} alt="" />
                <span>bestsolutionindia</span>
              </li>

              <li>
                <img src={whatsapp} alt="" />
                <a href="https://api.whatsapp.com/send?phone=919872217838">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Mobile */}
          <div className="col-lg-3 col-md-3 col-12 content-mobile">
            <h2>Contact us</h2>
            <ul className="contact-col">
              <li><a href="tel:919872217838"><img src={call} alt="" />Call Us</a></li>
              <li><a href="mailto:bajajitsolution24@gmail.com"><img src={mail} alt="" />Email</a></li>
              <li><a href="#"><img src={teams} alt="" />Team</a></li>
              <li><a href="https://api.whatsapp.com/send?phone=919872217838"><img src={whatsapp} alt="" />Whatsapp</a></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div className="copyright-sec">
        <p className="Copyright">
          Copyright © 2026 Bajaj IT Solution LLP
        </p>
      </div>

    </section>
  );
}

export default Footer;