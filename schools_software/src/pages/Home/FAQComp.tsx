import React, { useState } from 'react';
import FAQItems,{FAQItem} from '../../assets/data/faqItemsData';
import "./FAQCom.css"
const FAQComp: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="container FAQ">
      <h2 className='d-flex py-2'>Frequently Asked Questions</h2>
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
                <p className='header'>{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQComp;
