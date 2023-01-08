import { useContext, useEffect, useState } from 'react'

import { MainContext } from './contexts/MainContext'
import Navbar from './components/Navbar'
import styled from 'styled-components';
import './App.css'
import Category from './components/Category';
import Shop from './components/Shop';
import Cart from './components/Cart';




function App() {
  

  return (
    <>
    <Navbar />
    <Category />
    <Shop />
    <Cart />
    </>
  )
}

export default App
