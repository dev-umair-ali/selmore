import React from "react";
import "../styles/Services.css";
import { FaCheck } from "react-icons/fa6";
import servicesGrop from "../images/Group 154.png";
import bgimg from "../images/Glow-1.png";
import HoverCards from "../pages/HoverCards";
import SwiperSlider from "../pages/SwiperSlider";
import Marquee from "./Marquee";

function Services() {
  return (
    <>
      {/* <div className="dotedline-accordion">
        <img src={bgimg} alt="" />
      </div> */}
      <div className="home-container-services">
        <div className="home-we-provide-services">
          <h3>OUR SERVICES</h3>
          <p>
            Our agency offers comprehensive advertising services, including
            media planning ,digital and social campaigns,outdoor advertising,
            and brand strategy.
          </p>
        </div>
      </div>
      <div className="services-offering">
        <div className="services-offering-left">
          <h3>OFFERING THE BEST MARKETING SERVICES </h3>
          <p>
            Our advertising media agency offers a full suite of services, We
            specialize in creating compelling content and targeted campaigns to
            boost visibililty and engagement. With data - driven insights and
            expert campaign management, we ensure every ad makes an impact.
          </p>
          <div className="services-offering-left-text">
            <ul>
              <li>
                <span>
                  <FaCheck />
                </span>
                Stategic placement to reach target audiences effectively.
              </li>
              <li>
                <span>
                  <FaCheck />
                </span>
                Engaging visuals, videos, and copywriting to enhance brand
                impact.
              </li>
              <li>
                <span>
                  <FaCheck />
                </span>
                End to end support from planning to execution and analysis.{" "}
              </li>

              <li>
                <span>
                  <FaCheck />
                </span>
                Billboards transit ads, and other-visibilty options.{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className="services-offering-right">
          <img src={servicesGrop} alt="" />
        </div>
      </div>
      <div className="card-main">
        <HoverCards />
      </div>

      <div className="explore-work">
        <SwiperSlider />
      </div>

      <div className="contact-us-outer">
        <div className="contact-us-home">
          <div className="text-side">
            <h1>
              WANT TO <br /> WORK WITH <br /> US?
            </h1>
          </div>
          <div className="for-center-border"></div>
          <div className="form-side">
            <div className="contact-home-input">
              <h3>CONTACT US</h3>

              <input type="text" placeholder="Full Name" id="" />
              <input type="text" placeholder="Email" id="" />
              <textarea placeholder="Message"></textarea>
            </div>
            <div className="input-innertex">
              <p>Vorem ipsum dolor sit amet, consectetur adipiscing elitm, .</p>{" "}
              <br />
              <p>Selmorebillboards!23@gmail.com</p> <br />
              <p>(+92) 123 678904</p>
            </div>
          </div>
        </div>
      </div>
      <Marquee/>
    </>
  );
}

export default Services;
