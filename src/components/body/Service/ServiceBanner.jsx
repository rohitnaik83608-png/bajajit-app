
function ServiceBanner() {
  return (
    <section className="bnr-sec service-bnr">
      <div className="container">

        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-12 bnr-text">
            <h2>Services we can help you with</h2>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 bnr-text">
            <p>
              We offer a wide range of customized services to help your business thrive in the digital world.
              From website design and development to digital marketing, branding, content creation, SEO,
              and social media management — our expert team is here to turn your ideas into results.
              Whether you need a full-scale digital strategy or targeted support,
              we’re committed to helping you grow, connect, and succeed.
            </p>
          </div>
        </div>

        <div className="service-wrapper service-page">

          {/* Service 1 */}
          <a
            href="#"
            id="design"
            className="service-item wow fadeInUp"
            data-wow-delay=".3s"
            data-wow-duration="1s"
            style={{
              visibility: "visible",
              animationDuration: "1s",
              animationDelay: "0.3s",
              animationName: "fadeInUp",
            }}
          >
            <div className="service-info left">
              <span className="number">001</span>
              <h4 className="title">Website Design & Development</h4>
            </div>
            <div className="service-info right">
              <p className="text">
                At Bajaj IT Solution LLP, we build websites that attract, engage, and convert.
                Your website is the digital face of your business—and we ensure it looks stunning,
                loads fast, and drives real results.
              </p>
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
          </a>

          {/* Service 2 */}
          <a href="#" id="market" className="service-item wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s"
            style={{ visibility: "visible", animationDuration: "1s", animationDelay: "0.3s", animationName: "fadeInUp" }}>
            <div className="service-info left">
              <span className="number">002</span>
              <h4 className="title">Digital Marketing Services</h4>
            </div>
            <div className="service-info right">
              <p className="text">
                Grow your brand, reach new customers, and increase conversions with our complete digital marketing solutions.
              </p>
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
          </a>

          {/* Service 3 */}
          <a href="#" id="social" className="service-item wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s"
            style={{ visibility: "visible", animationDuration: "1s", animationDelay: "0.3s", animationName: "fadeInUp" }}>
            <div className="service-info left">
              <span className="number">003</span>
              <h4 className="title">Social Media Marketing (SMM)</h4>
            </div>
            <div className="service-info right">
              <p className="text">
                Your customers are on social media—your brand should be too.
                We manage your social presence with powerful strategies that connect, engage, and convert.
              </p>
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
          </a>

          {/* Service 4 */}
          <a href="#" id="seo" className="service-item wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s"
            style={{ visibility: "visible", animationDuration: "1s", animationDelay: "0.3s", animationName: "fadeInUp" }}>
            <div className="service-info left">
              <span className="number">004</span>
              <h4 className="title">Search Engine Optimization (SEO)</h4>
            </div>
            <div className="service-info right">
              <p className="text">
                Get found on Google before your competitors.
                Our SEO services help you rank higher, increase traffic, and build long-term online authority.
              </p>
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
          </a>

          {/* Service 5 */}
          <a href="#" id="meta-ads" className="service-item wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s"
            style={{ visibility: "visible", animationDuration: "1s", animationDelay: "0.3s", animationName: "fadeInUp" }}>
            <div className="service-info left">
              <span className="number">005</span>
              <h4 className="title">Meta Ads (Facebook & Instagram Ads)</h4>
            </div>
            <div className="service-info right">
              <p className="text">
                Reach millions of potential customers on Meta platforms.
                We create thumb-stopping ads with the right targeting and messaging to bring high-quality leads and sales.
              </p>
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
          </a>

          {/* Service 6 */}
          <a href="#" id="graphic" className="service-item wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s"
            style={{ visibility: "visible", animationDuration: "1s", animationDelay: "0.3s", animationName: "fadeInUp" }}>
            <div className="service-info left">
              <span className="number">006</span>
              <h4 className="title">Graphic Designing Services</h4>
            </div>
            <div className="service-info right">
              <p className="text">
                Good design builds trust. Great design builds brands.
                We offer premium graphic design services that make your brand visually strong and unforgettable.
              </p>
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
          </a>

          {/* Service 7 */}
          <a href="#" id="branding" className="service-item wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s"
            style={{ visibility: "visible", animationDuration: "1s", animationDelay: "0.3s", animationName: "fadeInUp" }}>
            <div className="service-info left">
              <span className="number">007</span>
              <h4 className="title">Branding & Logo Design</h4>
            </div>
            <div className="service-info right">
              <p className="text">
                Your identity is your first impression.
                We create logos and brand identities that reflect who you are and what you stand for.
              </p>
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
          </a>

          {/* Service 8 */}
          <a href="#" id="video" className="service-item wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s"
            style={{ visibility: "visible", animationDuration: "1s", animationDelay: "0.3s", animationName: "fadeInUp" }}>
            <div className="service-info left">
              <span className="number">008</span>
              <h4 className="title">Video Editing & Motion Graphics</h4>
            </div>
            <div className="service-info right">
              <p className="text">
                Engage your audience with high-quality video content.
              </p>
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
          </a>

          {/* Service 9 */}
          <a href="#" id="training" className="service-item wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s"
            style={{ visibility: "visible", animationDuration: "1s", animationDelay: "0.3s", animationName: "fadeInUp" }}>
            <div className="service-info left">
              <span className="number">009</span>
              <h4 className="title">Training & Workshops</h4>
            </div>
            <div className="service-info right">
              <p className="text">
                We help students and professionals upgrade their skills with practical, real-world learning.
              </p>
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
          </a>

        </div>
      </div>
    </section>
  );
}

export default ServiceBanner;