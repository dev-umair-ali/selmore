import React from "react";
import bgimg from "../images/Glow-1.png";
import "../styles/AboutUS.css";
import who from "../images/newimg-1.png";
import mission from "../images/newimg2.png";
import choose1 from "../images/rect1.png";
import choose2 from "../images/rect2.png";
import choose3 from "../images/rect3.png";
import choose4 from "../images/rect4.png";
import loaction from "../images/Location.png";
import Elections from "../images/Elections.png";
import team from "../images/Team.png";
import Help from "../images/Connectivity and Help.png";
import video from "../images/Group 60.png";
import bottom1 from "../images/bottom1 (1).png";
import bottom2 from "../images/bottom2.png";
import bottom3 from "../images/bottom3.png";
import bottom4 from "../images/bottom4.png";
import { Link } from "react-router-dom";
import AboutUsHero from "./AboutUsHero";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Optional for smooth scrolling
  });
};

function AboutUs() {
  return (
    <div>
      <div className="home-container">
        {/* <div className="home-we-provide">
          <h3>ABOUT US</h3>
        </div> */}
        <AboutUsHero/>
      </div>
      {/* <div className="dotedline-about-us">
        <img src={bgimg} alt="" />
      </div> */}
      {/* <section>2</section> */}
      <div className="chnage-color">
        <div className="services-container">
          <div className="services-section111">
            <h2>WHO WE ARE</h2>
            <p>
              At <span className="color-chnage">Selmore</span> we are a full-
              service marketing agency specializing in indoor, outdoor, and
              digital advertising. Our mission is to create powerful and
              cohesive campaigns that seamlessly connect your brand with your
              audience-weather they’re engaging with your message on a bustling
              city street, at a live event, or online. <br /> <br /> With a
              passionate team of creative thinkers and marketing strategies, we
              pride ourselves on delivering impactful solutions that drive
              results.
            </p>
            <Link to="/explore">
              {" "}
              <button onClick={scrollToTop}>View All</button>
            </Link>
          </div>
          <div className="services-section2">
            <img src={who} alt="" />
          </div>
        </div>
      </div>
      {/* <section>3</section> */}
      <div className="services-containerbottom">
        <div className="services-section">
          <h2>OUR MISSION</h2>
          <p>
            Our mission is simple: to elevate your brand by combining creativity
            with data-driven strategies. We are committed to delivering
            measurable results that align with your goals and empower your
            business to thrive in a competitive market. <br /> <br />
            To bridge the gap between the physical and digital worlds,
            delivering innovative marketing strategies that boost brand
            visibility and drive meaningful engagement.
          </p>
          <Link to="/explore">
            {" "}
            <button onClick={scrollToTop}>View All</button>
          </Link>
        </div>
        <div className="services-section22">
          <img src={mission} alt="" />
        </div>
      </div>
      {/* <section>4</section> */}
      <div className="chnage-color2">
        <div className="why-chooose-us">
          <div className="why-chooose-us-left">
            <div className="four-imgs-main">
              <div className="four-imgs-top">
                <img src={choose1} alt="" className="why-img1" />
                <img src={choose2} alt="" className="why-img2" />
              </div>
              <div className="four-imgs-bottom">
                <img src={choose3} alt="" className="why-img3" />
                <img src={choose4} alt="" className="why-img4" />
              </div>
            </div>
          </div>
          <div className="why-chooose-us-right21">
            <div className="why-chooose-us-righttext-new">
              <h3>WHY CHOOSE US</h3>
              <p>
                Qorem ipsum dolor sit amet, consect adipiscing elit. nnvulputate
                sit amet, consec.
              </p>
            </div>

            <div className="why-chooose-us-right">
              {/* 1 */}

              <div className="why-chooose-us-right1">
                <div className="why-chooose-us-right-logo">
                  <img src={loaction} alt="" />
                </div>
                <div className="why-chooose-us-righttext">
                  <h3>Prime Locations</h3>
                  <p>
                    Access to billboards in “high-traafic areas” ensures amximum
                    exposure.
                  </p>
                </div>
              </div>
              {/* 2 */}
              <div className="why-chooose-us-right1">
                <div className="why-chooose-us-right-logo">
                  <img src={Elections} alt="" />
                </div>
                <div className="why-chooose-us-righttext">
                  <h3>Tailored Campaigns</h3>
                  <p>
                    We create *customized advertising solutions* based on your
                    unique needs.
                  </p>
                </div>
              </div>
              {/* 3 */}
              <div className="why-chooose-us-right1">
                <div className="why-chooose-us-right-logo">
                  <img src={team} alt="" />
                </div>
                <div className="why-chooose-us-righttext">
                  <h3>Dedicated Team</h3>
                  <p>
                    With years of experience in outdoor advertising, we
                    understand what works
                  </p>
                </div>
              </div>
              {/* 4 */}
              <div className="why-chooose-us-right1">
                <div className="why-chooose-us-right-logo">
                  <img src={Help} alt="" />
                </div>
                <div className="why-chooose-us-righttext">
                  <h3>End-to-End Support</h3>
                  <p>
                    From concept to installation, we manage every step of the
                    campaign.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* video section */}
      <div className="video-secvices">
        <img src={video} alt="" />
      </div>

      {/* <section>contact</section> */}
      <div className="contact-us-outer">
        <div className="contact-us-home">
          <div className="text-side">
            <h1>
              WANT TO <br /> WORK WITH <br /> US?
            </h1>
          </div>
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
      <div className="about-bottom">
        <img src={bottom4} alt="" />
        <img src={bottom1} alt="" />
        <img src={bottom3} alt="" />
        <img src={bottom2} alt="" />
      </div>
    </div>
  );
}

export default AboutUs;
