import React from 'react';
import styled from 'styled-components';
const MainTitle = styled.h2`
    max-width: 50%;
    font-size: 22px;
    line-height: 26px;
    letter-spacing: -0.6px;
    margin: 0 0 16px 0;
    padding: 0 24px;
    color: inherit;
`
const Title = () => {
    const TitleItmes= [`에어비앤비와 함께 전 세계를 여행해보세요`,'b','c'];
    const TitleList = TitleItmes.map((TitleItme, _i) => {
        return ( 
                // {TitleItme} 
                TitleItme
            )
    })
    return (
        <div>
        <MainTitle>{TitleList[0]}</MainTitle>
        </div>
    )
}

export default Title