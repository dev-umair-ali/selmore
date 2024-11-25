import React, { useState, useEffect } from 'react';
import '../styles/PriceRangeSlider.css';

const PriceRangeSlider = () => {
  const [priceRange, setPriceRange] = useState([0, 3000000]); // Default range [0, 3 million]
  const [minInput, setMinInput] = useState(priceRange[0].toString());
  const [maxInput, setMaxInput] = useState(priceRange[1].toString());

  useEffect(() => {
    setMinInput(priceRange[0].toString());
    setMaxInput(priceRange[1].toString());
  }, [priceRange]);

  const handleSliderChange = (event, index) => {
    const newValue = parseInt(event.target.value);
    const newPriceRange = [...priceRange];
    newPriceRange[index] = newValue;

    if (index === 0 && newValue <= priceRange[1]) {
      setPriceRange(newPriceRange);
    } else if (index === 1 && newValue >= priceRange[0]) {
      setPriceRange(newPriceRange);
    }
  };

  const handleInputChange = (value, isMin) => {
    const numValue = parseInt(value);
    if (isNaN(numValue)) return;

    if (isMin) {
      setMinInput(value);
      if (numValue <= priceRange[1]) {
        setPriceRange([numValue, priceRange[1]]);
      }
    } else {
      setMaxInput(value);
      if (numValue >= priceRange[0]) {
        setPriceRange([priceRange[0], numValue]);
      }
    }
  };

  const handleOkClick = () => {
    console.log('Selected price range:', priceRange);
    // You can add your logic here for what happens when OK is clicked
  };

  return (
    <div className="price-range-slider">
      <div className="slider-container">
        <input
          type="range"
          min="0"
          max="3000000" // Max value is set to 3 million
          value={priceRange[0]}
          onChange={(e) => handleSliderChange(e, 0)}
          className="slider slider-0"
        />
        <input
          type="range"
          min="0"
          max="3000000" // Max value is set to 3 million
          value={priceRange[1]}
          onChange={(e) => handleSliderChange(e, 1)}
          className="slider slider-1"
        />
      </div>
      <div className="range-inputs">
        <div className="input-group">
          <label htmlFor="min-price">Min</label>
          <input
            id="min-price"
            type="number"
            value={minInput}
            onChange={(e) => handleInputChange(e.target.value, true)}
            placeholder="Min"
          />
        </div>
        <div className="input-group">
          <label htmlFor="max-price">Max</label>
          <input
            id="max-price"
            type="number"
            value={maxInput}
            onChange={(e) => handleInputChange(e.target.value, false)}
            placeholder="Max"
          />
        </div>
      </div>
      <button onClick={handleOkClick} className="ok-button">
        OK
      </button>
    </div>
  );
};

export default PriceRangeSlider;
