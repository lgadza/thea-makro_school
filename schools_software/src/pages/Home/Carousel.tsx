
import React, { useState, useEffect } from 'react';
import "./Carousel.css"

const Carousel: React.FC = () => {
  const [currentBanner, setCurrentBanner] = useState<number>(1);

  const bannerSwitcher = () => {
    setCurrentBanner((prevBanner) => (prevBanner % 4) + 1);
  };

  useEffect(() => {
    const bannerTimer = setInterval(bannerSwitcher, 5000);
    return () => clearInterval(bannerTimer);
  }, []);

  const handleBannerClick = (bannerNumber: number) => {
    setCurrentBanner(bannerNumber);
  };

  return (
    <section id="section-1" className='main_bg carousel'>
      <div className="content-slider">
        <input type="radio" id="banner1" className="sec-1-input" name="banner" checked={currentBanner === 1} />
        <input type="radio" id="banner2" className="sec-1-input" name="banner" checked={currentBanner === 2} />
        <input type="radio" id="banner3" className="sec-1-input" name="banner" checked={currentBanner === 3} />
        <input type="radio" id="banner4" className="sec-1-input" name="banner" checked={currentBanner === 4} />
        <div className="slider">
        <div id="top-banner-1" className="banner">
          <div className="banner-inner-wrapper">
            <h2>Makrodex Schools</h2>
            <h1>Integrated school</h1>
            <h1>management platform</h1>
            <div className="line"></div>
            <div className="learn-more-button"><a href="#section-2">Learn More</a></div>
          </div>
        </div>
        <div id="top-banner-2" className="banner">
          <div className="banner-inner-wrapper">
            <h2>C.A.L.A</h2>
            <h1>AI-powered CALA</h1>
            <h1>project assistance</h1>
            <div className="line"></div>
            <div className="learn-more-button"><a href="#section-4">Learn More</a></div>
          </div>
        </div>
        <div id="top-banner-3" className="banner">
          <div className="banner-inner-wrapper">
            <h2>Master school records</h2>
            <h1>Effortlessly</h1>
            <h1>manage student data</h1>
            <div className="line"></div>
            <div className="learn-more-button"><a href="#section-6">Learn More</a></div>
          </div>
        </div>
        <div id="top-banner-4" className="banner">
          <div className="banner-inner-wrapper">
            <h2>Save time</h2>
            <h1>Simplify </h1>
            <h1> administrative tasks </h1>
            <div className="line"></div>
            <div className="learn-more-button"><a href="#main-footer">Learn More</a></div>
          </div>
        </div>
        </div>
        <nav>
          <div className="controls">
            <label htmlFor="banner1" onClick={() => handleBannerClick(1)}>
              <span className="progressbar">
                <span className="progressbar-fill"></span>
              </span>
              <span className='label-nav'>
               Intro
              </span>
            </label>
            <label htmlFor="banner2" onClick={() => handleBannerClick(2)}>
              <span className="progressbar">
                <span className="progressbar-fill"></span>
              </span>
              <span className='label-nav'> CALA</span>
            </label>
            <label htmlFor="banner3" onClick={() => handleBannerClick(3)}>
              <span className="progressbar">
                <span className="progressbar-fill"></span>
              </span>
              <span className='label-nav'> Efficiency</span>
            </label>
            <label htmlFor="banner4" onClick={() => handleBannerClick(4)}>
              <span className="progressbar">
                <span className="progressbar-fill"></span>
              </span>
              <span className='label-nav'>Simplicity</span>
            </label>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Carousel;

