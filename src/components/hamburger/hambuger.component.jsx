import React from 'react'

import { useGlobalContext, useUpdateGlobalContext } from '/Users/victortwu/Desktop/projects/bdk-page/src/GlobalContext.js'
import './hamburger.styles.scss'

const Hamburger = ( ) => {
    
    const state = useGlobalContext()
    const actions = useUpdateGlobalContext()
    
    return(
        <div onClick={()=> actions.showOrHide()} className={`${state.toggled ? 'flip-burger' : ''} hamburger`}>
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
