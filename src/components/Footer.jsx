import React from 'react'
import '../css/footer.css'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'


function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-holder'>
        <div className='footer-contact'>
         <div className='footer-subheading'>
         <li><a href='/'>  <h1>Contact</h1></a></li>
         <li><a href='/'>Contact Us</a></li>
         <li><a href='/'>FAQ</a></li>
         </div>
        </div>

        <div className='footer-contact'>
          <div className='footer-subheading'>
          <li><a href='/'>  <h1>Info</h1></a></li>
          <li><a href='/'>Terms & Conditions</a></li>
         <li><a href='/'>Privacy Policy</a></li>
          </div>
        </div>

        <div className='footer-contact'>
          <div className='footer-subheading'>
          <li><a href='/'>  <h1>Learn</h1></a></li>
        <li><a href='/'>About Us</a></li>
         <li><a href='/'>Blog</a></li></div>
        </div>

        <div className='footer-contact'>
          <div className='footer-subheading'> 
          <li><a href='/'>  <h1>Social Media</h1></a></li>
          <li><a href='/'><AiOutlineInstagram size={30}/></a></li>
         <li><a href='/'><BsFacebook size={20}/></a></li></div>
        </div>
      </div>

      <div className='footer-copyright'>
        <p>© 2023 Unitrition | Made by Group 17 | Group 17</p>
      </div>


    </div>
  )
}

export default Footer

