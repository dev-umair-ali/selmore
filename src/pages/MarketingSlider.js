"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../styles/MarketingSlider.css";

export default function MarketingSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef(null);
  const startPosRef = useRef(0);
  const isDraggingRef = useRef(false);

  const slides = [
    {
      title: "BILLBOARD DESIGN",
      description: "Qorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "DIGITAL MARKETING",
      description: "Qorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "WEB DEVELOPMENT",
      description: "Qorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const changeSlide = useCallback(
    (direction) => {
      setCurrentSlide((prev) => {
        if (direction === "next") {
          return (prev + 1) % slides.length;
        }
        if (direction === "prev") {
          return (prev - 1 + slides.length) % slides.length;
        }
        return prev;
      });
    },
    [slides.length]
  );

  const nextSlide = useCallback(() => changeSlide("next"), [changeSlide]);
  const prevSlide = useCallback(() => changeSlide("prev"), [changeSlide]);

  const handleDragStart = useCallback((clientX) => {
    startPosRef.current = clientX;
    isDraggingRef.current = true;
  }, []);

  const handleDragEnd = useCallback(
    (clientX) => {
      if (!isDraggingRef.current) return;
      const diff = startPosRef.current - clientX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) nextSlide();
        else prevSlide();
      }
      isDraggingRef.current = false;
    },
    [nextSlide, prevSlide]
  );

  const handleMouseDown = useCallback(
    (e) => {
      handleDragStart(e.clientX);
    },
    [handleDragStart]
  );

  const handleMouseUp = useCallback(
    (e) => {
      handleDragEnd(e.clientX);
    },
    [handleDragEnd]
  );

  const handleTouchStart = useCallback(
    (e) => {
      handleDragStart(e.touches[0].clientX);
    },
    [handleDragStart]
  );

  const handleTouchEnd = useCallback(
    (e) => {
      handleDragEnd(e.changedTouches[0].clientX);
    },
    [handleDragEnd]
  );

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    slider.addEventListener("touchstart", handleTouchStart, { passive: true });
    slider.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      slider.removeEventListener("touchstart", handleTouchStart);
      slider.removeEventListener("touchend", handleTouchEnd);
    };
  }, [handleTouchStart, handleTouchEnd]);

  return (
    <div
      className="slider-container-marketing"
      ref={sliderRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div className="slides-wrapper">
        {slides.map((slide, index) => {
          let position = index - currentSlide;
          if (position < 0) position += slides.length;

          return (
            <div
              key={index}
              className={`slide ${
                position === 0
                  ? "active"
                  : position === 1
                  ? "next"
                  : position === slides.length - 1
                  ? "prev"
                  : ""
              }`}
            >
              <div className="slide-content">
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
                <button className="explore-button">Explore</button>
              </div>
            </div>
          );
        })}
      </div>

      {!isMobile && (
        <>
          <button
            onClick={prevSlide}
            className="nav-button prev"
            aria-label="Previous slide"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="nav-button next"
            aria-label="Next slide"
          >
            <ChevronRight />
          </button>
        </>
      )}

      <div className="dots">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`dot ${currentSlide === index ? "active" : ""}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
