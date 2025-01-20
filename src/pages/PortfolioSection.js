import React, { useState } from "react";
import "../styles/PortfolioSection.css";

// Updated portfolio data for advertising/billboard company
const portfolioData = [
  {
    id: 1,
    images: [
      "https://printmonkey.pk/wp-content/uploads/2019/01/Billboards.jpg",
      "https://movia.media/wp-content/uploads/2020/04/donatospizza.jpg",
      "https://midwestbillboards.com/wp-content/uploads/2021/09/29045-Town-East-Beauty-1500.jpg",
    ],
    title: "Times Square Digital Billboard",
    category: "Outdoor Advertising",
    description:
      "Massive digital billboard campaign in the heart of Times Square, featuring dynamic content and eye-catching animations for major brands.",
    client: "Global Brands Corp",
    date: "2023",
  },
  {
    id: 2,
    images: [
      "https://ohmyfacts.com/wp-content/uploads/2024/06/45-facts-about-billboards-1718706562.jpeg",
      "https://static.wixstatic.com/media/6e4ebe_976f22dd409f4a0abd3f7e4577256d42~mv2.jpg/v1/fill/w_1000,h_707,al_c,q_85,usm_0.66_1.00_0.01/6e4ebe_976f22dd409f4a0abd3f7e4577256d42~mv2.jpg",
      "https://www.nartakmediagroup.com/wp-content/uploads/2023/12/Screen-Shot-2023-12-20-at-5.05.06-PM.webp",
    ],
    title: "Shopping Mall LED Displays",
    category: "Indoor Advertising",
    description:
      "Network of high-resolution LED displays installed across premium shopping malls, delivering targeted advertising to shoppers.",
    client: "Retail Solutions Inc",
    date: "2023",
  },
  {
    id: 3,
    images: [
      "https://cryptovirally.com/wp-content/uploads/2024/01/Why-Crypto-Billboard-The-Impact-and-Benefits-of-Advertising-Cryptocurrency-on-Billboards.png",
      "https://c8.alamy.com/comp/BK5CFB/times-square-manhattan-new-york-city-new-york-united-states-of-america-BK5CFB.jpg",
      "https://images.squarespace-cdn.com/content/v1/5acea5f9f2e6b1da315acf14/1661168929882-ZYXOXC5ZV0U0HMJNTHZT/unsplash-image-NPB5KT4rKYA.jpg?format=1000w",
    ],
    title: "Integrated Social Media Campaign",
    category: "Digital Marketing",
    description:
      "Cross-platform digital marketing campaign integrating social media, influencer partnerships, and targeted advertising.",
    client: "Tech Innovators",
    date: "2023",
  },
  {
    id: 4,
    images: [
      "https://media.istockphoto.com/id/156691504/photo/cars-and-billboards.jpg?s=612x612&w=0&k=20&c=ASs10gPZO5XVPEFvrgWn2k3uUZCMlGQYbG0bJDaU_QI=",
      "https://img.freepik.com/premium-photo/blank-advertising-billboard-largescale-square-outdoor-highway-night_31965-81724.jpg",
      "https://img.freepik.com/premium-photo/large-blank-billboard-night-city-there-are-cars-road-lights-buildings_14117-103444.jpg",
    ],
    title: "Highway Billboard Network",
    category: "Outdoor Advertising",
    description:
      "Strategic placement of large-format billboards along major highways, ensuring maximum visibility and impact.",
    client: "Auto Excellence",
    date: "2023",
  },
  {
    id: 5,
    images: [
      "https://cryptovirally.com/wp-content/uploads/2024/01/Why-Crypto-Billboard-The-Impact-and-Benefits-of-Advertising-Cryptocurrency-on-Billboards.png",
      "https://c8.alamy.com/comp/BK5CFB/times-square-manhattan-new-york-city-new-york-united-states-of-america-BK5CFB.jpg",
      "https://images.squarespace-cdn.com/content/v1/5acea5f9f2e6b1da315acf14/1661168929882-ZYXOXC5ZV0U0HMJNTHZT/unsplash-image-NPB5KT4rKYA.jpg?format=1000w",
    ],
    title: "Airport Terminal Advertising",
    category: "Indoor Advertising",
    description:
      "Comprehensive advertising solution covering airport terminals with digital screens, lightboxes, and interactive displays.",
    client: "Luxury Travel Brands",
    date: "2023",
  },
  {
    id: 6,
    images: [
      "https://printmonkey.pk/wp-content/uploads/2019/01/Billboards.jpg",
      "https://movia.media/wp-content/uploads/2020/04/donatospizza.jpg",
      "https://midwestbillboards.com/wp-content/uploads/2021/09/29045-Town-East-Beauty-1500.jpg",
    ],
    title: "Programmatic Digital Campaign",
    category: "Digital Marketing",
    description:
      "Data-driven programmatic advertising campaign across multiple digital platforms with real-time optimization.",
    client: "E-commerce Leaders",
    date: "2023",
  },
  {
    id: 7,
    images: [
      "https://media.istockphoto.com/id/156691504/photo/cars-and-billboards.jpg?s=612x612&w=0&k=20&c=ASs10gPZO5XVPEFvrgWn2k3uUZCMlGQYbG0bJDaU_QI=",
      "https://img.freepik.com/premium-photo/blank-advertising-billboard-largescale-square-outdoor-highway-night_31965-81724.jpg",
      "https://img.freepik.com/premium-photo/large-blank-billboard-night-city-there-are-cars-road-lights-buildings_14117-103444.jpg",
    ],
    title: "Transit Advertising Solutions",
    category: "Outdoor Advertising",
    description:
      "City-wide transit advertising including bus wraps, subway station displays, and transit shelter advertisements.",
    client: "Urban Mobility Corp",
    date: "2023",
  },
  {
    id: 8,
    images: [
      "https://printmonkey.pk/wp-content/uploads/2019/01/Billboards.jpg",
      "https://movia.media/wp-content/uploads/2020/04/donatospizza.jpg",
      "https://midwestbillboards.com/wp-content/uploads/2021/09/29045-Town-East-Beauty-1500.jpg",
    ],
    title: "Programmatic Digital Campaign",
    category: "Digital Marketing",
    description:
      "Data-driven programmatic advertising campaign across multiple digital platforms with real-time optimization.",
    client: "E-commerce Leaders",
    date: "2023",
  },
  {
    id: 9,
    images: [
      "https://cryptovirally.com/wp-content/uploads/2024/01/Why-Crypto-Billboard-The-Impact-and-Benefits-of-Advertising-Cryptocurrency-on-Billboards.png",
      "https://c8.alamy.com/comp/BK5CFB/times-square-manhattan-new-york-city-new-york-united-states-of-america-BK5CFB.jpg",
      "https://images.squarespace-cdn.com/content/v1/5acea5f9f2e6b1da315acf14/1661168929882-ZYXOXC5ZV0U0HMJNTHZT/unsplash-image-NPB5KT4rKYA.jpg?format=1000w",
    ],
    title: "Airport Terminal Advertising",
    category: "Indoor Advertising",
    description:
      "Comprehensive advertising solution covering airport terminals with digital screens, lightboxes, and interactive displays.",
    client: "Luxury Travel Brands",
    date: "2023",
  },
  {
    id: 10,
    images: [
      "https://printmonkey.pk/wp-content/uploads/2019/01/Billboards.jpg",
      "https://movia.media/wp-content/uploads/2020/04/donatospizza.jpg",
      "https://midwestbillboards.com/wp-content/uploads/2021/09/29045-Town-East-Beauty-1500.jpg",
    ],
    title: "Times Square Digital Billboard",
    category: "Outdoor Advertising",
    description:
      "Massive digital billboard campaign in the heart of Times Square, featuring dynamic content and eye-catching animations for major brands.",
    client: "Global Brands Corp",
    date: "2023",
  },
  {
    id: 11,
    images: [
      "https://ohmyfacts.com/wp-content/uploads/2024/06/45-facts-about-billboards-1718706562.jpeg",
      "https://static.wixstatic.com/media/6e4ebe_976f22dd409f4a0abd3f7e4577256d42~mv2.jpg/v1/fill/w_1000,h_707,al_c,q_85,usm_0.66_1.00_0.01/6e4ebe_976f22dd409f4a0abd3f7e4577256d42~mv2.jpg",
      "https://www.nartakmediagroup.com/wp-content/uploads/2023/12/Screen-Shot-2023-12-20-at-5.05.06-PM.webp",
    ],
    title: "Shopping Mall LED Displays",
    category: "Indoor Advertising",
    description:
      "Network of high-resolution LED displays installed across premium shopping malls, delivering targeted advertising to shoppers.",
    client: "Retail Solutions Inc",
    date: "2023",
  },
  {
    id: 12,
    images: [
      "https://cryptovirally.com/wp-content/uploads/2024/01/Why-Crypto-Billboard-The-Impact-and-Benefits-of-Advertising-Cryptocurrency-on-Billboards.png",
      "https://c8.alamy.com/comp/BK5CFB/times-square-manhattan-new-york-city-new-york-united-states-of-america-BK5CFB.jpg",
      "https://images.squarespace-cdn.com/content/v1/5acea5f9f2e6b1da315acf14/1661168929882-ZYXOXC5ZV0U0HMJNTHZT/unsplash-image-NPB5KT4rKYA.jpg?format=1000w",
    ],
    title: "Integrated Social Media Campaign",
    category: "Digital Marketing",
    description:
      "Cross-platform digital marketing campaign integrating social media, influencer partnerships, and targeted advertising.",
    client: "Tech Innovators",
    date: "2023",
  },
];

const PortfolioCarousel = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(portfolioData.length / itemsPerPage);

  const getCurrentItems = () => {
    const start = currentPage * itemsPerPage;
    return portfolioData.slice(start, start + itemsPerPage);
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    if (selectedItem) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedItem.images.length);
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (selectedItem) {
      setCurrentImageIndex(
        (prev) =>
          (prev - 1 + selectedItem.images.length) % selectedItem.images.length
      );
    }
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setCurrentImageIndex(0);
  };

  return (
    <section className="portfolio-section">
      <div className="portfolio-header">
        <p className="portfolio-subtitle">Our Work</p>
        <h2 className="portfolio-title">Advertising Portfolio</h2>
        <p className="portfolio-description">
          We are a full-service advertising media agency dedicated to helping
          brands reach and engage their target audiences. Using strategic
          insights and creative solutions across digital, social, print, and
          outdoor platforms, we bring your brand's vision to life and maximize
          its impact.
        </p>
      </div>

      <div className="portfolio-grid">
        {getCurrentItems().map((item) => (
          <div
            key={item.id}
            className="portfolio-item"
            onClick={() => handleItemClick(item)}
          >
            <img src={item.images[0] || "/placeholder.svg"} alt={item.title} />
            <div className="overlay">
              <span className="plus-sign">+</span>
            </div>
            <div className="item-details">
              <h3>{item.title}</h3>
              <p>{item.category}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="navigation-buttons">
        <button onClick={prevPage} className="nav-button2">
          <span>Previous</span>
        </button>
        <button onClick={nextPage} className="nav-button2">
          <span class="icon">Next</span>
        </button>
      </div>

      {selectedItem && (
        <div className="popup-overlay" onClick={() => setSelectedItem(null)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-button"
              onClick={() => setSelectedItem(null)}
            >
              ×
            </button>
            <div className="popup-image-slider">
              <button className="slider-button prev" onClick={prevImage}>
                ❮
              </button>
              <div className="popup-image">
                <img
                  src={
                    selectedItem.images[currentImageIndex] || "/placeholder.svg"
                  }
                  alt={`${selectedItem.title} - Image ${currentImageIndex + 1}`}
                />
                <div className="image-counter">
                  {currentImageIndex + 1} / {selectedItem.images.length}
                </div>
              </div>
              <button className="slider-button next" onClick={nextImage}>
                ❯
              </button>
            </div>
            <div className="popup-details">
              <h2>{selectedItem.title}</h2>
              <span className="category">{selectedItem.category}</span>
              <p className="description">{selectedItem.description}</p>
              <div className="project-info">
                <div className="info-item">
                  <strong>Client:</strong> {selectedItem.client}
                </div>
                <div className="info-item">
                  <strong>Date:</strong> {selectedItem.date}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioCarousel;
