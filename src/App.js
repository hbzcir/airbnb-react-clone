import React, { useState, useEffect } from 'react';
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
      {/* <H1 style={{color: y > 100? "red" : "yellow"}}>제목</H1> */}
      <GlobalStyle />
      <Home />
    </Apps> 
  )

  // const [item, setItem] = useState(1);
  // const incrementItem = () => { setItem(item + 1) };
  // const decrementItem = () => { setItem(item - 1) };
  // return (
  //   <div className="SetAmount">
  //     {item}
  //     <button onClick={incrementItem}> IncrementItem </button>
  //     <button onClick={decrementItem}> DecrementItem </button>
  //   </div>
  // )
}

export default App
