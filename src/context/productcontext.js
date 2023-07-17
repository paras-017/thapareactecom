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
        //state for allProduct
        isLoading:false,
        isError:false,
        products:[],
        featureProducts:[],
        //states for singleProduct
        isSingleLoading : false,
        singleProduct:{}
    }
    const [state, dispatch] = useReducer(reducer, intialState)
//--------------------------------get allProducts API--------------------------------
    const getProducts =async (url) =>{
        //dispatch call the action method of reducer
        dispatch({type:"SET_LOADING"})
        try {
        const res = await axios.get(url)
        const products = await res.data
        setTimeout(() => { 
            dispatch({type:'SET_API_DATA', payload:products})
        }, 1300);
       } catch (error) {
        dispatch({type:'API_ERROR'})
       }
    }

//--------------------------------get singleProduct API--------------------------------
    const getSingleProcut = async ()=>{
        try {
            const res = await axios.get(`https://api.pujakaitem.com/api/products?id=thapaserialnoa`)
            const singleProduct = await res.data
        } catch (error) {
            
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