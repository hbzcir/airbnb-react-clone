import React from 'react';
import styled from 'styled-components'; 
const DecoTextWrap = styled.div`
    padding-left: 24px;
    padding-right: 24px;
    margin-bottom: 36px;
    margin-top: 36px;
`
const InfoText = styled.span`
    display: inline-block;
    margin: 0px;
    padding-bottom: 16px;
    border-bottom: 1px solid #EBEBEB;
    word-wrap: break-word;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.7;
    color: #767676;
`

const DecoText = () => {
    return (
        <DecoTextWrap>
           <InfoText>여행 날짜와 게스트 인원수를 입력하면 1박당 총 요금을 확인할 수 있습니다. 관광세가 추가로 부과될 수 있습니다.</InfoText>
        </DecoTextWrap>

    )
}

export default DecoText