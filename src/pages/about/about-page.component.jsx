import React from 'react'
import { motion } from 'framer-motion'

import AboutContent from '../../components/about-content/about-content.component'

import { pageContainerVariants } from '../../animation-variants/pages.variants'
import './about-page.styles.scss'

const AboutPage = () => {
    
    return(
        <motion.div 
            className="about-page"
            variants={pageContainerVariants}
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