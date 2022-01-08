import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({children, store})=>{
    const {dispatch, getState} = store;
    const value = {dispatch, getState};
    const [state,setState] = useState(0);
    const forceUpdate =()=>{ setState(prev=>prev+1)};
    store.subscribe(forceUpdate);

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export {AppContextProvider};