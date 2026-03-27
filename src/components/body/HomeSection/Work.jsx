import { Link } from "react-router-dom";
function Work() {
  return (
    <section className="work">
      <div className="container">
        
        <h2>Our Work</h2>
        <p>
          Our work reflects our passion for quality and innovation. From dynamic websites 
          to intuitive mobile apps, we craft digital solutions that drive results. Each 
          project is built with attention to detail, ensuring performance, usability, and 
          client satisfaction at every step.
        </p>

        <div className="row work-img work-m">
          <div className="col-lg-6 col-md-6 col-12">
            <Link to="/shaurya-robotics">
              <img src="../src/assets/img/work-1.jpg" alt="Shaurya Robotics" />
              <h3>Shaurya Robotics</h3>
            </Link>
          </div>

          <div className="col-lg-6 col-md-6 col-12 bttm">
            <Link to="/faarmer">
              <img src="../src/assets/img/work-2.jpg" alt="Faarmer" />
              <h3>Faarmer</h3>
            </Link>
          </div>

          <div className="col-lg-9 col-md-9 col-12 bttm">
            <Link to="/wings">
              <img src="../src/assets/img/work-3.jpg" alt="Wings" />
              <h3>Wings</h3>
            </Link>
          </div>
        </div>

        <div className="row work-img">
          <div className="col-lg-6 col-md-6 col-12 bttm">
            <img src="../src/assets/img/work-4.jpg" alt="Pampered Prince-ss Glamour Salon" />
            <h3>Pampered Prince-ss Glamour Salon</h3>
          </div>

          <div className="col-lg-6 col-md-6 col-12">
            <img src="../src/assets/img/work-5.jpg" alt="Golf for money" />
            <h3>Golf for money</h3>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Work;