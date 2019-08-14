import React from 'react'
import GNB from '../../components/GNB'
import ProductSlider from '../../components/ProductSlider'
import styled from 'styled-components'

const HomeWrap = styled.div`
    padding-top :120px;
`
const Home = () => {
    return (
        <HomeWrap>
            <GNB />
            <ProductSlider />
        </HomeWrap>
    )
}


export default Home;