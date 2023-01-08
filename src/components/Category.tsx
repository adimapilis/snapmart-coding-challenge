import React, { useContext } from 'react'
import styled from 'styled-components'
import { data } from '../assets/data.json'
import { MainContext } from '../contexts/MainContext'

const CategoryContainer = styled.div`
position: fixed;
  top:0;
  left:0;
  bottom:0;
  width: 15vw;
  padding-top: 150px;
  background:#f3f3f3;
`

const CategoryListItem = styled.div`
  width:inherit;
  box-size: border;
  padding: 15px 0px;
  text-align:left;
`


const SelectedCategoryListItem = styled.div`
  width:inherit;
  box-size: border;
  padding: 15px 0px;
  text-align:left;
  background:#a6f951;
`

const CategoryListText = styled.span`
  color:#50514f;
  margin-left: 30px;
  text-transform: capitalize;
  font-size: 1.5rem
`


const uniqueCategory = (array : any) => {
  array = data.map(each => each.category)
  return array.sort().filter((item : object, pos : number, ary : []) => {
      return !pos || item != ary[pos - 1];
  });
}

const Category = () => {
  const { category, setCategory } = useContext(MainContext)
  const categories : any[]= uniqueCategory(data)
  return (
    <CategoryContainer>
      <CategoryListItem onClick={()=>setCategory(categories)}>
        <CategoryListText>
          All Items
        </CategoryListText>
      </CategoryListItem>
      {categories.map(each => {
          if (each==category) {
            return  <SelectedCategoryListItem key={each} onClick={()=>setCategory(each)}>
                      <CategoryListText>
                        {each}
                      </CategoryListText>
                    </SelectedCategoryListItem> 
          }
          else {
            return  <CategoryListItem key={each} onClick={()=>setCategory(each)}>
                      <CategoryListText>
                        {each}
                      </CategoryListText>
                    </CategoryListItem> 
          }
      })}
    </CategoryContainer>
  )
}

export default Category