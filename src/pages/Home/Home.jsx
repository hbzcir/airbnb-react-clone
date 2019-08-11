import React from 'react'
import GNB from '../../components/GNB'
import Product from '../../components/Product'
import styled from 'styled-components'

const HomeWrap = styled.div`
    padding-top :120px;
`
const Home = () => {
    return (
        <HomeWrap>
            <GNB />
            <Product />
        </HomeWrap>
    )
}


export default Home;