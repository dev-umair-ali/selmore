import "../styles/AboutUsHero.css"

import React, { useEffect, useRef } from 'react';

const AboutUsHero = () => {
  const statsRef = useRef([]);

  const stats = [
    { number: 10, label: "Years of Experience" },
    { number: 500, label: "Projects Completed" },
    { number: 50, label: "Team Members" },
  ];

  useEffect(() => {
    statsRef.current.forEach((stat, index) => {
      const target = stats[index].number;
      let current = 0;
      const increment = target / 100;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          clearInterval(timer);
          current = target;
        }
        stat.textContent = Math.round(current) + (target >= 100 ? '+' : '');
      }, 20);
    });
  }, []);

  return (
    <section className="futuristic-about-us-hero-about">
      <div className="hero-content-about">
        <div className="hero-text-about">
          <h1 className="hero-title-about">About Us</h1>
          <p className="hero-subtitle-about">Crafting Digital Experiences</p>
          <p className="hero-description-about">
            We are a team of passionate creators, innovators, and
            problem-solvers dedicated to bringing your digital visions to life.
          </p>
          <button className="hero-cta-about">Explore Our Work</button>
        </div>
        <div className="hero-image-container-about">
          <img
            src="https://media.istockphoto.com/id/1383875110/vector/advertisement-billboard-for-placing-your-advertising-on-cityscape-background.jpg?s=612x612&w=0&k=20&c=25fhcWVKPgA50TomdndyBcHStLjshjd9R-U0IWu-7Po="
            alt="Team collaboration"
            className="hero-image-about"
          />
          {/* <div className="hero-badge-about">2025</div> */}
        </div>
      </div>
      <div className="hero-stats-about">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item-about">
            <span className="stat-number-about" ref={el => statsRef.current[index] = el}>0</span>
            <span className="stat-label-about">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUsHero;
