import React from 'react';
import styled from 'styled-components';

const TagComponent = styled.div`
        position: relative;
        margin: 12px 0;
            & * {
                font-size:14px
            }
            ul {
                overflow:hidden;
            }
`
const TagComponentUl = styled.ul` 
        width:100%;
`
const Taglist = styled.li`
        list-style:none;
        display:inline-block;
        margin:0 4px;
        position: relative;
        &:first-child {
            padding-left:20px;
        }
        &:last-child {
            padding-right:20px;
        }
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
const TagItems = ['여행', '서울', '물놀이','여행'];
const Tags = () => {
    const TagListItem = TagItems.map((TagItem, i) => {
        return (<Taglist key={i}><TagBtn>{TagItem}</TagBtn></Taglist>)
    })
    return (
        <TagComponent>
            <TagComponentUl>
                {TagListItem}
            </TagComponentUl>
        </TagComponent>
    )
}

export default Tags; 