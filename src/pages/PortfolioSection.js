import React from "react";
import "../styles/PortfolioSection.css";

import Image1 from "../images/Portfolio1.png";
import Image2 from "../images/Portfolio2.png";
import Image3 from "../images/Portfolio3.png";
import Image4 from "../images/Portfolio4.png";
import Image5 from "../images/Portfolio5.png";
import Image6 from "../images/Portfolio6.png";

const PortfolioSection = () => {
  const portfolioItems = [
    { id: 1, image: Image1 },
    { id: 2, image: Image2 },
    { id: 3, image: Image3 },
    { id: 4, image: Image4 },
    { id: 5, image: Image5 },
    { id: 6, image: Image6 },
  ];

  return (
    <section className="portfolio-section">
      <div className="portfolio-header">
        <p className="portfolio-subtitle">What We Done</p>
        <h2 className="portfolio-title">Our Portfolio</h2>
      </div>
      <div className="portfolio-grid">
        {portfolioItems.map((item) => (
          <div key={item.id} className="portfolio-item">
            <img src={item.image} alt={`Portfolio ${item.id}`} />
            <div className="overlay">
              <span className="plus-sign">+</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
