import React from "react";
import "../styles/BookNow.css";
import DatePickerValue from "./DatePicker";
import bottom1 from "../images/bottom1 (1).png";
import bottom2 from "../images/bottom2.png";
import bottom3 from "../images/bottom3.png";
import bottom4 from "../images/bottom4.png";
import bgimg from "../images/Glow-1.png";

const BookNow = () => {
  return (
    <div>
        <div className="dotedline-booknow">
        <img src={bgimg} alt="" />
      </div>
      <div className="booknow-container ">
        <div className="booknow-form ">
          <div className="booknow-section ">
            <label className="booknow-label ">Full Name :</label>
            <input
              type="text"
              className="booknow-input "
              placeholder="Enter your full name"
            />

            <label className="booknow-label ">Email :</label>
            <input
              type="email"
              className="booknow-input "
              placeholder="Enter your email address"
            />

            <label className="booknow-label">Phone Number:</label>
            <input
              type="tel"
              className="booknow-input "
              placeholder="Enter your phone number"
            />

            <label className="booknow-label ">Location of billboard</label>
            <input
              type="text"
              className="booknow-input "
              placeholder="Location"
            />

            <div className="booknow-location-dropdowns ">
              <select className="booknow-select">
                <option>City</option>
              </select>
              <select className="booknow-select ">
                <option>State</option>
              </select>
              <select className="booknow-select ">
                <option>Area</option>
              </select>
            </div>
          </div>

          <div className="booknow-section ">
            <label className="booknow-label ">Date of Advertisement:</label>
            <div className="booknow-date-inputs ">
              <DatePickerValue />
            </div>

            <label className="booknow-label ">Marketing Type:</label>
            <select className="booknow-select ">
              <option>Digital billboard</option>
            </select>

            <label className="booknow-label ">Budget Range</label>
            <select className="booknow-select ">
              <option>Optional</option>
            </select>

            <label className="booknow-label ">Additional Notes</label>
            <textarea
              className="booknow-textarea "
              placeholder="Any additional details or request"
            ></textarea>
            <div className="submit-btn">
            <button className="booknow-submit ">Submit</button>

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
};

export default BookNow;
