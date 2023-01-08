import React, { useContext } from 'react'
import styled from 'styled-components'
import { MainContext } from '../contexts/MainContext'

const ProductItemContainer = styled.div`
  width:auto;
  background:#f3f3f3;
  padding: 40px;
  display: flex; 
  margin: 10px 0px;
  gap:20px;
`
const ProductImg = styled.img`
  width: 175px;
  height: 200px;
  object-fit:cover;
`
const ProductInfo = styled.div`
  flex-grow:1;
  max-width:600px;
  display:flex;
  flex-direction:column;
  gap: 10px;
  justify-content:center;
`
const ProductName = styled.span`
  font-size: 27px;
  font-weight: bold;
  color: black;
  text-transform: capitalize;
`

const ProductCategory = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: #6fb133;
  text-transform: capitalize;
`

const ProductDescription = styled.span`
`

const ProductAction = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-around;

`

const ProductPrice = styled.span`
  color:#cc5143;
  font-size: 35px;
  font-weight:bold;
`
const ProductButton = styled.button`
  border:none;
  background:#a8e254;
  color:#50514f; 
  font-weight:bold;
  font-size:15px;
`

type DataTypes = {
  category : string,
  description: string,
  id: string,
  imageUrl: string,
  productName: string,
  unitPrice: number,
}

export interface DataProps{
  data : DataTypes;
}
const ProductItem = ({data} : DataProps ) => {
  const { category , description, id, imageUrl, productName, unitPrice} = data
  const { cart, setCart } = useContext(MainContext)
  const handleAddToCart = () => {
    const exist = cart?.find(each=> each.id==id)
    if (exist) {
      return
    }
    
    const newItem = {
      productName,
      id,
      unitPrice,
      imageUrl,
      quantity:1
    }
    const newCart  = [
      newItem,
      ...cart
    ]
    setCart(newCart)
  }
  return (
    <ProductItemContainer>
      <ProductImg src={imageUrl}/>
      <ProductInfo>
        <ProductName>{productName}</ProductName>
        <ProductCategory>{category} &gt;</ProductCategory>
        <ProductDescription>{description}</ProductDescription>
      </ProductInfo>
      <ProductAction>
        <ProductPrice>&#x20B1;{unitPrice}</ProductPrice>
        <ProductButton onClick={handleAddToCart}>Add to Cart</ProductButton>
      </ProductAction>
    </ProductItemContainer>
  )
}

export default ProductItem
