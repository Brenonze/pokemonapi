import React from 'react';

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => (
  <button onClick={onClick} style={{ padding: '10px 20px', cursor: 'pointer' }}>
    {text}
  </button>
);

export default Button;
