
import locationIcon from "../../../assets/img/contact-location.png";
import phoneIcon from "../../../assets/img/contact-phon.png";
import emailIcon from "../../../assets/img/contact-email.png";
import fiverr from "../../../assets/img/fiver.png";
import upwork from "../../../assets/img/upwork.png";

function ContactForm() {
  return (
    <section className="container inm">
      <div className="row align-items-start">

        {/* LEFT SIDE */}
        <div className="col-md-6 col-lg-7 mb-4">
          <div className="left-border">
            <h2 className="fw-bold">
              To make requests for 
              further information, 
              contact us via our 
              social channels.
            </h2>

            <p className="mt-3" style={{ maxWidth: "700px" }}>
              Got questions or need more details? Just drop us a message on our social channels.
              We’re active, responsive, and ready to guide you with the information you’re looking for.
              Stay connected — your answers are just a click away.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE CARD */}
        <div className="col-md-6 col-lg-5">
          <div className="contact-card">

            <p className="fw-bold mb-1">
              <img src={locationIcon} alt="location" /> Address
            </p>
            <p className="text-muted">
              <a
                href="https://www.google.com/maps/search/%23114,+Pride+City,+Opp.+Court+Complex,+Kharar,+Punjab+140301+/@30.7547448,76.6350778,565m/data=!3m2!1e3!4b1"
                target="_blank"
                rel="noopener noreferrer"
              >
                #114, Pride City, Opp. Court Complex,<br />
                Kharar, Punjab 140301
              </a>
            </p>

            <p className="fw-bold mb-1">
              <img src={phoneIcon} alt="phone" /> Phone
            </p>
            <p className="text-muted">
              <a href="tel:919872217838">+91 98722-17838</a>
            </p>

            <p className="fw-bold mb-1">
              <img src={emailIcon} alt="email" /> Email
            </p>
            <p className="text-muted mb-0">
              <a href="mailto:bajajitsolution24@gmail.com">
                bajajitsolution24@gmail.com
              </a>
            </p>
            <p className="text-muted">
              <a href="mailto:contact@bajajitsolution.com">
                contact@bajajitsolution.com
              </a>
            </p>

            <h4 className="fw-bold mt-4 mb-3">Hire me on</h4>

            <div className="hire d-flex align-items-center">
              <img src={fiverr} alt="Fiverr" />
              <img src={upwork} alt="Upwork" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default ContactForm;