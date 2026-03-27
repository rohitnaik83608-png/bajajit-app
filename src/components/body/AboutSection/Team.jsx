import React, { useState, useEffect } from "react";

function Team() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const teamMembers = [
    {
      name: "Jatinder Bajaj",
      role: "Founder/CEO",
      img: "../src/assets/img/jatinder.png",
    },
    {
      name: "Soma rani",
      role: "Sr. UI/UX designer",
      img: "../src/assets/img/nisha.jpg",
    },
    {
      name: "Tamanna Bajaj",
      role: "Sr. Web and Graphic Designer",
      img: "../src/assets/img/nisha.jpg",
    },
    {
      name: "Khajan singh",
      role: "Web and Graphic Designer",
      img: "../src/assets/img/nisha.jpg",
    },
    {
      name: "Manoj Kumar",
      role: "Sr. Graphic Designer",
      img: "../src/assets/img/manoj.jpg",
    },
    {
      name: "Attar Singh",
      role: "Sr. Web developer",
      img: "../src/assets/img/nisha.jpg",
    },
    {
      name: "Rohit Kumar",
      role: "UI/UX designer",
      img: "../src/assets/img/rohit.jpg",
    },
    {
      name: "Umesh Thakur",
      role: "CAD Designer",
      img: "../src/assets/img/nisha.jpg",
    },
    {
      name: "Monika",
      role: "Full Stack Developer",
      img: "../src/assets/img/nisha.jpg",
    },
    {
      name: "Muskan Valecha",
      role: "Jr. Graphic Designer",
      img: "../src/assets/img/muskan.jpg",
    },
    {
      name: "Nisha Rani",
      role: "Jr. Front-End Developer",
      img: "../src/assets/img/nisha.jpg",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="team-section">
      <div className="container">

        <div className="row">
          <h2>
            Meet our innovative <br /> team members
          </h2>
        </div>

        <div className="row">

          {/* LEFT SIDE */}
          <div className="col-lg-7 col-md-7 col-sm-12">
            <div className="team-list">

              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className={`team-item ${
                    activeIndex === index ? "active" : ""
                  }`}
                  onMouseEnter={!isMobile ? () => handleChange(index) : null}
                  onClick={isMobile ? () => handleChange(index) : null}
                  style={{ cursor: "pointer" }}
                >
                  <span className="team-name">{member.name}</span>
                  <span className="team-role">{member.role}</span>
                  <i className="fa-solid fa-arrow-right arrow-icon"></i>
                </div>
              ))}

            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="col-lg-5 col-md-5 col-sm-12 d-flex align-items-center justify-content-center">
            <img
              src={teamMembers[activeIndex].img}
              className="img-fluid team-photo"
              alt="Team Member"
              style={{ transition: "opacity 0.3s ease" }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Team;