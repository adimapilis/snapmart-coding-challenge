import React, { useContext } from 'react'
import styled from "styled-components"
import { MainContext } from '../contexts/MainContext'

const CartItemWrapper = styled.div`
display:flex;
align-items:center;
max-width:100%;
padding: 20px 40px;
`

const CartItemImage = styled.img`
  width: 80px;
  height: 100px;
`
const CartItemInfo = styled.div`
flex-grow:1;
padding: 0px 20px;
`
const CartItemPrice = styled.div`
font-size: 35px;
font-weight:bold;
color:#cc5143;
margin-top:20px;
`
const CartItemName = styled.span`
font-size: 35px;
font-weight:bold;
color:#505050
margin-bottom:20px;
`
const CartItemAction = styled.div`
display:flex;
gap:10px;
align-items:center;
`
const CartItemButton = styled.button`
background:#cbcbcb;
padding:5px 10px;

`
const CartItemQuantity = styled.span`
`

type DataType = {
  productName: string,
  id: string,
  unitPrice: number,
  imageUrl: string,
  quantity: number,
}
 
export interface DataProps {
  data: DataType;
}
const CartItem = ({data} : DataProps) => {
  const { productName, id, unitPrice, imageUrl, quantity } = data
  const { cart, setCart } = useContext(MainContext)

  const handleAdd = () => {
    const newCart = cart.map(each => {
      if (each.id==id) {
        const newQuantity = each.quantity+1
        return ({...each, quantity: newQuantity})
      }
      else {
        return each
      }
    })
    setCart(newCart)
  }

  const handleMinus = () => {
    const newCart = cart.map(each => {
      if (each.id==id) {
        const newQuantity = each.quantity-1
        return ({...each, quantity: newQuantity})
      }
      else {
        return each
      }
    }).filter(each=>each.quantity!=0)
    setCart(newCart)
  }

  
  return (
    <CartItemWrapper>
      <CartItemImage src={imageUrl}/>
      <CartItemInfo>
        <CartItemName> 
          {productName}
        </CartItemName>
        <CartItemPrice>
          {(unitPrice*quantity).toFixed(2)}
        </CartItemPrice>
      </CartItemInfo>
      <CartItemAction>
        <CartItemButton onClick={handleMinus}>
        -
        </CartItemButton>
        <CartItemQuantity>
          {quantity}
        </CartItemQuantity>
        <CartItemButton onClick={handleAdd}>
          +
        </CartItemButton>
      </CartItemAction>

    </CartItemWrapper>
  )
}

export default CartItem