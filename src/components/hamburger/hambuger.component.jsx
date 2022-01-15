import React from 'react'
import './hamburger.styles.scss'

const Hamburger = ( { toggled, setToggled, showOrHide } ) => {
    
    return(
        <div onClick={()=> showOrHide()} className={`${toggled ? 'flip-burger' : ''} hamburger`}>
            <div className='front'>
                <div className="hamburger-line"/>
                <div className="hamburger-line"/>
                <div className="hamburger-line"/>
            </div>
            <div className='back'>
                &#10005;
            </div>
        </div>
    )
}

export default Hamburger
