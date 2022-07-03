import React, { createContext, useContext, useState } from 'react';

export enum ClickType  {
    Chat='chat', 
    Cart = 'cart',
    UserProfile = 'userProfile',
    Notification='notification' 
}
 
type NavClick = {
    chat: boolean,
    cart: boolean,
    userProfile: boolean,
    notification: boolean
}
interface AppContextInterface {
    activeMenu: boolean,
    setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>,
    isClicked: NavClick,
    setIsClicked: React.Dispatch<React.SetStateAction<NavClick>>,
    handleClick: (clicked: ClickType) => void,
    screenSize: number | undefined,
    setScreenSize: React.Dispatch<React.SetStateAction<number|undefined>>
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
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState<number|undefined>(undefined)

    const handleClick = (clicked: ClickType) => {
        setIsClicked({ ...initialState, [clicked]: true })
    }
    return (
        <StateContext.Provider
            value={{
                activeMenu,
                setActiveMenu,
                isClicked,
                setIsClicked,
                handleClick,
                screenSize,
                setScreenSize
            }}
        >
          {children}   
        </StateContext.Provider> 
    )
}

export const useStateContext = () => useContext(StateContext);