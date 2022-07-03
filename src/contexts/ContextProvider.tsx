import React, { createContext, useContext, useState } from 'react';

interface AppContextInterface {
    activeMenu: boolean,
    setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>
}
const StateContext = createContext<AppContextInterface|null>(null);

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false, 
}

type Props = {
    children: JSX.Element
}

export const ContextProvider = ({ children }: Props) => {
    const [activeMenu, setActiveMenu] = useState(true);
    return (
        <StateContext.Provider
            value={{
                activeMenu,
                setActiveMenu
            }}
        >
          {children}   
        </StateContext.Provider> 
    )
}

export const useStateContext = () => useContext(StateContext);