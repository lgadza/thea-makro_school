
import React, { useState, useEffect, useRef } from 'react';
import './Pricing.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

interface OverlayStyles {
  opacity: number;
  '--overlay-x': string;
  '--overlay-y': string;
  '--overlay-card': number; // Track the currently hovered card
}

const Pricing: React.FC = () => {
  const [overlayStyles, setOverlayStyles] = useState<OverlayStyles>({
    opacity: 0,
    '--overlay-x': '0px',
    '--overlay-y': '0px',
    '--overlay-card': -1, // Initialize with no card hovered
  });

  const [overlayCards, setOverlayCards] = useState<JSX.Element[]>([]);
  const cardsContainerInnerRef = useRef<HTMLDivElement | null>(null);

  const cards = [
    {
      heading: 'Basic',
      price: '$9.99',
      bullets: [
        'Access to standard workouts and nutrition plans',
        'Email support',
      ],
      ctaText: 'Get Started',
      ctaLink: '#basic',
    },
    {
      heading: 'Pro',
      price: '$19.99',
      bullets: [
        'Access to advanced workouts and nutrition plans',
        'Priority Email support',
        'Exclusive access to live Q&A sessions',
      ],
      ctaText: 'Upgrade to Pro',
      ctaLink: '#pro',
    },
    {
      heading: 'Ultimate',
      price: '$29.99',
      bullets: [
        'Access to all premium workouts and nutrition plans',
        '24/7 Priority support',
        '1-on-1 virtual coaching session every month',
        'Exclusive content and early access to new features',
      ],
      ctaText: 'Go Ultimate',
      ctaLink: '#ultimate',
    },
  ];

  const applyOverlayMask = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const x = e.pageX - (cardsContainerInnerRef.current?.offsetLeft || 0);
    const y = e.pageY - (cardsContainerInnerRef.current?.offsetTop || 0);

    setOverlayStyles({
      ...overlayStyles,
      opacity: 1,
      '--overlay-x': `${x}px`,
      '--overlay-y': `${y}px`,
      '--overlay-card': index, // Track the currently hovered card
    });
  };

  const handleMouseLeave = () => {
    // Reset the '--overlay-card' when leaving a card
    setOverlayStyles({
      ...overlayStyles,
      '--overlay-card': -1,
    });
  };

  const createOverlayCta = (ctaText: string) => {
    return <div className="cta" aria-hidden="true">{ctaText}</div>;
  };

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      const newOverlayCards = entries.map((entry, index) => {
        const width = entry.borderBoxSize[0]?.inlineSize || 'auto';
        const height = entry.borderBoxSize[0]?.blockSize || 'auto';

        return (
          <div
            className="card"
            key={index}
            style={{
              width: `${width}px`,
              height: `${height}px`,
            }}
            onMouseMove={(e) => applyOverlayMask(e, index)}
            onMouseLeave={handleMouseLeave} // Reset when leaving
          >
            {createOverlayCta(cards[index].ctaText)}
          </div>
        );
      });
      setOverlayCards(newOverlayCards);
    });

    cards.forEach((_, index) => {
      const cardEl = document.querySelectorAll('.card')[index];
      if (cardEl) {
        observer.observe(cardEl);
      }
    });
  }, []); 

  return (
    <main className="main pricing flow">
      <h4 className="main__heading color-header">Pricing</h4>
      <div className="main__cards cards">
        <div className="cards__inner" ref={cardsContainerInnerRef}>
          {cards.map((card, index) => (
            <div className="cards__card card" key={index}>
              <h2 className="card__heading">{card.heading}</h2>
              <p className="card__price">{card.price}</p>
              <ul role="list" className="card__bullets flow">
                {card.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className='d-flex'>
                    <FontAwesomeIcon className='me-1' icon={faCheckCircle}/>
                    <span className='text-start'>{bullet}</span>
                  </li>
                ))}
              </ul>
              <a href={card.ctaLink} className="card__cta cta">{card.ctaText}</a>
            </div>
          ))}
        </div>
        <div className="overlay cards__inner" style={overlayStyles}>
          {overlayCards}
        </div>
      </div>
    </main>
  );
};

export default Pricing;
