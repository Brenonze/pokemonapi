// src/components/Card.tsx
import React from 'react';

interface CardProps {
  title: string;
  image: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, image, description }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <p>{description}</p>
    </div>
  );
};

export default Card;
