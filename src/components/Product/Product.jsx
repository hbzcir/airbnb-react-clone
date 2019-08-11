import React, { useState }from 'react';
import styled from 'styled-components'; 

const ProductUl = styled.ul`
    display: flex;
    flex-wrap : nowrap;
    outline: 1px solid red
`
const List = styled.li`
    width: 140px;

`
const ProductLink = styled.a`
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

const Product = () => {
    const Listimgs = [
        'img1','img1','img1'
    ]
    const ListNames = [
        'na','nb','nc'
    ]
    const ListTitles = [
        '상품쓰','상품쓰','상품쓰'
    ]

    const ListItem = ListTitles.map((ListTitle, i) => {
        return (
            <List key={i}>
                <ProductLink>
                    <ProductThumbNamil>{Listimgs[i]}</ProductThumbNamil>
                    <ProductText>
                        <ProductName>ListTitle{i}</ProductName>
                        <ProductInfo>{ListNames[i]} </ProductInfo>
                    </ProductText>
                </ProductLink>
            </List>
        )
    })
    return (
       
        <ProductUl>
            
            {ListItem}
        </ProductUl>
    )

}

export default Product