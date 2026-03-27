import { Link } from "react-router-dom";

function Services() {
  return (
   <section className="servic home-service">
  <div>
    <h2>
      Services we can help <span>you with</span>
    </h2>

    <p className="service-p">
      We offer a wide range of customized services to help your business thrive in the digital world. From website design and development to digital marketing, branding, content creation, SEO, and social media management — our expert team is here to turn your ideas into results. Whether you need a full-scale digital strategy or targeted support, we’re committed to helping you grow, connect, and succeed.
    </p>

    <div className="service-wrapper row">

      {/* Left Side */}
      <div className="col-lg-6">

        <Link to="/services#design" className="service-item">
          <div className="service-info left">
            <span className="number">001</span>
            <h4 className="title">Website Design & Development</h4>
          </div>
          <div className="service-info right">
            <div className="service-btn">
                <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
    >
      <path
        d="M15.6474 1.76702C15.6898 1.21636 15.2777 0.735626 14.7271 0.693267L5.7536 0.00299931C5.20294 -0.0393593 4.72221 0.372699 4.67985 0.923357C4.63749 1.47401 5.04955 1.95475 5.60021 1.99711L13.5766 2.61068L12.9631 10.5871C12.9207 11.1378 13.3328 11.6185 13.8834 11.6609C14.4341 11.7032 14.9148 11.2912 14.9572 10.7405L15.6474 1.76702ZM0.650391 13.6903L1.30118 14.4496L15.3012 2.44958L14.6504 1.69032L13.9996 0.931066L-0.000400722 12.9311L0.650391 13.6903Z"
        fill="#222222"
      />
    </svg>
            </div>
          </div>
        </Link>

        <Link to="/services#market" className="service-item">
          <div className="service-info left">
            <span className="number">002</span>
            <h4 className="title">Digital Marketing Services</h4>
          </div>
          <div className="service-info right">
            <div className="service-btn">
                <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
    >
      <path
        d="M15.6474 1.76702C15.6898 1.21636 15.2777 0.735626 14.7271 0.693267L5.7536 0.00299931C5.20294 -0.0393593 4.72221 0.372699 4.67985 0.923357C4.63749 1.47401 5.04955 1.95475 5.60021 1.99711L13.5766 2.61068L12.9631 10.5871C12.9207 11.1378 13.3328 11.6185 13.8834 11.6609C14.4341 11.7032 14.9148 11.2912 14.9572 10.7405L15.6474 1.76702ZM0.650391 13.6903L1.30118 14.4496L15.3012 2.44958L14.6504 1.69032L13.9996 0.931066L-0.000400722 12.9311L0.650391 13.6903Z"
        fill="#222222"
      />
    </svg>
            </div>
          </div>
        </Link>

        <Link to="/services#social" className="service-item">
          <div className="service-info left">
            <span className="number">003</span>
            <h4 className="title">Social Media Marketing (SMM)</h4>
          </div>
          <div className="service-info right">
            <div className="service-btn">
              <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
    >
      <path
        d="M15.6474 1.76702C15.6898 1.21636 15.2777 0.735626 14.7271 0.693267L5.7536 0.00299931C5.20294 -0.0393593 4.72221 0.372699 4.67985 0.923357C4.63749 1.47401 5.04955 1.95475 5.60021 1.99711L13.5766 2.61068L12.9631 10.5871C12.9207 11.1378 13.3328 11.6185 13.8834 11.6609C14.4341 11.7032 14.9148 11.2912 14.9572 10.7405L15.6474 1.76702ZM0.650391 13.6903L1.30118 14.4496L15.3012 2.44958L14.6504 1.69032L13.9996 0.931066L-0.000400722 12.9311L0.650391 13.6903Z"
        fill="#222222"
      />
    </svg>
            </div>
          </div>
        </Link>

        <Link to="/services#seo" className="service-item">
          <div className="service-info left">
            <span className="number">004</span>
            <h4 className="title">Search Engine Optimization (SEO)</h4>
          </div>
          <div className="service-info right">
            <div className="service-btn">
                <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
    >
      <path
        d="M15.6474 1.76702C15.6898 1.21636 15.2777 0.735626 14.7271 0.693267L5.7536 0.00299931C5.20294 -0.0393593 4.72221 0.372699 4.67985 0.923357C4.63749 1.47401 5.04955 1.95475 5.60021 1.99711L13.5766 2.61068L12.9631 10.5871C12.9207 11.1378 13.3328 11.6185 13.8834 11.6609C14.4341 11.7032 14.9148 11.2912 14.9572 10.7405L15.6474 1.76702ZM0.650391 13.6903L1.30118 14.4496L15.3012 2.44958L14.6504 1.69032L13.9996 0.931066L-0.000400722 12.9311L0.650391 13.6903Z"
        fill="#222222"
      />
    </svg>
            </div>
          </div>
        </Link>

        <Link to="/services#meta-ads" className="service-item">
          <div className="service-info left">
            <span className="number">005</span>
            <h4 className="title">
              Meta Ads (Facebook & Instagram Ads)
            </h4>
          </div>
          <div className="service-info right">
            <div className="service-btn">
               <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
    >
      <path
        d="M15.6474 1.76702C15.6898 1.21636 15.2777 0.735626 14.7271 0.693267L5.7536 0.00299931C5.20294 -0.0393593 4.72221 0.372699 4.67985 0.923357C4.63749 1.47401 5.04955 1.95475 5.60021 1.99711L13.5766 2.61068L12.9631 10.5871C12.9207 11.1378 13.3328 11.6185 13.8834 11.6609C14.4341 11.7032 14.9148 11.2912 14.9572 10.7405L15.6474 1.76702ZM0.650391 13.6903L1.30118 14.4496L15.3012 2.44958L14.6504 1.69032L13.9996 0.931066L-0.000400722 12.9311L0.650391 13.6903Z"
        fill="#222222"
      />
    </svg>
            </div>
          </div>
        </Link>

      </div>

      {/* Right Side */}
      <div className="col-lg-6">

        <Link to="/services#graphic" className="service-item">
          <div className="service-info left">
            <span className="number">006</span>
            <h4 className="title">Graphic Designing Services</h4>
          </div>
          <div className="service-info right">
            <div className="service-btn">
                <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
    >
      <path
        d="M15.6474 1.76702C15.6898 1.21636 15.2777 0.735626 14.7271 0.693267L5.7536 0.00299931C5.20294 -0.0393593 4.72221 0.372699 4.67985 0.923357C4.63749 1.47401 5.04955 1.95475 5.60021 1.99711L13.5766 2.61068L12.9631 10.5871C12.9207 11.1378 13.3328 11.6185 13.8834 11.6609C14.4341 11.7032 14.9148 11.2912 14.9572 10.7405L15.6474 1.76702ZM0.650391 13.6903L1.30118 14.4496L15.3012 2.44958L14.6504 1.69032L13.9996 0.931066L-0.000400722 12.9311L0.650391 13.6903Z"
        fill="#222222"
      />
    </svg>
            </div>
          </div>
        </Link>

        <Link to="/services#branding" className="service-item">
          <div className="service-info left">
            <span className="number">007</span>
            <h4 className="title">Branding & Logo Design</h4>
          </div>
          <div className="service-info right">
            <div className="service-btn">
                <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
    >
      <path
        d="M15.6474 1.76702C15.6898 1.21636 15.2777 0.735626 14.7271 0.693267L5.7536 0.00299931C5.20294 -0.0393593 4.72221 0.372699 4.67985 0.923357C4.63749 1.47401 5.04955 1.95475 5.60021 1.99711L13.5766 2.61068L12.9631 10.5871C12.9207 11.1378 13.3328 11.6185 13.8834 11.6609C14.4341 11.7032 14.9148 11.2912 14.9572 10.7405L15.6474 1.76702ZM0.650391 13.6903L1.30118 14.4496L15.3012 2.44958L14.6504 1.69032L13.9996 0.931066L-0.000400722 12.9311L0.650391 13.6903Z"
        fill="#222222"
      />
    </svg>
            </div>
          </div>
        </Link>

        <Link to="/services#video" className="service-item">
          <div className="service-info left">
            <span className="number">008</span>
            <h4 className="title">Video Editing & Motion Graphics</h4>
          </div>
          <div className="service-info right">
            <div className="service-btn">
                <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
    >
      <path
        d="M15.6474 1.76702C15.6898 1.21636 15.2777 0.735626 14.7271 0.693267L5.7536 0.00299931C5.20294 -0.0393593 4.72221 0.372699 4.67985 0.923357C4.63749 1.47401 5.04955 1.95475 5.60021 1.99711L13.5766 2.61068L12.9631 10.5871C12.9207 11.1378 13.3328 11.6185 13.8834 11.6609C14.4341 11.7032 14.9148 11.2912 14.9572 10.7405L15.6474 1.76702ZM0.650391 13.6903L1.30118 14.4496L15.3012 2.44958L14.6504 1.69032L13.9996 0.931066L-0.000400722 12.9311L0.650391 13.6903Z"
        fill="#222222"
      />
    </svg>
            </div>
          </div>
        </Link>

        <Link to="/services#training" className="service-item">
          <div className="service-info left">
            <span className="number">009</span>
            <h4 className="title">Training & Workshops</h4>
          </div>
          <div className="service-info right">
            <div className="service-btn">
               <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
    >
      <path
        d="M15.6474 1.76702C15.6898 1.21636 15.2777 0.735626 14.7271 0.693267L5.7536 0.00299931C5.20294 -0.0393593 4.72221 0.372699 4.67985 0.923357C4.63749 1.47401 5.04955 1.95475 5.60021 1.99711L13.5766 2.61068L12.9631 10.5871C12.9207 11.1378 13.3328 11.6185 13.8834 11.6609C14.4341 11.7032 14.9148 11.2912 14.9572 10.7405L15.6474 1.76702ZM0.650391 13.6903L1.30118 14.4496L15.3012 2.44958L14.6504 1.69032L13.9996 0.931066L-0.000400722 12.9311L0.650391 13.6903Z"
        fill="#222222"
      />
    </svg>
            </div>
          </div>
        </Link>

      </div>

    </div>
  </div>
</section>
  );
}

export default Services;