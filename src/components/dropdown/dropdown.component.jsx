import React from "react"; 
import { Link } from 'react-router-dom'

import './dropdown.styles.scss'

const DropDown = ( { toggled, showOrHide, dropdownHidden } ) => {
    return (
    <div className={`${dropdownHidden ? 'hide' : ''} dropdown-container`}>
        <div className={`${toggled ? 'show' : 'slide-down'} dropdown`}>
            <div className="options">
                <Link 
                    className="option" 
                    to='/'
                    onClick={()=> showOrHide()}
                    >
                        HOME
                </Link>
                <Link 
                    className="option" 
                    to='/about'
                    onClick={()=> showOrHide()}
                    >
                        ABOUT
                </Link>
                <div className="option">option 3</div>
                <div className="option">option 4</div>
            </div>
        </div>
    </div>
    )
}
        
export default DropDown
