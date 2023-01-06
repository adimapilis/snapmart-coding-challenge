import React, {useEffect, useState} from "react"
import { data } from '../assets/data.json'

const MainContext = React.createContext();

function MainContextProvider({children}) { 
    const [category, setCategory] = useState(['automotive', 'cloths', 'furniture', 'gadgets', 'groceries', 'lifestyle', 'toys'])
    const [search, setSearch] = useState("")
    const [sort, setSort] = useState(true)
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("snapmart"))||[])
    
    useEffect(() => {
    localStorage.setItem("snapmart", JSON.stringify(cart))
    }, [cart])
    

    return (
        <MainContext.Provider value={{ category, setCategory, search, setSearch, sort, setSort, cart, setCart }}>
            {children}
        </MainContext.Provider>
    )
}

export {MainContextProvider, MainContext}