// create a context
// provider
//consumer

import { createContext, useContext } from "react";

const AppContext = createContext()
const AppProvider = ({children}) => {
    return (
        <AppContext.Provider value={{myName:'paras'}}>{children}</AppContext.Provider>
    )
}
//custom hook
const useProductContext = () => {
    return useContext(AppContext)
}
export {AppProvider, AppContext, useProductContext}