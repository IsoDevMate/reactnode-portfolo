import React from 'react'
import CV from "../assets/font/Barack_Oduor_Ouma_CV_nyeri.pdf"
import CERT from "../assets/font/BARACKOUMA-CCNA1nov2022Muny-certificate.pdf"

import './Resume.css'

export const Resume = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn-primary'>Dowload CV</a>
        <a href={CERT} download className='btn-primary'>Dowload CISCO CERT</a>
        <a href="#contacts" className='btn-primary'>Contact Me</a>
        
    </div>
  )
}

