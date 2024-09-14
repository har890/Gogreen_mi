import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
                <img src={assets.logo} alt=""/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac metus eu magna condimentum porta. Proin volutpat maximus dui, at molestie dui iaculis sit amet. Duis imperdiet tortor eget odio imperdiet ullamcorper.</p>
                <div className='footer-social-icons'>
                    <img src={assets.facebook_icon} alt=""/>
                    <img src={assets.twitter_icon} alt=""/>
                    <img src={assets.linkedin_icon} alt=""/>
                </div>
            </div>
            <div className='footer-content-center'>
                 <h2>COMPANY</h2>
                 <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delievery</li>
                    <li>Privacy policy</li>
                 </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-212-456-7890</li>
                    <li>contact@gogreen.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 © Gogreen.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer