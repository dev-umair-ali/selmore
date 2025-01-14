// src/components/Detail.js
import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/Detail.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaCircleCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
import bgimg from "../images/Glow-1.png";


const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Optional for smooth scrolling
  });
};
const Detail = () => {
  const location = useLocation();
  const { product } = location.state || { product: null }; // Get product from state

  if (!product) {
    return <div>No product selected</div>;
  }

  return (
    <div>
      {/* <div className="dotedline-accordion">
        <img src={bgimg} alt="" />
      </div> */}
      <div className="detail-content">
        <div className="detail-billboard-intro">
          <p>{product.description}</p>
          <div className="product-price">
            <h1>Rs 1,800,000</h1>
          </div>
        </div>

        <div className="product-top-btn">
          <button>FEATURED</button>
          <button>DISCOUNTED PRICES</button>
          <button>PREMIUM LOCATION</button>
        </div>
        <div className="detail-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-loaction">
          <FaLocationDot />

          <h3>{product.name}</h3>
        </div>
      </div>

      <div className="bottom-detail-main">
        <div className="bottom-detail-main-left">
          <h3>Details</h3>
          <div className="bottom-left-inner1">
            <span>OOH Media ID:</span>
            <p>12345</p>
          </div>
          <div className="bottom-left-inner1">
            <span>Price:</span>
            <p>Rs 18,00,000</p>
          </div>
          <div className="bottom-left-inner1">
            <span>OHH Media Type:</span>
            <p>billboard All Static</p>
          </div>
          <div className="bottom-left-inner1">
            <span>Size:</span>
            <p>60x20</p>
          </div>
        </div>
        <div className="bottom-detail-main-right">
          <div className="bottom-detail-main-right1">
            <span>Category:</span>
            <p>Static</p>
          </div>
          <div className="bottom-detail-main-right1">
            <span>Availability Date:</span>
            <p>Confirm before booking</p>
          </div>
          <div className="bottom-detail-main-right1">
            <span>Contact:</span>
            <p>0345678903</p>
          </div>
        </div>
      </div>

      {/* copy2 */}
      <div className="section-2bottom">
        <div className="bottom-detail-main2 ">
          <div className="bottom-detail-main-left">
            <h3>Address</h3>
            <div className="bottom-left-inner1">
              <span>Address:</span>
              <p>{product.description}</p>
            </div>
          </div>
          <div
            className="bottom-detail-main-right"
            style={{ paddingRight: "10px" }}
          >
            <div className="bottom-detail-main-right1">
              <span>City:</span>
              <p>Karachi</p>
            </div>
            <div className="bottom-detail-main-right1">
              <span>State:</span>
              <p>Sindh</p>
            </div>
            <div className="bottom-detail-main-right1">
              <span>Country:</span>
              <p>Pakistan</p>
            </div>
          </div>
        </div>
        <div className="Features-details">
          <h3>Features</h3>
          <div className="features-main">
            <div className="features">
              <FaCircleCheck />

              <p>Bottom Lights</p>
            </div>
            <div className="features">
              <FaCircleCheck />

              <p>Generator Backup</p>
            </div>
            <div className="features">
              <FaCircleCheck />

              <p>Top Lights</p>
            </div>
          </div>
        </div>
      </div>
      <div className="book-now-btn">
        <Link to="/book-now"  onClick={scrollToTop}>
          <button className="book-nowbtn">Book Now</button>
        </Link>{" "}
      </div>
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
  );
};

export default Detail;
