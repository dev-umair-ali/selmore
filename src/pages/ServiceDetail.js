import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/ServiceDetail.css";
import AccordionDetail from "./AccordionDetail";
import SwiperSlider from "../pages/SwiperSlider";
import bgimg from "../images/Glow-1.png";

const ServiceDetail = () => {
  const location = useLocation();
  const card = location.state; // Retrieve card details passed via navigate

  if (!card) {
    return <div>No details available!</div>;
  }

  return (
    <>
      {/* <div className="dotedline-accordion-detail">
        <img src={bgimg} alt="" />
      </div> */}
      <div className="service-detail-main-text">
        <h3>{card.title}</h3>
      </div>
      <div className="service-detail">
        <div className="service-detail-inner">
          <p>{card.description}</p>
        </div>
        <div className="service-detail-img">
          <img src={card.img} alt={card.title} />
        </div>
      </div>
      <div className="accordion-main-text">
        <h3>PROVIDE BEST SERVICES</h3>
      </div>
      <div className="accordion-main-import">
        <AccordionDetail />
      </div>
      <div className="explore-work">
        <SwiperSlider />
      </div>
    </>
  );
};

export default ServiceDetail;
