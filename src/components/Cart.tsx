import React, { useContext, useState } from 'react'
import styled from 'styled-components';
import { MainContext } from '../contexts/MainContext';
import CartItem from './CartItem';

const CartContainer = styled.div`
  position:fixed;
  top:0;
  right:0;
  bottom:0;
  width: 30vw;
  padding-top: 90px;
  background:#f3f3f3;
`
const CartHeader = styled.div`
background: #cbcbcb;
display: flex;
padding: 20px 15px 15px 50px;
height: 100px;
justify-content: space-between;
`
const CartTitle = styled.span`
color:#505050;
font-size: 35px;
font-weight:bold;
align-self:center
`
const ClearCartButton = styled.button`
color:#e9e9e9;
background:#cc5143;
border:none;
height: fit-content;
align-self: flex-end;
`
const CartItemContainer = styled.div`
height: 550px;
overflow:scroll;
`
const CartAction = styled.div`
background: #cbcbcb;
paddin-top:20px;
height:100%;
display:flex;
flex-direction: column;
`
const CartTotalItems = styled.div`
padding: 10px 70px 10px 50px;
display:flex;
justify-content: space-between;
font-weight:bold;
align-items:flex-end; 
`

const TotalItems = styled.span`
font-weight: bold;
color: #cc5143;
font-size: 30px;
`
const CartTotalAmount = styled.div`
padding:0px 70px 10px 50px;
display:flex;
justify-content: space-between;
font-weight:bold;
align-items:flex-end; 
`
const TotalAmount= styled.span`
font-weight: bold;
color: #cc5143;
font-size: 35px;
`
const CartCheckOut = styled.button`
background:#a6f951;
font-size: 20px;
font-weight:bold;
font-color:#505050;
align-self:center;
`
const ModalBackground = styled.div`
  position: fixed;
  z-index:10;
  background:rgb(0 0 0 /.1);
  top:0;
  bottom:0;
  right:0;
  left: 0;
  display:flex;
  align-items:center;
  justify-content: center;
`

const ModalContent = styled.div`
  width: 400px;
  height: 200px;
  background:white;
  z-index:1000;
  border-radius: 20px;
  display:flex;
  align-items:center;
  justify-content: center;
  font-weight:bold;
  font-size: 35px;
  text-align: center;
  line-height: 3rem;
`

const Cart = () => {
  const [openModal, setOpenModal] = useState(false)
  const { cart, setCart } = useContext(MainContext)
  const totalQuantity = cart.reduce((a,b)=> (a+ b.quantity),0)
  const totalAmount = cart.reduce((a,b)=> (a +(b.unitPrice*b.quantity)),0).toFixed(2)
  console.log(openModal)
  return (
    <CartContainer>
      { openModal && <ModalBackground onClick={()=>setOpenModal(false)}>
        <ModalContent>
          Thank you for purchasing!

        </ModalContent>
      </ModalBackground>}
      <CartHeader>
        <CartTitle>My Cart</CartTitle>
        <ClearCartButton onClick={()=>setCart([])}>Clear Cart</ClearCartButton>
      </CartHeader>
      <CartItemContainer>
        {cart.map(each=> <CartItem key={each.id} data={each}/>)}
      </CartItemContainer>
      <CartAction>
        <CartTotalItems>
          <span>Total Items:</span>
          <TotalItems>{totalQuantity}</TotalItems>
        </CartTotalItems>
          
        <CartTotalAmount>
          <span>Total Amount</span>
          <TotalAmount>&#x20B1; {totalAmount}</TotalAmount>
        </CartTotalAmount>
        <CartCheckOut onClick={()=>{setOpenModal(true); setCart([])}}>
          Checkout
        </CartCheckOut>
      </CartAction>
      { openModal && <ModalBackground onClick={()=>setOpenModal(false)}>

      </ModalBackground>}
      
    </CartContainer>
    
  )
}

export default Cart