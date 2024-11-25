import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Menu, X, ChevronDown } from "lucide-react"
import mainlogo from "../images/new logo selmore 2 1.png"
import "../styles/Header.css"



const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Optional for smooth scrolling
  });
};


export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className={`header-Selmore ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-content"  onClick={toggleMobileMenu}>
        <Link to="/" className="logo-main-selmore" onClick={scrollToTop}>
          <img src={mainlogo} alt="Selmore Logo" />
        </Link>

        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>

        <nav className={`nav-links ${isMobileMenuOpen ? "open" : ""}`} onClick={scrollToTop}>
          <Link to="/" onClick={toggleMobileMenu}>
            Home
          </Link>
          <Link to="/services" onClick={toggleMobileMenu}>
            Services
          </Link>
          <Link to="/about-us" onClick={toggleMobileMenu}>
            About Us
          </Link>
          <div className="dropdown">
            <Link to="/explore" onClick={toggleMobileMenu}>
              Explore Billboards 
            </Link>
            {/* <div className="dropdown-content">
              <Link to="/explore/digital" onClick={toggleMobileMenu}>
                Digital Billboards
              </Link>
              <Link to="/explore/static" onClick={toggleMobileMenu}>
                Static Billboards
              </Link>
              <Link to="/explore/mobile" onClick={toggleMobileMenu}>
                Mobile Billboards
              </Link>
            </div> */}
          </div>
          <Link to="/contact-us" onClick={toggleMobileMenu}>
            Contact Us
          </Link>
          <Link to="/faqs" onClick={toggleMobileMenu}>
            FAQs
          </Link>
        </nav>

        <Link
          to="/book-now"
          className="book-now-link"
          onClick={toggleMobileMenu}
        >
          <button className="book-nowbtn">Book Now</button>
        </Link>
      </div>
    </header>
  )
}
