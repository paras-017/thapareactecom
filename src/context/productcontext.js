// create a context
// provider
//consumer

import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/productsReducer'
// CREATING CONTEXT
const AppContext = createContext()

const API = "https://api.pujakaitem.com/api/products"


//PROVIDING CONTEXT
const AppProvider = ({children}) => {
    const intialState = {
        isLoading:false,
        isError:false,
        products:[],
        featureProducts:[]
    }
    const [state, dispatch] = useReducer(reducer, intialState)

    const getProducts =async (url) =>{
        //dispatch call the action method of reducer
        dispatch({type:"SET_LOADING"})
        try {
        const res = await axios.get(url)
        const products = await res.data
         dispatch({type:'SET_API_DATA', payload:products})
       } catch (error) {
        dispatch({type:'API_ERROR'})
       }
    }
    useEffect(() => {
    getProducts(API)
    }, [])


    return (
        <AppContext.Provider value={{...state}}>{children}</AppContext.Provider>
    )
}
// CUSTOM HOOKS
const useProductContext = () => {
    return useContext(AppContext)
}
export {AppProvider, AppContext, useProductContext}