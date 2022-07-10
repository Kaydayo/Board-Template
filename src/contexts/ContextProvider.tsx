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
    setScreenSize: React.Dispatch<React.SetStateAction<number | undefined>>,
    currentColor: string,
    currentMode: string,
    setMode: (e: any) => void,
    setColor: (e: any) => void,
    setCurrentMode: React.Dispatch<React.SetStateAction<string>>,
    setCurrentColor: React.Dispatch<React.SetStateAction<string>>,
    themeSettings: boolean,
    setThemeSettings: React.Dispatch<React.SetStateAction<boolean>>


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
    const [screenSize, setScreenSize] = useState<number | undefined>(undefined)
    const [currentColor, setCurrentColor] = useState('#03C9D7')
    const [currentMode, setCurrentMode] = useState('Light')
    const [themeSettings, setThemeSettings] = useState(false)

    const handleClick = (clicked: ClickType) => {
        setIsClicked({ ...initialState, [clicked]: true })
    }

    const setMode = (e:any) => {
        setCurrentMode(e.target.value)

        localStorage.setItem('themeMode', e.target.value )
    }

     const setColor = (e:any) => {
        setCurrentColor(e.target.value)

        localStorage.setItem('colorMode', e.target.value )
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
                setScreenSize,
                currentColor,
                currentMode,
                setCurrentColor,
                setCurrentMode,
                setColor,
                setMode,
                themeSettings,
                setThemeSettings
            }}
        >
          {children}   
        </StateContext.Provider> 
    )
}

export const useStateContext = () => useContext(StateContext);