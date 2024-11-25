import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import "../styles/ExploreBillboards.css";
import product1 from "../../src/images/product1.png";
import product2 from "../../src/images/product2 (1).png";
import product3 from "../../src/images/product2 (2).png";
import product4 from "../../src/images/product2 (3).png";
import product5 from "../../src/images/product2 (4).png";
import product16 from "../../src/images/product2 (5).png";
import { MdOpenInFull, MdOutlineTune } from "react-icons/md";
import { FaLessThan, FaGreaterThan } from "react-icons/fa6";
import bgimg from "../images/Glow-1.png";
import { MdCancel } from "react-icons/md";
import PriceRangeSlider from "../pages/PriceRangeSlider"
const productImages = [
  product1,
  product2,
  product3,
  product4,
  product5,
  product16,
  product1,
  product2,
  product3,
  product2,
  product3,
  product4,
];

function ExploreBillboards() {
  const navigate = useNavigate();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleImageClick = (image, index) => {
    const productDetails = {
      image,
      name: `Billboard at Location ${index + 1}`,
      description: "All types - Digital/Static/Others before booking",
    };
    navigate("/detail", { state: { product: productDetails } });
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div>
      <div className="dotedline2">
        <img src={bgimg} alt="" />
      </div>
      <div className="explore-container">
        <div className="explore-layout">
          {/* Mobile Filter Toggle Button */}
          <button className="mobile-filter-toggle" onClick={toggleFilter}>
            <MdOutlineTune />
            <span>Filters</span>
          </button>

          {/* Filters Sidebar */}
          <div className={`sidebar ${isFilterOpen ? "open" : ""}`}>
            <div className="filter-header">
              <div className="filter-align">
                <MdOutlineTune />
                <span>Filters</span>
              </div>

              <button className="filter-cancel-button" onClick={toggleFilter}>
                <MdCancel />
              </button>
            </div>
            <div className="sidebar-scroll">
              <div className="filter-sections">
                <div className="filter-section for-border-b">
                  <div className="price-range">
                    <h3>Select Your Price Range</h3>
                    <PriceRangeSlider/>
                  </div>
                  <h3>Types Of Billboards</h3>
                  <div className="checkbox-group">
                    <label className="checkbox-label">
                      <input type="checkbox" defaultChecked />
                      <span>Digital billboards</span>
                    </label>
                    <label className="checkbox-label">
                      <input type="checkbox" />
                      <span>3D billboards</span>
                    </label>
                    <label className="checkbox-label">
                      <input type="checkbox" />
                      <span>Mobile billboards</span>
                    </label>
                    <label className="checkbox-label">
                      <input type="checkbox" />
                      <span>Static billboards</span>
                    </label>
                    <label className="checkbox-label">
                      <input type="checkbox" />
                      <span>Posters</span>
                    </label>
                    <button className="show-more-filte">Show More</button>
                  </div>
                </div>
                {/* Brands */}
                <div className="filter-section for-border-b">
                  <h3>Brands</h3>
                  <div className="checkbox-group">
                    <label className="checkbox-label">
                      <input type="checkbox" />
                      <span>Clothing</span>
                    </label>
                    <label className="checkbox-label">
                      <input type="checkbox" />
                      <span>Banks</span>
                    </label>
                    <label className="checkbox-label">
                      <input type="checkbox" />
                      <span>Airlines</span>
                    </label>
                    <label className="checkbox-label">
                      <input type="checkbox" />
                      <span>Beverages</span>
                    </label>
                    <label className="checkbox-label">
                      <input type="checkbox" />
                      <span>Vehicles</span>
                    </label>
                    <button className="show-more-filte">Show More</button>
                  </div>
                </div>
                {/* State */}
                <div className="filter-section for-border-b">
                  <h3>State</h3>
                  <div className="checkbox-group">
                    <label className="checkbox-label">
                      <input type="checkbox" />
                      <span>Punjab</span>
                    </label>
                    <label className="checkbox-label">
                      <input type="checkbox" />
                      <span>Sindh</span>
                    </label>
                    <label className="checkbox-label">
                      <input type="checkbox" />
                      <span>Balochistan</span>
                    </label>
                    <label className="checkbox-label">
                      <input type="checkbox" />
                      <span>Khyber Pakhtunkhwa</span>
                    </label>
                  </div>
                </div>
                {/* City */}
                <div className="filter-section for-border-b">
                  <h3>City</h3>
                  <div className="checkbox-group">
                    <label className="checkbox-label">
                      <input type="checkbox" />
                      <span>Karachi</span>
                    </label>
                    <label className="checkbox-label">
                      <input type="checkbox" />
                      <span>Lahore</span>
                    </label>
                    <label className="checkbox-label">
                      <input type="checkbox" />
                      <span>Islamabad</span>
                    </label>
                    <label className="checkbox-label">
                      <input type="checkbox" />
                      <span>Hyderabad</span>
                    </label>
                    <label className="checkbox-label">
                      <input type="checkbox" />
                      <span>Peshawar</span>
                    </label>
                    <button className="show-more-filte">Show More</button>
                  </div>
                </div>
                {/* Area */}
                <div className="filter-section for-border-b">
                  <h3>Area</h3>
                  <div className="checkbox-group">
                    <label className="checkbox-label">
                      <input type="checkbox" />
                      <span>Karachi</span>
                    </label>
                    <label className="checkbox-label">
                      <input type="checkbox" />
                      <span>Lahore</span>
                    </label>
                    <button className="show-more-filte">Show More</button>
                  </div>
                </div>
                <div className="filter-section for-border-b">
                  <h3>Brands</h3>
                  <div className="checkbox-group">
                    <label className="checkbox-label">
                      <input type="checkbox" />
                      <span>Clothing</span>
                    </label>
                    <label className="checkbox-label">
                      <input type="checkbox" />
                      <span>Banks</span>
                    </label>
                    <label className="checkbox-label">
                      <input type="checkbox" />
                      <span>Airlines</span>
                    </label>
                    <label className="checkbox-label">
                      <input type="checkbox" />
                      <span>Beverages</span>
                    </label>
                    <label className="checkbox-label">
                      <input type="checkbox" />
                      <span>Vehicles</span>
                    </label>
                    <button className="show-more-filte">Show More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Main Content */}
          <div className="main-content">
            {/* Search Bar */}
            <div className="search-container">
              <div className="search-input-wrapper">
                <Search className="search-icon" />
                <input
                  type="text"
                  className="search-input"
                  placeholder="Enter Road or Area Name"
                />
              </div>
              <button className="search-button">Search</button>
            </div>
            {/* Billboard Grid */}
            <div className="billboard-grid">
              {productImages.map((image, i) => (
                <div key={i} className="billboard-card">
                  <img
                    src={image}
                    alt={`Billboard location ${i + 1}`}
                    className="billboard-image"
                    onClick={() => handleImageClick(image, i)}
                  />
                  <div className="billboard-info">
                    <h3>Billboard at Location {i + 1}</h3>
                    <p>All types - Digital/Static/Others before booking</p>
                  </div>
                  <button
                    className="add-button"
                    onClick={() => handleImageClick(image, i)}
                  >
                    <MdOpenInFull />
                  </button>
                </div>
              ))}
            </div>
            {/* Pagination */}
            <div className="pagination">
              <button className="page-button1">
                <FaLessThan />
              </button>
              <button className="page-button">1</button>
              <button className="page-button">2</button>
              <button className="page-button">3</button>
              <button className="page-button1">
                <FaGreaterThan />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreBillboards;
