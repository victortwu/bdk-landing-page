import React from 'react'
import './hamburger.styles.scss'

const Hamburger = () => {
    const [toggled, setToggled] = React.useState(false)
    return(
        <div onClick={()=> setToggled(!toggled)} className={`${toggled ? 'rotate' : ''} hamburger`}>
            <div className="line-one"/>
            <div className="line-two"/>
            <div className="line-three"/>
        </div>
    )
}

export default Hamburger