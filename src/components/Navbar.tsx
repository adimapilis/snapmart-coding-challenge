import React from 'react'
import styled from 'styled-components';

const StyledNavbar = styled.div`
  position: fixed;
  top:0;
  left:0;
  right:0;
  height: fit-content;
  background:#505050;
  display:flex;
  align-items: center;
  justify-content: flex-start;
  padding: 40px 60px; 
  z-index:1000;
`
const Title = styled.span`
  color:#f3f3f3;
  font-weight:bold;
  font-size: 45px;
`
const Navbar = () => {
  return (
    <StyledNavbar>
      <Title>
        Online Shopping Store
      </Title>
    </StyledNavbar> 
  )
}

export default Navbar