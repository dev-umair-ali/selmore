import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/HoverCards.css";
import img1 from "../images/billboardimg - Copy.png";
import img2 from "../images/product2 (5).png";
import img3 from "../images/product2 (4).png";
import img4 from "../images/product2 (3).png";
import img5 from "../images/product2 (2).png";
import img6 from "../images/product2 (1).png";
import img7 from "../images/newimg2.png";
import img8 from "../images/cute-young-female.png";
import img9 from "../images/card3.png";

const HoverCards = () => {
  const navigate = useNavigate();

  const cards = [
    {
      id: 1,
      title: "ELEVATE YOUR DIGITAL PRESENCE WITH INNOVATION",
      description:
        "At Selmore we are passionate about helping businesses *stand out with impactful outdoor advertising. Our strategically placed billboards in high-traffic locations —from busy highways to vibrant city centers —ensure your brand gets the visibility it deserves.",
      img: img1,
    },
    {
      id: 2,
      title: "BRANDING",
      description:
        "Our digital marketing services are designed to elevate your brand and drive meaningful engagement. By combining creativity with data- driven insights, we help you to connect with your target audience and achieve measurable results. From crafting compelling content to optimizing your online presence, we ensure your brand stands out in the digital landscape, fostering growth and long-term success.",
      img: img2,
    },
    { id: 3, title: "BRANDING", description: "Lorem ipsum...", img: img3 },
    {
      id: 4,
      title: "DIGITAL MARKETING",
      description: "Lorem ipsum...",
      img: img4,
    },
    { id: 5, title: "BRANDING", description: "Lorem ipsum...", img: img5 },
    { id: 6, title: "BRANDING", description: "Lorem ipsum...", img: img6 },

  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional for smooth scrolling
    });
  };
  const handleCardClick = (card) => {
    navigate(`/service-detail`, { state: card });
  };

  return (
    <div className="hover-cards-container" onClick={scrollToTop}>
      {cards.map((card) => (
        <div
          className="card"
          key={card.id}
          onClick={() => handleCardClick(card)}
        >
          <div className="card-content">
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <button>Explore</button>
          </div>
          <div className="card-image">
            <img src={card.img} alt={card.title} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default HoverCards;
