import React, { useState } from 'react';
import '../Styles/hoverableDiv.css'; 
import OnHoverCard from './OnHoverCard';


const HoveredComponent = () => {
  return <div className="hovered-card"><OnHoverCard/></div>;
};

const ContainerComponent = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="hoverable-card">
        <div>Hover over me</div>
        {isHovered && <HoveredComponent />}
      </div>
    </div>
  );
};

export default ContainerComponent;
