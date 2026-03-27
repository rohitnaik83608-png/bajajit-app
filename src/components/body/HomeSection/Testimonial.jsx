
import React, { useEffect } from "react";

function Testimonial() {

  useEffect(() => {
    // Script dynamically load karne ke liye
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.defer = true;
    script.setAttribute("data-use-service-core", "");
    document.body.appendChild(script);
  }, []);

  return (
    <section className="test">
      <div className="container">
        <div
          className="elfsight-app-c6173b8f-b30d-4a33-a51d-56f713ee80c4"
          data-elfsight-app-lazy
        ></div>
      </div>
    </section>
  );
}

export default Testimonial;