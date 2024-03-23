import React, { useState } from 'react';
import styled from 'styled-components';
import santaGif from '../image/download.jpeg';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 1000px; 
  background-color: #ededed; 
`;

const Santa = styled.div`
  position: absolute;
  width: 120px; 
  height: 120px;
  background-image: url(${santaGif}); 
  background-size: cover;
  cursor: pointer;
  left: ${(props) => props.x}px;
  top: ${(props) => props.y}px;
  transform: scaleX(${(props) => (props.direction === 'right' ? '1' : '-1')}); 
`;

const TextDetails = styled.b`
    text-align: center;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);

`;

const SantaMove = () => {
  const [santaPosition, setSantaPosition] = useState({ x: 0, y: 0 });
  const [direction, setDirection] = useState('right');

  const handleOnClick = (event) => {
    console.log(event, 'event1');
    const rect = event.target.getBoundingClientRect();
    console.log(rect, 'event2')
    const x = event.clientX - rect.left; 
    const y = event.clientY - rect.top; 

    //For giving direction to image
    if (x > santaPosition.x) { 
      setDirection('right');
    } else {
      setDirection('left');
    }

    setSantaPosition({ x, y });
  };

  return (
    <Container onClick={handleOnClick}>
      <TextDetails>Assignment of Santa Flipping</TextDetails>
      <Santa x={santaPosition.x} y={santaPosition.y} direction={direction} />
    </Container>
  );
};

export default SantaMove;
