import React from 'react';
import styled from 'styled-components';

const Title = () => {
    const TitleItmes= ['a','b','c'];
    const TitleList = TitleItmes.map((TitleItme, i) => {
        return ( {TitleItme} )
    })
    return (
        <Title>
        {TitleList}
        sdfsfsd
        </Title>
    )
}

export default Title