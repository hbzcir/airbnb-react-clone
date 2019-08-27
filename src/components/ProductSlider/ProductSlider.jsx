import React, { useState } from 'react';
import Slider from "react-slick";
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ProductUl = styled.ul`
    width: 100%;
    overflow: hidden;
`
const List = styled.li`
    width: 170px;
    box-sizing:border-box;
    border:1px solid #ccc;
    padding: 10px;
    background:#fff;
        font-size:12px

`
const ProductText = styled.div`
    box-shadow: 0px 0px 21px -11px rgba(0,0,0,0.75);
    padding:20px
`
const ProductName = styled.div`
    font-weight: bold;
    padding-bottom:10px
`
const ProductInfo = styled.div`
`
const ProductThumbNamil = styled.div`
    height:100px;
    background: #ccc;
`

const ProductSlider = () => {
    const Listimgs = [
        'img1','img2','img3', 'img4','img5','img6'
    ]
    const ListNames = [
        'na1','nb2','nc3', 'na4','nb5','nc6'
    ]
    const ListTitles = [
        '상품쓰','상품쓰','상품쓰','상품쓰','상품쓰','상품쓰'
    ]

    const settings = {
        speed: 300,
        slidesToShow: 2,
        rtl: false
    };

    const ListItem = ListTitles.map((ListTitle, i) => {
        return (
            <List key={i}> 
                <ProductThumbNamil>{Listimgs[i]}</ProductThumbNamil>
                <ProductText>
                    <ProductName>ListTitle{i}</ProductName>
                    <ProductInfo>{ListNames[i]} </ProductInfo>
                </ProductText>
            </List>
        )
    })

    return (
        <ProductUl>
            <Slider {...settings}>
                {ListItem}
            </Slider>
        </ProductUl>
    )
}




export default ProductSlider 