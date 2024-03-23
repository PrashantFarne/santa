import React from 'react';
import SantaMove from './components/santa';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

const App = () => {
  
  return (
    <div>
      <GlobalStyle />
      <SantaMove />
    </div>
  );
};

export default App;

