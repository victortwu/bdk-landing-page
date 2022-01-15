import React from 'react'

import { Link } from 'react-router-dom' 

import Hamburger from '../hamburger/hambuger.component'
import DropDown from '../dropdown/dropdown.component'

import './header.styles.scss'

const Header = () => {
    const [toggled, setToggled] = React.useState(false)

    return(
        <>
            <div className="header">
                <Link 
                    className="logo" 
                    to='/'
                    onClick={()=> setToggled(false)}
                    >
                        LOGO
                </Link>
                <Hamburger toggled={toggled} setToggled={setToggled}/>
            </div>
            <DropDown toggled={toggled} setToggled={setToggled}/>
        </>
    )
}

export default Header
        