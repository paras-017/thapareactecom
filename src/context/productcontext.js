// create a context
// provider
//consumer

import axios from "axios";
import { createContext, useContext, useEffect } from "react";
// CREATING CONTEXT
const AppContext = createContext()

const API = "https://api.pujakaitem.com/api/products"
const getProducts =async (url) =>{
    const res = await axios.get(url)
    const products = await res.data
    
}

//PROVIDING CONTEXT
const AppProvider = ({children}) => {
    useEffect(() => {
    getProducts(API)
    }, [])


    return (
        <AppContext.Provider value={{myName:'paras'}}>{children}</AppContext.Provider>
    )
}
// CUSTOM HOOKS
const useProductContext = () => {
    return useContext(AppContext)
}
export {AppProvider, AppContext, useProductContext}