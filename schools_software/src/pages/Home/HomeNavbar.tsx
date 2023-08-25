import React, { useState } from 'react';
import './HomeNavbar.css'; // Create a CSS file for styling and import it here
import makro_logo from "../../assets/md_logo_small.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faMagnifyingGlassMinus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
    <div className="page-wrapper glow pb-2 home-navbar">
      <div className="nav-wrapper px-0 container">
        <nav className={`navbar ${!isMobileNavActive ? 'mobile-nav' : 'is-active'}`}>
          <img
            src={makro_logo}
            alt="Makro Logo"
            style={{width:"50px"}}
          />
          <div className="menu-toggle" id="mobile-menu" onClick={handleMenuToggleClick}>
            <span className="menu-bar"></span>
            <span className="menu-bar"></span>
            <span className="menu-bar"></span>
          </div>
          <ul className={`nav ${isSearchActive ? 'search' : 'no-search'}`}>
            <li className="nav-item py-2 border-radius-round">
              <a href="#">Solutions</a>
              <FontAwesomeIcon className='ms-1' icon={faChevronDown} style={{fontSize:"14px"}}/>
            </li>
            <li className="nav-item py-2 border-radius-round">
              <a href="#">Features</a>
            </li>
            <li className="nav-item py-2 border-radius-round">
              <a href="#">Plans</a>
            </li>
            <li className="nav-item  p-2 border-radius-round">
              <a href="#">Partnerships</a>
            </li>
            <li className="nav-item py-2 me-2 px-3 border-radius-round">
              <a href="#">About us</a>
            </li>
            <div className="d-flex mt-1">
            {!isSearchActive && <FontAwesomeIcon
            icon={faSearch}
              className="search ms-5 color-header"
              id="search-icon"
              onClick={handleSearchIconClick}
            ></FontAwesomeIcon>}  
            {isSearchActive &&
            <FontAwesomeIcon
            icon={faMagnifyingGlassMinus}
              className="search "
              id="search-icon"
              onClick={handleSearchIconClick}
            ></FontAwesomeIcon>
            }
            <input
              className={`search-input mt-2 ms-1 main_bg ${isSearchActive ? 'search-active' : ''}`}
              type="text"
              placeholder="Search.."
            />
            </div> 
          </ul>
          <div className='px-2 d-flex'>
          <Button
        className="btn btn-primary me-1 d-flex justify-content-end">
            <Link to="/mss/login"> Login</Link>
      </Button>
          <Button
        className="btn btn-primary  d-flex justify-content-end">
            <Link to="/mss/register"> Sign up</Link>
      </Button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default HomeNavbar;
