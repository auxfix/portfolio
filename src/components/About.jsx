import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion';

import { styles } from '../style';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';


const ServiceCard = ({index, icon, title}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] 
          py-5 px-12 min-h-[280px] flex
          justify-evenly items-center flex-col'
        >
           <img 
            src={icon} 
            alt={title}
            className='w-16 h-16 object-contain'
          />
           <h3 className='text-white text-[20px]
            font-bold text-center
           '>
            {title}
           </h3> 
        </div>
      </motion.div>
    </Tilt>
  )
}


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h2 className={styles.heroHeadText}>
          Overview
        </h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-scondary text-[17px]
        max-w-3xl leading-[30px]'
      >
        Senior Frontend Developer, with more than 12 years of experience 
        in working with top-notch technologies. I have a strong background 
        in many areas such as back-end, front-end, desktop development, mobile, dev-ops, 
        and even low-level programming. Always in a process of learning 
        and getting new experience, I do not afraid of difficult tasks and sophisticated technologies 
        but appreciate them as a new exciting challenge. 
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {
          services.map((service, index) => (
            <ServiceCard key={service.title}
              index={index} {...service} />
          ))
        }
      </div>
    </>
  )
}

export default About