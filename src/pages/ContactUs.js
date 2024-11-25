import React from "react";
import "../styles/ContactUs.css";
import bgimg from "../images/Glow-1.png";
import phone from "../images/Phone.png";
import GoogleMap from "../pages/GoogleMap";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa6";

function ContactUs() {
  return (
    <div>
      <div className="home-container">
        <div className="home-we-provide">
          <h3>CONTACT US</h3>
        </div>
      </div>
      <div className="dotedline-accordion">
        <img src={bgimg} alt="" />
      </div>
      {/* section1 */}
      <div className="contact-us-main">
        <div className="contact-us-main-left">
          <h3>CONNECT WITH US</h3>
          <p>
            Qorem ipsum dolor sit amet, consect adipiscing elit. li dolor sit{" "}
            <br />
            amet, consect adipiscing el putate li
          </p>
          <div className="features-Help contact-us-gap">
            <div className="feature-Help section-gapc2">
              <MdEmail />

              <div className="section-space">
                <p>Selmorebillboards!23@gmail.coms</p>
              </div>
            </div>
            <div className="section-gapc3">
              <FaPhoneFlip />

              <div className="feature-Help">
                <p>(+92) 123 678904</p>
              </div>
            </div>
            <div className="ADDRESS">
              <h3>ADDRESS</h3>
              <div className="feature-Help section-gapc">
                <FaLocationDot />
                <div className="section-space">
                  <p>
                    Vorem ipsum dolor sit amet, consectetur adipiscing elitm, .
                  </p>
                </div>
              </div>
              <div className="feature-Help section-gapc">
                <FaLocationDot />
                <div className="section-space">
                  <p>
                    Vorem ipsum dolor sit amet, consectetur adipiscing elitm, .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-us-main-right">
          <h3>SEND US A MESSAGE</h3>
          <div className="contactus-main-from">
            <input type="text" placeholder=" Full Name" id="" />
            <input type="text" placeholder="Email" id="" />
            <textarea placeholder="Massege" id=""></textarea>

            <div className="contactus-main-btn">
              {" "}
              <button>Send</button>
            </div>
          </div>
        </div>
      </div>

      <div className="map-show">
        <GoogleMap />
      </div>
    </div>
  );
}

export default ContactUs;
