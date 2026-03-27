function Company() {
  return (
    <section className="company">
      <div className="container">
        
        <div className="row">
          <div className="col-lg-8">
            <h2>
              We transform companies
              <br />
              through design innovation
            </h2>

            <p>
              At the heart of our approach is design innovation that drives meaningful change. 
              We blend creativity with technology to craft user-centered digital experiences 
              that not only look great but also solve real business challenges. From UI/UX 
              to complete brand transformation, our design strategies help companies stand out, 
              stay ahead, and grow with purpose.
            </p>

            <a href="#">
              Get to Know us{" "}
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>

        <div className="row com-img">
          <div className="col-lg-3 col-md-6 col-12">
            <p>
              <img src="../src/assets/img/com-1.jpg" alt="company" />
            </p>
          </div>

          <div className="col-lg-3 col-md-6 col-12">
            <p>
              <img src="../src/assets/img/com-2.jpg" alt="company" />
            </p>
          </div>

          <div className="col-lg-3 col-md-6 col-12">
            <p>
              <img src="../src/assets/img/com-3.jpg" alt="company" />
            </p>
          </div>

          <div className="col-lg-3 col-md-6 col-12">
            <p>
              <img src="../src/assets/img/com-4.jpg" alt="company" />
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Company;