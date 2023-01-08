import React, {useEffect, useState, Dispatch, SetStateAction} from "react"

type Cart = {
    productName: string,
    id: string,
    unitPrice: number,
    imageUrl: string,
    quantity: number,
}

type MainContextType = {
    category: string[],
    setCategory: Dispatch<SetStateAction<string[]>>,
    search: string,
    setSearch: Dispatch<SetStateAction<string>>,
    sort: boolean,
    setSort: Dispatch<SetStateAction<boolean>>,
    cart: Cart[],
    setCart: Dispatch<SetStateAction<Cart[]>>
}


const MainContext = React.createContext({} as MainContextType);

function MainContextProvider({children}: {children: React.ReactNode}) { 
    const [category, setCategory] = useState(['automotive', 'cloths', 'furniture', 'gadgets', 'groceries', 'lifestyle', 'toys'])
    const [search, setSearch] = useState("")
    const [sort, setSort] = useState(true)
    const [cart, setCart] = useState<Cart[]>(JSON.parse(localStorage.getItem("snapmart") as string)||[])
    
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