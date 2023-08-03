import React, { useState } from 'react';
import './FAQ.css';

interface FAQItem {
  id: number;
  title: string;
  content: string;
}

const FAQItems: FAQItem[] = [
  {
    id: 1,
    title: 'Why is the moon sometimes out during the day?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.',
  },
  {
    id: 2,
    title: 'Why is the sky blue?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.',
  },
  {
    id: 3,
    title: 'Will we ever discover aliens?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.',
  },
  {
    id: 4,
    title: 'How much does the Earth weigh?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.',
  },
  {
    id: 5,
    title: 'How do airplanes stay up?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.',
  },
];

const FAQ: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="container">
      <h2>Frequently Asked Questions</h2>
      <div className="FAQ">
        {FAQItems.map((item) => (
          <div className="FAQ-item" key={item.id}>
            <button
              id={`FAQ-button-${item.id}`}
              aria-expanded={expandedId === item.id ? 'true' : 'false'}
              onClick={() => toggleFAQ(item.id)}
            >
              <span className="FAQ-title">{item.title}</span>
              <span className="icon" aria-hidden="true"></span>
            </button>
            {expandedId === item.id && (
              <div className="FAQ-content">
                <p>{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
