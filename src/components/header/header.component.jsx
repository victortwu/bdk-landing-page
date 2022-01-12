import React from 'react'
import Hamburger from '../hamburger/hambuger.component'

import './header.styles.scss'

const Header = () => {
    return(
        <div className="header">
            <div className="logo">LOGO</div>
            <Hamburger/>
        </div>
    )
}

export default Header