import React, { useState, useEffect, useRef } from 'react';
import Tags from './Tags';
import styled from 'styled-components';
//import interopRequireDefault from 'jest-util/build/interopRequireDefault';
 
const SearchWrap = styled.div`
        width:100%;
        box-sizing: border-box;
        position: fixed;
        top:0;
        z-index:1;
        transform:${props => props.isScrollState < 100 ? 'translateY(0px)' : 'translateY(-60px)'};
        background: #fff;
        border-bottom: 1px solid #EBEBEB;
        transition: transform 0.2s;
        
`
const SearchInput = styled.div`
        position: relative;
        box-sizing: border-box;
        margin: 16px 20px 0;
        width: ${props => props.isActive ? 'calc(100% - 82px)' : 'initial' };
        font-size: 14px;
        line-height: 1.43;
        color: #484848;
        border: 1px solid #E6E6E7;
        border-radius: 100px;
        background: #F2F2F2;
`
const CancelButton = styled.button`
        position: absolute;
        top: 0;
        right: 15px;
        padding:10px;
        color: #000;
        font-size: 14px;
        outline:none;
        opacity: ${props => props.isActive ? '1' : '0'};
    `
const ClearButton = styled.button`
        display:inline-block;
        margin:0 5px;
        padding:3px 6px;
        color: #fff;
        font-size:10px;
        font-weight:bold;
        background:#ccc;
        outline:none;
        border:0;
        border-radius:100%;
opacity: ${props => props.isActive ? '1' : '0'};
    `
const Input = styled.input.attrs(props => ({
        type: "text"
}))`   width:calc(100% - 60px);
        font-size:14px;
       background: none;
       border:0;
       padding:11px 10px;
       outline:none
       
    `


const GNB = () => {

const useScroll = () => {
    const [ state, setState ] = useState({
        x : 0,
        y : 0
    })
    const onScroll = () => {
        setState({y:window.scrollY, x : window.scrollX})
       
    }
    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return state
}

    const {y} = useScroll();
    console.log(window.scrollY,'y',{y})
    const [name, setName] = useState('');
    const [inputIsActive, setInputIsActive] = useState(false);
    
    const onChangeName = (e) => {
        //e.preventDefualt();
        setName(e.target.value);
    }
    const onClickCancle = (e) => {
        return setInputIsActive(false)
    }
    const onFocusField = (e) => {
        setInputIsActive(true)
    }
    const onBlurField = (e) => {
        setInputIsActive(false)
    }
    const inputClear = (e) => {
        !name.length ? console.log('value 없뜸') : setName('');
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <SearchWrap isScrollState={y}>
            {/* <Input type="text" placeholder="'서울'에 가보는 건 어떠세요?" />
            <Button>취소</Button> */}
            <form onSubmit={handleSubmit}>
                <SearchInput isActive={inputIsActive}>
                    <Input type="text" value={name} onChange={onChangeName} onFocus={onFocusField} placeholder="'서울'에 가보는 건 어떠세요?" />
                    <ClearButton onClick={inputClear} isActive={inputIsActive}>X</ClearButton> 
                </SearchInput>
                <CancelButton onClick={onClickCancle} isActive={inputIsActive} onBlur={onBlurField}>취소</CancelButton> 
            </form>
            <Tags/>
        </SearchWrap>
        
    )
}

export default GNB
