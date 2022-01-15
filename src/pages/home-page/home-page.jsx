import React from 'react' 
import data from '../../data/restaurant-info.data'
import './home-page.styles.scss'

const HomePage = () => {

    console.log(data)
    return(
        <div className="home-page">
            HOME PAGE
            <div className="home-page-content">
                <h1>HOME PAGE CONTENT</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aliquid repudiandae consequatur mollitia blanditiis nihil, iusto ad voluptas animi itaque cum saepe suscipit tempore molestias. Quia praesentium reiciendis maxime iste.</p>
            </div>
        </div>
    )
}

export default HomePage