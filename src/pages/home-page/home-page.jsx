import React from 'react'
import { motion } from 'framer-motion' 

import './home-page.styles.scss'

const HomePage = () => {

    const containerVariants = {
        hidden: { opacity: 0, x: '100vw' },
        visible: { opacity: 1, x: 0, transition: { type: 'spring', delay: 0.5 } },
        exit: { x: '-100vw', transition: { ease: 'easeInOut' } }
    }
    
    return(
        <motion.div 
            className='home-page'
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            HOME PAGE
            <div className="home-page-content">
                <h1>HOME PAGE CONTENT</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aliquid repudiandae consequatur mollitia blanditiis nihil, iusto ad voluptas animi itaque cum saepe suscipit tempore molestias. Quia praesentium reiciendis maxime iste.</p>
            </div>
        </motion.div>
    )
}

export default HomePage