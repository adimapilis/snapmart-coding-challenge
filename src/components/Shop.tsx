import React, { useContext } from 'react'
import styled from 'styled-components';
import { MainContext } from '../contexts/MainContext';
import { data } from '../assets/data.json'
import ProductItem from './ProductItem';

const ShopContainer = styled.div`
width: 48.5vw;
margin-top: 150px;
display:flex;
flex-direction: column;
`

const SearchField = styled.input`
box-sizing:border-box;
width: 100%;
border: none;
background: #f3f3f3;
padding: 10px 40px;
font-size:30px;
color:#505050;
`

const SortText = styled.span`
  text-align:right;
  margin-top:20px;
  font-weight:bold;
  font-size:20px;
`
const Shop = () => {

  const {category, search, setSearch, sort, setSort} = useContext(MainContext)

  const toRender = data?.filter(each=> category.includes(each.category))
    .filter(each=>each.description.toLowerCase().includes(search)||each.productName.toLowerCase().includes(search))
    .sort(function(a, b){
      if (sort) {
        return a.unitPrice-b.unitPrice
      }
      else {
        return b.unitPrice-a.unitPrice
      }
      
    })
  
  return (
    <ShopContainer>
      <SearchField type="text" placeholder="Search Item" value={search} onChange={(e)=>setSearch(e.target.value.toLowerCase())}/>
      <SortText onClick={()=>setSort(prev=>!prev)}>{sort? "Sort from high to low" : "Sort from low to high"}</SortText>
      {
        toRender.map(each=> 
          <ProductItem key={each.id} data={each}/>
        )
      }
      
    </ShopContainer>
  )
}

export default Shop