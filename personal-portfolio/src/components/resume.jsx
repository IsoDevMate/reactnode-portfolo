import React from 'react'
import CV from "../assets/font/Barack_Oduor_Ouma_CVs.docx"
import CERT from "../assets/font/BARACKOUMA-CCNAnov.pdf"

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

