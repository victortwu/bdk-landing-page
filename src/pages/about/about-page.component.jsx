import React from 'react'
import { motion } from 'framer-motion'

import AboutContent from '../../components/about-content/about-content.component'

import './about-page.styles.scss'

const AboutPage = () => {
    
    const containerVariants = {
        hidden: { opacity: 0, x: '100vw' },
        visible: { opacity: 1, x: 0, transition: { type: 'spring', delay: 0.5 } },
        exit: { x: '-100vw', transition: { ease: 'easeInOut' } }
    }
    
    return(
        <motion.div 
            className="about-page"
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
            >
            ABOUT PAGE
            <AboutContent />
        </motion.div>
    )
}

export default AboutPage