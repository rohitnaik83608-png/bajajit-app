import React, { useState } from "react";

function Form() {

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData); // yaha API call kar sakte ho

    alert("Form Submitted Successfully!");
  };

  return (
    <section className="contact-form">
      <div className="container-fluid">
        <div className="row">

          {/* LEFT SIDE FORM */}
          <div className="col-lg-6 col-md-12 col-12">
            <div className="form">

              <h2>NEW PROJECT REQUEST</h2>
              <p>
                Get in touch with us using the contact form below. Need support?
                Don’t forget to enclose your membership username into the message.
              </p>

              <form onSubmit={handleSubmit}>

                <div className="field">
                  <input
                    type="text"
                    placeholder="First Name*"
                    name="fname"
                    value={formData.fname}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Last Name*"
                    name="lname"
                    value={formData.lname}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="field">
                  <input
                    type="email"
                    placeholder="Email*"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone no.*"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="field">
                  <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="field">
                  <button type="submit">Submit</button>
                </div>

              </form>
            </div>
          </div>

          {/* RIGHT SIDE MAP */}
          <div className="col-lg-6 col-md-12 col-12 map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3428.6545658798095!2d76.63543511446211!3d30.756203191553606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feef5e87eaaab%3A0x3f71846fdc66dc27!2sBajaj+IT+Solution!5e0!3m2!1sen!2sin!4v1552710217288"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Form;