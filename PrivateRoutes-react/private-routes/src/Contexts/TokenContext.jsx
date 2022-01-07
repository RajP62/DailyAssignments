import { createContext, useState } from "react";

const TokenContext = createContext();


const TokenContextProvider = ({children})=>{
    const [token,setToken] = useState(false);
    return <TokenContext.Provider value={{token, setToken}}>{children}</TokenContext.Provider>
}

export {TokenContext, TokenContextProvider};