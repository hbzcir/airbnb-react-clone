import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const TagComponent = styled.div`
        position: relative;
            & * {
                padding:0; 
                margin:0;
                font-size:14px
            }
            ul {
                overflow:hidden;
                padding:12px 20px
            }
`
const Taglist = styled.li`
        list-style:none;
        display:inline-block;
        margin:0 4px;
        position: relative;
`
const TagBtn = styled.button`
        padding: 11px 15px;
        border-radius: 70px;
        color: rgb(72, 72, 72);
        background: none;
        border: 1px solid #d3d3d3;
        :focus {
            outline:none
        }
`
const TagItems = ['여행', '서울', '물놀이'];
const Tags = () => {
    const TagListItem = TagItems.map((TagItem, i) => {
        return (<Taglist key={i}><TagBtn>{TagItem}</TagBtn></Taglist>)
    })
    return (
        <TagComponent>
            <ul>
                {TagListItem}
            </ul>
        </TagComponent>
    )
}

export default Tags


//노마드 코더 훅. usescroll 
// use관련  확인하기 callback ,성능 최적화 
// 리액트 생명주기. -> useEfect 
// useContecst 
// useCallback

// input value onChange 

// ㄱㄷㅁㅊㅅ dev tool  톱니바퀴 . 