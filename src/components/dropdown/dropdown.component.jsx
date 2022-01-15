import React from "react"; 
import { Link } from 'react-router-dom'

import './dropdown.styles.scss'

const DropDown = ( { toggled, setToggled } ) => {
    return (
        <div className={`${toggled ? 'show' : 'hide'} dropdown`}>
            <div className="options">
                <Link 
                    className="option" 
                    to='/'
                    onClick={()=> setToggled(false)}
                    >
                        HOME
                </Link>
                <Link 
                    className="option" 
                    to='/about'
                    onClick={()=> setToggled(false)}
                    >
                        ABOUT
                </Link>
                <div className="option">option 3</div>
                <div className="option">option 4</div>
            </div>
        </div>
    )
}

export default DropDown