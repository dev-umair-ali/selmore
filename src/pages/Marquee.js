import "../styles/Marquee.css";
import React, { useState, useEffect, useCallback } from "react";


function Marquee() {
  const [direction, setDirection] = useState("left");
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [loadedImages, setLoadedImages] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // To control pausing and resuming the animation

  useEffect(() => {
    const loadImages = async () => {
      try {
        const imageUrls = [
          "https://resourceboy.com/wp-content/uploads/2024/11/street-billboard-mockup-in-facing-sight-thumbnail.jpg",
          "https://img.freepik.com/premium-psd/ourtoor-panel-with-lights-mock-up_1389-62.jpg?semt=ais_hybrid",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJAd18Zy-ghopAErF1rBoHAx8xXlHNjr4H8g&s",
          "https://cms-assets.tutsplus.com/cdn-cgi/image/width=630/uploads/users/346/posts/31981/image/billboardmockup12.jpg",
          "https://www.photoshopvideotutorial.com/freepsdmock/wp-content/uploads/2024/03/Outdoor-Billboard-Mockup-1.jpg",
          "https://mockuptree.com/wp-content/uploads/edd/2024/12/Free_Billboard_Mockups-960x640.jpg",
          "https://goodmockups.com/wp-content/uploads/2021/04/Free-3D-High-Resolution-Billboard-Mockup-PSD-Set-2.jpg",
          "https://goodmockups.com/wp-content/uploads/2023/11/Free-Billboard-Against-Building-Mockup-PSD-324x235.jpg",
          "https://goodmockups.com/wp-content/uploads/2024/05/Free-Customizable-Billboard-Mockup-PSD-1.jpg",
          "https://mockuptree.com/wp-content/uploads/edd/2024/03/Billboard_Mockup-960x640.jpg",
        ];

        // Preload images
        const imagePromises = imageUrls.map((url) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
              setLoadedImages((prev) => prev + 1);
              resolve(url);
            };
            img.onerror = () => reject(`Failed to load image: ${url}`);
            img.src = url;
          });
        });

        await Promise.all(imagePromises);
        setImages(imageUrls);
        setIsLoading(false);
      } catch (err) {
        setError("Failed to load one or more images");
        setIsLoading(false);
      }
    };

    loadImages();
  }, []);

  const toggleDirection = useCallback(() => {
    setDirection((prev) => (prev === "left" ? "right" : "left"));
  }, []);

  const handleMouseEnter = () => {
    setIsPaused(true); // Pause the marquee when mouse enters
  };

  const handleMouseLeave = () => {
    setIsPaused(false); // Resume the marquee when mouse leaves
  };

  const handleImageError = (index) => {
    console.error(`Image ${index + 1} failed to load`);
    // Replace failed image with placeholder
    const newImages = [...images];
    newImages[index] = "/placeholder.svg?height=200&width=200&text=Error";
    setImages(newImages);
  };

  if (error) {
    return <div className="text-red-500 text-center p-4">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 sm:px-12 py-8">
      <div className="relative">
        <div
          className="Marquee-slider"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {isLoading ? (
            <div className="Marquee-loading">
              <div className="Marquee-loading-spinner" />
              <div className="mt-2 text-sm text-gray-600">
                Loading images: {loadedImages}/{images.length}
              </div>
            </div>
          ) : (
            <div
              className={`Marquee-slide-track ${direction} ${isPaused ? "paused" : ""}`}
              style={{ animationDuration: `${30 / 1}s` }} // Adjust speed if necessary
            >
              {/* Original slides */}
              {images.map((imageUrl, index) => (
                <div
                  key={index}
                  className="Marquee-slide"
                  onClick={() => window.open(imageUrl, "_blank")}
                >
                  <img
                    src={imageUrl}
                    alt={`Slide ${index + 1}`}
                    onError={() => handleImageError(index)}
                    loading="lazy"
                  />
                </div>
              ))}
              {/* Duplicated slides */}
              {images.map((imageUrl, index) => (
                <div
                  key={`duplicate-${index}`}
                  className="Marquee-slide"
                  onClick={() => window.open(imageUrl, "_blank")}
                >
                  <img
                    src={imageUrl}
                    alt={`Slide ${index + 1}`}
                    onError={() => handleImageError(index)}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Controls */}
        <div className="Marquee-controls">
          {/* <button className="Marquee-control-button" onClick={toggleDirection}>
            {direction === "left" ? "← Left" : "Right →"}
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default Marquee;
