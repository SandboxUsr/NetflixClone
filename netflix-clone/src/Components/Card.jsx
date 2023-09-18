import "../Styles/card.css";
import React, { useState } from 'react';
import '../Styles/hoverableDiv.css'; 
import OnHoverCard from './OnHoverCard';

const HoveredComponent = () => {
  return <div className="hovered-card"><OnHoverCard/></div>;
};

export default function Card(props) {

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
        <div>
          <img
            className="poster"
            src={`https://image.tmdb.org/t/p/w200/${props.poster}`}
            alt="poster"
          />
        </div>
        {isHovered && <HoveredComponent />}
      </div>
    </div>
  );
}
