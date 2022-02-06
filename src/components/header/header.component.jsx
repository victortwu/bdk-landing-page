import React from 'react'

import { Link } from 'react-router-dom'

import { useGlobalContext, useUpdateGlobalContext } from '../../GlobalContext'

import Hamburger from '../hamburger/hambuger.component'
import DropDown from '../dropdown/dropdown.component'

import './header.styles.scss'

const Header = () => {
    // const [toggled, setToggled] = React.useState(false)
    // const [dropdownHidden, setDropdownHidden] = React.useState(true)

    // const hideDropdown = () => {
    //     setToggled(false)
    //     setTimeout(()=> setDropdownHidden(true), 400)
    // }
       
    // const showDropdown = () => {
    //     setDropdownHidden(false) 
    //     setTimeout(() => setToggled(true), 400)
    // }

    // const showOrHide = () => {
    //     toggled ? hideDropdown() : showDropdown()
    // }
    const { toggled, dropdownHidden, data } = useGlobalContext()
    const { showOrHide, hideDropdown } = useUpdateGlobalContext() 

    return(
        <>
            <div className="header">
                <Link 
                    className="logo" 
                    to='/'
                    onClick={()=> hideDropdown()}
                    >
                        LOGO
                </Link>
                <Hamburger />
            </div>
            <DropDown toggled={toggled} dropdownHidden={dropdownHidden} showOrHide={showOrHide}/>
        </>
    )
}

export default Header
        