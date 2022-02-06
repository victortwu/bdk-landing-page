import React from 'react' 

import { useGlobalContext } from '../../GlobalContext'

import './about-content.styles.scss'

const AboutContent = () => {

    const state = useGlobalContext()

    return(
        <div className="about-content">
            <h1>ABOUT CONTENT COMPONENT</h1>
            <p>{state.data.name}</p>
            <p>{state.data.address}</p>
            <p>{state.data.phone}</p>
        </div>
    )
}

export default AboutContent