import React from 'react';
import GNB from '../../components/GNB';
import Title from '../../components/Title';
import ProductSlider from '../../components/ProductSlider';
import DecoText from '../../components/DecoText';
import styled from 'styled-components';

const HomeWrap = styled.div`
    width: 100%;
    padding-top :120px;
    overflow: hidden;
`

const Home = () => {
    return (
        <HomeWrap>
            <GNB />
            <DecoText />
            <Title />
            <ProductSlider />
        </HomeWrap>
    )
}


export default Home;