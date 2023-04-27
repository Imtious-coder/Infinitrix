import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import Meta from "../../components/Meta/Meta";
import "./Contact.scss";

const Contact = () => {
  return (
    <>
      <Meta title={"Contact US"} />
      <section className="contact-wrapper">
        <div className="hero py-5">
          <h2 className="heading fw-bold white mb-0">Contact US</h2>
        </div>
        <div className="container-lg py-5">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="info">
                <FaMapMarkerAlt className="fs-1" />
                <h3 className="sub-heading text-start my-4">DHAKA OFFICE</h3>
                <p className="mb-0">
                  <strong>Address: </strong> House-60, Road-03, Block Niketon,
                  Gulshan-1, Dhaka
                </p>
                <p className="mb-0">
                  <strong>Email us at: </strong> info@intelsense.ai
                </p>
                <p>
                  <strong>Phone: </strong> +8801625555007
                </p>
              </div>
              <div className="map">
                <iframe
                  className="shadow-sm"
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14605.102720640843!2d90.40753300346236!3d23.773195517369402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7829894dd41%3A0x7191fa7e24aa22b9!2sGulshan%201%2C%20Dhaka%201212!5e0!3m2!1sen!2sbd!4v1682589984033!5m2!1sen!2sbd"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="col-12 col-md-6 my-auto ps-md-5 mt-4 mt-md-0">
              <form>
                <p className="fw-bold text-primary mb-2">Name</p>
                <input
                  type="text"
                  name="FirstName"
                  className="form-control mb-3"
                  id="validationTooltip01"
                  placeholder="Full name ✍🏻"
                  required
                />
                <p className="fw-bold text-primary mb-2">Email</p>
                <input
                  type="email"
                  name="Email"
                  className="form-control mb-3"
                  placeholder="Your E-mail 📧"
                  id="validationTooltipUsername"
                  aria-describedby="validationTooltipUsernamePrepend"
                  required
                />
                <p className="fw-bold text-primary mb-2">Phone</p>
                <input
                  type="number"
                  name="number"
                  className="form-control mb-3"
                  placeholder="Enter your phone number 📱"
                  id="validationTooltipUsername"
                  aria-describedby="validationTooltipUsernamePrepend"
                  required
                />
                <p className="fw-bold text-primary mb-2">Message</p>
                <input
                  type="text"
                  name="Message"
                  className="form-control pt-5 pb-5 text-center mb-3"
                  placeholder="Type your message here... 👩🏻‍💻"
                  id="validationTooltip05"
                  required
                />
                <p className="agreement px-4 text-center">
                  By submitting this form , I agree to receive communication
                  from IntelsenseAI in connection with enquery.My information
                  will be processed in accordance with IntelsenceAI's Privacy
                  Policy.
                </p>
                <button
                  className="button2 mt-4 hvr-grow d-block mx-auto"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
