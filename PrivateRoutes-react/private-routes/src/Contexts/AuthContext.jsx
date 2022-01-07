import { createContext, useState } from "react";

const AuthContext = createContext();


const AuthContextProvider = ({children})=>{
    const [isAuth,setAuth] = useState(false);
    return <AuthContext.Provider value={{isAuth, setAuth}}>{children}</AuthContext.Provider>
}

export {AuthContext, AuthContextProvider};