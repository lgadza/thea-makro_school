import React from 'react';
import "./Buttons.css"
export const PushButton: React.FC<{ message: string }> = ({ message }) => {
  return (
    <div id="push-btn">
      <div className="push-btn">
        {message}
      </div>
    </div>
  );
};


