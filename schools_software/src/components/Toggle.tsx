import React, { useState } from 'react';
import './Toggle.css'; // Import your CSS styles here

const Toggle: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="toggle-wrapper">
      <div className={`toggle ${isChecked ? 'checkcross' : ''}`}>
        <input
          type="checkbox"
          id="checkcross"
          checked={isChecked}
          onChange={handleToggle}
        />
        <label htmlFor="checkcross" className="toggle-item">
          <div className="check"></div>
        </label>
      </div>
      <div className="name">Yes & No</div>
    </div>
  );
};

export default Toggle;
