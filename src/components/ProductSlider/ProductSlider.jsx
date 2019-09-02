import React, { useState } from 'react';
import Slider from "react-slick";
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ProductUl = styled.ul`
    width: 100%;
`
const List = styled.li`
    width: 170px;
    box-sizing:border-box;
    padding: 4px;
    border-radius: 3px;
    background:#fff;
   
    :focus {
        outline:none
    }
        font-size:12px;
        div:focus {
            outline:none
        }

`
const ProductText = styled.div`
    min-height: 56px;
    padding: 16px;
    box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.06);
    
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
        slidesToShow: 2.5,
        slidesToScroll: 1,
        infinite: false
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