import React, { useEffect, useRef } from "react";

function CounterSection({ counters }) {
  const countersRef = useRef([]);

  useEffect(() => {
    const duration = 6000;

    const startCounter = (counterBox) => {
      const start = parseInt(counterBox.getAttribute("data-start"));
      const end = parseInt(counterBox.getAttribute("data-end"));
      const numberEl = counterBox.querySelector(".number");

      let startTime = null;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        let progress = Math.min((timestamp - startTime) / duration, 1);
        let value = Math.floor(start + (end - start) * progress);

        if (numberEl) numberEl.textContent = value;

        if (progress < 1) requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounter(entry.target);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    countersRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="counter-sec">
      <div className="container">
        <div className="row">

          {counters.map((item, index) => (
            <div key={index} className="col-lg-3 col-md-3 col-sm-12">
              <div
                className={`counter-box ${item.extraClass || ""}`}
                data-start="0"
                data-end={item.end}
                ref={(el) => (countersRef.current[index] = el)}
              >
                <div className="counter">
                  <span className="number">0</span>
                  <span className="suffix">{item.suffix}</span>
                </div>
                <div className="label">{item.label}</div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default CounterSection;