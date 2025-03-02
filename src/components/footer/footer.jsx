import React from 'react'
import './footer.css'
import facebook_icon from '../../assets/facebook.png'
import instagram_icon from '../../assets/instagram.png'
import twitter_icon from '../../assets/twitter.png'
import youtube_icon from '../../assets/youtube.png'

const footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icon">
        <img src={facebook_icon} alt=''/>
        <img src={instagram_icon} alt=''/>
        <img src={twitter_icon} alt=''/>
        <img src={youtube_icon} alt=''/>
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Inventer Relations</li>
        <li>Jobs</li>
        <li>Terms of use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preference</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className='copyright-text'>© 1997-2025 Netflix, Inc.</p>
    </div>
  )
}

export default footer
