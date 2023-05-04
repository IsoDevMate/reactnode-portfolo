import React from 'react'
import "./Contact.css"
import { useRef } from 'react';
import { MdEmail } from 'react-icons/md'
import { BsFillEnvelopeFill } from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import emailjs from  'emailjs-com'

export const  Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_bkqnn5d', 'template_giay9ot', form.current, 'DFOZkYfQB2xAVwsM1')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

      e.target.reset();
};
  
  return (
    <section id='contacts'>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>oumaoduor5827@gmail.com</h5>
            <a href="mailto:oumaoduor5827@gmail.com" target="_blank" rel="noopener noreferrer" className='btn-primary'>Send Email</a>

          </article>
          <article className="contact__option">
            <BsLinkedin className='contact__option-icon'/>
                        <h4>LinkedIn</h4>
            <h5>Barack OUMA</h5>
            <a href="https://www.linkedin.com/in/barack-ouma-b37089212/" className='btn-primary' target="_blank" rel="noopener noreferrer" >Send Message</a>

          </article>
          <article className="contact__option">
            <BsFillEnvelopeFill className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+254 769784198</h5>
            <a href="https://wa.me/+254769784198" className='btn-primary' target="_blank" rel="noopener noreferrer">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message"  rows="10" placeholder='Your Message'></textarea>        
        <button type='submit' className=' btn-primary'>Send Message</button>
        </form>
      </div>

    </section>
  )
}
 
