import React, { useEffect, useRef } from "react";

function Progress() {
  const skillsRef = useRef([]);

  useEffect(() => {
    const startSkill = (skill) => {
      const fill = skill.querySelector(".skill-fill");
      const percentText = skill.querySelector(".skill-percent");
      const target = +fill.getAttribute("data-target");

      let count = 0;

      const interval = setInterval(() => {
        if (count >= target) {
          clearInterval(interval);
        } else {
          count++;
          fill.style.width = count + "%";
          percentText.textContent = count + "%";
        }
      }, 20);
    };

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startSkill(entry.target);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    skillsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="progress-sec">
      <div className="row align-items-center justify-content-between">

        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="skills-section">
            
            <h2 className="skills-heading">
              We are increasing business success with technology
            </h2>

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>

            {/* Skill 1 */}
            <div
              className="skill"
              ref={(el) => (skillsRef.current[0] = el)}
            >
              <div className="skill-text">
                <p>UI/UX Design</p>
                <p className="skill-percent">0%</p>
              </div>
              <div className="skill-bar">
                <div className="skill-fill" data-target="89"></div>
              </div>
            </div>

            {/* Skill 2 */}
            <div
              className="skill"
              ref={(el) => (skillsRef.current[1] = el)}
            >
              <div className="skill-text">
                <p>Web Development</p>
                <p className="skill-percent">0%</p>
              </div>
              <div className="skill-bar">
                <div className="skill-fill" data-target="95"></div>
              </div>
            </div>

            {/* Skill 3 */}
            <div
              className="skill"
              ref={(el) => (skillsRef.current[2] = el)}
            >
              <div className="skill-text">
                <p>Digital Marketing</p>
                <p className="skill-percent">0%</p>
              </div>
              <div className="skill-bar">
                <div className="skill-fill" data-target="84"></div>
              </div>
            </div>

            {/* Skill 4 */}
            <div
              className="skill"
              ref={(el) => (skillsRef.current[3] = el)}
            >
              <div className="skill-text">
                <p>Content Marketing</p>
                <p className="skill-percent">0%</p>
              </div>
              <div className="skill-bar">
                <div className="skill-fill" data-target="75"></div>
              </div>
            </div>

          </div>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12 progress-sec-img">
          <img src="../src/assets/img/progress.png" alt="progress" />
        </div>

      </div>
    </section>
  );
}

export default Progress