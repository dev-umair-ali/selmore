import React, { useState } from "react";
import "../styles/Home.css"; // Import the CSS file
import bgimg from "../images/Glow-1.png";

import billboard from "../images/Group 165.png";
import media from "../images/Media.png";
import army from "../images/Army Star.png";
import check from "../images/Checkmark.png";
import girl from "../images/cute-young-female.png";
import play from "../images/PLAYER.png";
import map from "../images/map.png";
import toyota from "../images/toy.png";
import samsung from "../images/sam.png";
import gul from "../images/gul.png";
import pia from "../images/PIA-Pakistan-Airlines- 1.png";
import { Link } from "react-router-dom";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import brnad1 from "../images/brand-logo (1).png";
import brnad2 from "../images/brand-logo (2).png";
import brnad3 from "../images/brand-logo (3).png";
import brnad4 from "../images/brand-logo (4).png";
import brnad5 from "../images/brand-logo (5).png";
import brnad6 from "../images/brand-logo (6).png";
import MarketingSlider from "../pages/MarketingSlider";
import services from "../images/SERVICES.png";
import PortfolioSection from "../pages/PortfolioSection"





const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Optional for smooth scrolling
  });
};

function Home() {
  // const [showMore, setShowMore] = useState(false);

  // const cardsData = [
  //   {
  //     image: card1,
  //     title: "Digital Billboard",
  //     description:
  //       "Bright, dynamic, and impossible to miss- get noticed with our state-of-the-art digital billboards.",
  //   },
  //   {
  //     image: card2,
  //     title: "Static Billboard",
  //     description:
  //       "Bright, dynamic, and impossible to miss- get noticed with our state-of-the-art digital billboards.",
  //   },
  //   {
  //     image: card3,
  //     title: "Transit Billboard",
  //     description:
  //       "Bright, dynamic, and impossible to miss- get noticed with our state-of-the-art digital billboards.",
  //   },
  //   {
  //     image: card4,
  //     title: "LED Billboard",
  //     description:
  //       "Vivid displays with LED technology, ensuring your message shines day and night.",
  //   },
  //   {
  //     image: card5,
  //     title: "Mobile Billboard",
  //     description:
  //       "Catch attention on the move with our eye-catching mobile billboards.",
  //   },
  //   {
  //     image: card6,
  //     title: "Interactive Billboard",
  //     description:
  //       "Engage your audience with interactive, high-tech billboard experiences.",
  //   },
  // ];
  return (
    <div>
      <div className="dotedline">
        <img src={bgimg} alt="" />
      </div>
      <div className="home-container">
        <div className="home-we-provide">
          <h3>
            WE PROVIDE <span className="home-highlight">OUTDOOR INDOOR</span>{" "}
            AND <br /> <span className="home-highlight">DIGITAL MARKETING</span>
          </h3>
          <p>
            We are full- service advertising media agency dedicated to helping
            brands reach and engage their target audiences.Using strategic
            insights and creative solutions across digital,social,print, and
            outdoor platforms,we bring your brand’s vision to life and maximize
            its impact.
          </p>

          <Link to="/explore">
            <button className="home-explore-button" onClick={scrollToTop}>
              Explore
            </button>{" "}
          </Link>
        </div>
      </div>

      <div className="logo-main">
        <div className="brands-text">
          {" "}
          <p>Trusted by customer-led product companies</p>
        </div>
        <div className="brnad-logo-inner">
          <img src={toyota} alt="" />
          <img src={samsung} alt="" />
          <img src={gul} alt="" />
          <img src={pia} alt="" />
          <img src={brnad1} alt="" />
        </div>

        <div className="brnad-logo-inner">
          <img src={brnad2} alt="" />
          <img src={brnad3} alt="" />
          <img src={brnad4} alt="" />
          <img src={brnad5} alt="" />
          <img src={brnad6} alt="" />
        </div>
      </div>

      <div className="marketing-slider-main">
        <div className="marketing-slider-main-img">
          <img src={services} alt="" />
        </div>
        <div className="what-wo-do">
          <span>WHAT WE DO</span>
          <p>OUR EXPERT SERVICES</p>
        </div>
        <MarketingSlider />
      </div>
      {/* <div className="what-wo-do">
        <p>WHAT WE DO</p>
        <p>OUR BILLBOARD ADVERTISING SERVICES</p>
      </div> */}
      {/* section 3 */}
      {/* <div className="view-all-main">
        {cardsData.slice(0, 3).map((card, index) => (
          <div className="view-cards" key={index}>
            <img src={card.image} alt="" />
            <div className="about-card-box">
              <SlScreenDesktop />
              <span>{card.title}</span>
              <p>{card.description}</p>
            </div>
          </div>
        ))}

        {showMore &&
          cardsData.slice(3).map((card, index) => (
            <div className="view-cards" key={index + 3}>
              <img src={card.image} alt="" />
              <div className="about-card-box">
                <SlScreenDesktop />
                <span>{card.title}</span>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
      </div> */}
      {/* <div className="show-more">
        <button onClick={() => setShowMore(!showMore)}>
          {showMore ? "View Less" : "View More"}
        </button>
      </div> */}

      {/* section 4 */}
      <div className="what-wo-do">
        <span>WHO WE ARE</span>
        <p>passionate about your growth</p>
      </div>

      <div className="about-us-billboard">
        <div className="bill-home-img">
          <img src={billboard} alt="" />
        </div>
        <div className="bill-home-text">
          <h3>
            “Our network of prime locations ensures your message reaches the
            right audience”.
          </h3>{" "}
          <br />
          <p>
            At Selmore we are passionate about helping businesses *stand out
            with impactful outdoor advertising. Our strategically placed
            billboards in high-traffic locations —from busy highways to vibrant
            city centers —ensure your brand gets the visibility it deserves.
          </p>
          <br />
          <p>
            Whether you need static, digital, or transit ads, we provide
            customized solutions that align with your marketing goals. With
            years of experience in the industry, we understand the importance of
            targeting the right audience at the right place and time, maximizing
            your return on investment.{" "}
          </p>
          <h3 className="arrow">
            Start Your Campaign Now <MdOutlineArrowRightAlt />
          </h3>
        </div>
      </div>

      {/* section 5 */}
      {/* <div className="about-us-billboard2">
        <div className="bill-home-img2">
          <img src={billboard2} alt="" />
        </div>
        <div className="bill-home-text">
          <h3>
            “Our network of prime locations ensures your message reaches the
            right audience”.
          </h3>{" "}
          <br />
          <p>
            At Selmore we are passionate about helping businesses *stand out
            with impactful outdoor advertising. Our strategically placed
            billboards in high-traffic locations —from busy highways to vibrant
            city centers —ensure your brand gets the visibility it deserves.
          </p>
          <br />
          <p>
            Whether you need static, digital, or transit ads, we provide
            customized solutions that align with your marketing goals. With
            years of experience in the industry, we understand the importance of
            targeting the right audience at the right place and time, maximizing
            your return on investment.{" "}
          </p>
          <h3 className="arrow">
            Start Your Campaign Now <MdOutlineArrowRightAlt />
          </h3>
        </div>
      </div> */}
      {/* section6 */}
      <div className="dontmiss">
        <h3>
          Don’t Miss Out on This Opportunity to <br /> Elevate Your Advertising
          Game
        </h3>
        <p>
          We believe in powerful, targeted and creative billboard solutions
          tailored to meet your business goals.
        </p>
        <div className="book-now">
          <Link to="/book-now">
            <button className="book-nowbtn" onClick={scrollToTop}>
              Book Now
            </button>
          </Link>{" "}
        </div>
      </div>
      {/* section7 */}
      <div className="section7-page1">
        <div className="container-Help">
          <div className="left-container-Help">
            <div className="video-container-Help">
              <img src={girl} alt="Image" />
              <div className="play-button-Help">
                <img src={play} alt="" /> <span>Play Video</span>
              </div>
            </div>
          </div>
          <div className="right-container-Help">
            <h2>
              WE HELP TO CREATE EYE <br />
              ATTENTION.
            </h2>
            <div className="features-Help">
              <div className="feature-Help section-gap">
                <img src={media} alt="Multi Format Media" />
                <div className="section-space">
                  <h3>Multi Format Media</h3>
                  <p>
                    Billboards capture repeat exposure business message more
                    effectively than almost any other marketing channel.
                  </p>
                </div>
              </div>
              <div className="feature-Help section-gap2">
                <img src={army} alt="Smartly Planned" />
                <div className="section-space">
                  <h3>Smartly Planned</h3>
                  <p>
                    Start building your brand with the strategic one, industry
                    expertise to solutions that.
                  </p>
                </div>
              </div>
              <div className="section-gap3">
                <img src={check} alt="Build Brands" />

                <div className="feature-Help">
                  <h3>Build Brands</h3>
                  <p>
                    A business is only as good as its strategic process, and
                    that's what contributes to expections.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <section> map 8</section> */}
      <div className="section-map-main">
        <div className="locations-container-map">
          <h3 className="locations-title-map">EXPLORE AVAILABLE LOCATIONS</h3>
          <div className="locations-content-map">
            <div className="stats-panel-map">
              <div className="stat-item-map">
                <h3>+24%</h3>
                <p>
                  Qorem ipsum dolor sit amet, consect adipiscing elit.
                  nnvulputate li
                </p>
                <div className="progress-bar-map"></div>
              </div>
              <div className="stat-item-map">
                <h3>+10%</h3>
                <p>
                  Qorem ipsum dolor sit amet, consect adipiscing elit.
                  nnvulputate li
                </p>
                <div className="progress-bar-map"></div>
              </div>
              <div className="stat-item-map">
                <h3>+20%</h3>
                <p>
                  Qorem ipsum dolor sit amet, consect adipiscing elit.
                  nnvulputate li
                </p>
                {/* <div className="progress-bar-map"></div> */}
              </div>
            </div>
            <div className="map-image-map">
              <img src={map} alt="World Map" />
            </div>
          </div>
        </div>
      </div>

      {/* <section>contact</section> */}
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
      <div className="">
        <PortfolioSection/>
      </div>
    </div>
  );
}

export default Home;
