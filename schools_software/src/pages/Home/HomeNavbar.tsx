import React, { useState } from 'react';
import './HomeNavbar.css'; // Create a CSS file for styling and import it here
import makro_logo from "../../assets/md_logo_small.png"
const HomeNavbar: React.FC = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);

  const handleSearchIconClick = () => {
    setIsSearchActive((prevState) => !prevState);
  };

  const handleMenuToggleClick = () => {
    setIsMobileNavActive((prevState) => !prevState);
  };

  return (
    <div className="page-wrapper home-navbar">
      <div className="nav-wrapper">
        <nav className={`navbar ${isMobileNavActive ? 'mobile-nav' : ''}`}>
          <img
            src={makro_logo}
            alt="Makro Logo"
          />
          <div className="menu-toggle" id="mobile-menu" onClick={handleMenuToggleClick}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul className={`nav ${isSearchActive ? 'search' : 'no-search'}`}>
            <li className="nav-item">
              <a href="#">Home</a>
            </li>
            <li className="nav-item">
              <a href="#">About</a>
            </li>
            <li className="nav-item">
              <a href="#">Work</a>
            </li>
            <li className="nav-item">
              <a href="#">Careers</a>
            </li>
            <li className="nav-item">
              <a href="#">Contact Us</a>
            </li>
            <i
              className="fas fa-search"
              id="search-icon"
              onClick={handleSearchIconClick}
            ></i>
            <input
              className={`search-input ${isSearchActive ? 'search-active' : ''}`}
              type="text"
              placeholder="Search.."
            />
          </ul>
        </nav>
      </div>
      <section className="headline">
        <h1>Responsive Navigation</h1>
        <p>Using CSS grid and flexbox to easily build navbars!</p>
      </section>
      <section className="features">
      <div className="feature-container">
      <img src="https://cdn-images-1.medium.com/max/2000/1*HFAEJvVOq4AwFuBivNu_OQ.png" alt="Flexbox Feature"/>
      <h2>Flexbox Featured</h2>
      <p>This pen contains use of flexbox for the headline and feature section! We use it in our mobile navbar and show the power of mixing css grid and flexbox.</p>
    </div>
    <div className="feature-container">
      <img src="https://blog.webix.com/wp-content/uploads/2017/06/20170621-CSS-Grid-Layout-710x355-tiny.png" alt="Flexbox Feature"/>
      <h2>CSS Grid Navigation</h2>
      <p>While flexbox is used for the the mobile navbar, CSS grid is used for the desktop navbar showing many ways we can use both.</p>
    </div>
    <div className="feature-container">
      <img src="https://www.graycelltech.com/wp-content/uploads/2015/06/GCT-HTML5.jpg" alt="Flexbox Feature"/>
      <h2>Basic HTML5</h2>
      <p>This pen contains basic html to setup the page to display the responsive navbar.</p>
    </div>
      </section>
    </div>
  );
};

export default HomeNavbar;
