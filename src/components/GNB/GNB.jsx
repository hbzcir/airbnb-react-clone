import React from 'react';
import styled from 'styled-components';
const SearchWrap = styled.div`
        position: relative;
`
const Button = styled.button`
        position: absolute;
        display:none;
        top: 0;
        right: 0;
        height: 100%;
        border: 0;
        color: #000;
        font-size: 14px;
    `
const Input = styled.input.attrs(props => ({
        type: "text",
        size: props.size || "1em",    
}))`   box-sizing: border-box;
        width: 100%; 
        padding: 10px;
        margin: 0;
        outline: none;
        font-size: 14px;
        line-height: 1.43;
        color: #484848;
        background: #F2F2F2;
        border: 1px solid #E6E6E7;
        border-radius: 100px;
        :focus {
            width: calc(100% - 50px)
        }
        :focus + Button {
            display:block;
        }
    `
const GNB = () => {
    return (
        <SearchWrap>
            <Input type="text" placeholder="'서울'에 가보는 건 어떠세요?"></Input>
            <Button>취소</Button>
        </SearchWrap>

    )
}

export default GNB
