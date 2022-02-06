import React from 'react'
import { motion } from 'framer-motion' 

import { pageContainerVariants } from '../../animation-variants/pages.variants'
import './home-page.styles.scss'

const HomePage = () => {

  
    return(
        <motion.div 
            className='home-page'
            variants={pageContainerVariants}
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