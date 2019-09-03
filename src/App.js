import React from 'react';
import Home from './pages/Home';
import GlobalStyle from './components/GlobalStyle';
import styled from 'styled-components';

const Apps = styled.div`
    height: 1000vh;
`
// react hooks

const App = () => {
  return (
    <Apps>
      <GlobalStyle />
      <Home />
    </Apps> 
  )
}

export default App
