import React, { useState } from "react";

function Faq() {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "What are your focus areas as a UI/UX agency?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of  type and scrambled it to make a type specimen book.",
    },
    {
      question: "Will you be updating the program?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      question: "Can I get an invoice for my purchase? Hint: Yes.",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      question: "What happens to my data if I cancel?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="row align-items-center">

        {/* Image */}
        <div className="col-lg-6 col-md-6 col-sm-12">
          <img src="../src/assets/img/faq-img.png" className="img-fluid" alt="faq" />
        </div>

        {/* FAQ Content */}
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="faq-wrapper">

            <h2 className="faq-title">
              Answer to our most common questions
            </h2>

            {faqs.map((item, index) => (
              <div className="faq-item" key={index}>
                
                <div
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  style={{ cursor: "pointer" }}
                >
                  <p>{item.question}</p>
                  <span className="icon">
                    {activeIndex === index ? "-" : "+"}
                  </span>
                </div>

                <div
                  className={`faq-answer ${
                    activeIndex === index ? "open" : ""
                  }`}
                >
                  <p>{item.answer}</p>
                </div>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}

export default Faq;