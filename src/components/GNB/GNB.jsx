import React, { useState, useEffect } from 'react';
import Tags from './Tags';
import styled from 'styled-components';
import {Cancel} from 'styled-icons/material/Cancel'
//import interopRequireDefault from 'jest-util/build/interopRequireDefault';
const IconCancel = styled(Cancel)`
        color: #ccc;
        width:20px;
        height:20px;
        opacity: ${props => props.isActive ? '1' : '0'};
`

const FormArea = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;

    padding: 16px 20px 0;
`
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
        width: ${props => props.isActive ? 'calc(100% - 50px)' : '100%' };
        font-size: 14px;
        line-height: 1.43;
        color: #484848;
        border: 1px solid #E6E6E7;
        border-radius: 100px;
        background: #F2F2F2;
`
const CancelButton = styled.button`
        height:39px;
        color: #000;
        font-size: 14px;
        outline:none;
        border:0;
        padding:0;
        background:none;
        width: ${props => props.isActive ? '50px' : '0'};
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


function useInput (defaultValue) {
    const [value, setValue] = useState(defaultValue);
    const onChange = e => {
        const {
            target: { value }
        } = e;
        setValue(value);  
    };
    
    return {value, setValue, onChange}
}

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

        return state;
    }
    const {y} = useScroll();

    const [inputIsActive, setInputIsActive] = useState(false);
    const searchValue = useInput("");

    const inputClear = e => {  
        !searchValue.value.length ? console.log('value 없뜸') : searchValue.setValue('');
    }
    const onClickCancle = (e) => {
        return setInputIsActive(false)
    }
    const onFocusField = e => {
        setInputIsActive(true)
    }
    const onBlurField = (e) => {
        setInputIsActive(false)
    }    
    const handleSubmit = e => {
        e.preventDefault();
    }
    
    return (
        <SearchWrap isScrollState={y}>
            <form onSubmit={handleSubmit}>
                <FormArea>
                <SearchInput isActive={inputIsActive}>
                    <Input type="text" {...searchValue} onFocus={onFocusField} placeholder="'서울'에 가보는 건 어떠세요?" />
                    <IconCancel onClick={inputClear} isActive={inputIsActive} />
                </SearchInput>   
                <CancelButton onClick={onClickCancle} isActive={inputIsActive} onBlur={onBlurField}>취소</CancelButton> 
                </FormArea>    
            </form>
            <Tags/>
        </SearchWrap>
    )
}

export default GNB
