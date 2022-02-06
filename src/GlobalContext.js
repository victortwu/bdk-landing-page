import React, { useContext, useState } from 'react'
import data from './data/restaurant-info.data'

const GlobalContext = React.createContext()
const UpdateGlobalContext = React.createContext()

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}

export const useUpdateGlobalContext = () => {
    return useContext(UpdateGlobalContext)
}

export const GlobalProvider = ({ children }) => {
    const [toggled, setToggled] = useState(false)
    const [dropdownHidden, setDropdownHidden] = useState(true)

    const hideDropdown = () => {
        setToggled(false)
        setTimeout(()=> setDropdownHidden(true), 400)
    }
       
    const showDropdown = () => {
        setDropdownHidden(false) 
        setTimeout(() => setToggled(true), 400)
    }

    const showOrHide = () => {
        toggled ? hideDropdown() : showDropdown()
    }

    const state = {
        toggled,
        dropdownHidden,
        data
    }

    const actions ={
        hideDropdown,
        showOrHide
    }

    return(
        <GlobalContext.Provider value={state}>
            <UpdateGlobalContext.Provider value={actions}>
                {children}
            </UpdateGlobalContext.Provider>
        </GlobalContext.Provider>
    )
}

