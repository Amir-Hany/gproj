import React from 'react'
import { Link } from 'react-router-dom';
import {AiOutlineFacebook, AiOutlineMail} from 'react-icons/ai'
import {BsBasket} from 'react-icons/bs'
import {BsTwitter, BsInstagram, BsLinkedin, BsFillTelephoneFill, BsArrowRight} from 'react-icons/bs'
import {MdLocationOn} from 'react-icons/md'
import {useStateContext} from '../context/ContextProvider'
import payment from '../images/payment.png'
import './Footer.css'
const Footer = () => {
 
  const {isloggedin} = useStateContext();

  return (
    <>
    <section className="footer">
     <div className="box-container">
        <div className="box">
          <h3> Smart Cart <BsBasket className='inline m-2'/></h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, saepe.</p>
              <div className="share">
                <Link to="#" className='social'><AiOutlineFacebook className='inline m-1'/></Link>
                <Link to="#" className='social'><BsTwitter className='inline m-1'/></Link>
                <Link to="#" className='social'><BsInstagram className='inline m-1'/></Link>
                <Link to="#" className='social'><BsLinkedin className='inline m-1'/></Link>
          </div>
        </div>
        <div className="box">
                <h3>Contact info</h3>
                <Link to="#" className="links"> <BsFillTelephoneFill className='inline'/>+123-456-7890 </Link>
                <Link to="#" className="links"> <BsFillTelephoneFill className='inline'/> +111-222-3333 </Link>
                <Link to="#" className="links"> <AiOutlineMail className='inline'/> GrocoStore@helwanmail.com </Link>
                <Link to="#" className="links"> <MdLocationOn className='inline'/> Cairo, Egypt - 170552 </Link>
            </div>
            <div className="box">
                <h3>Quick links</h3>
                <Link to="/home" className="links"><BsArrowRight className='inline m-2'/>Home </Link>
                <Link to="/about" className="links"><BsArrowRight className='inline m-2'/>About us</Link>
                {isloggedin && <Link to="/GettingStarted" className="links"><BsArrowRight className='inline m-2'/>Getting Started</Link>}
                {isloggedin && <Link to="/history" className="links"><BsArrowRight className='inline m-2'/>My History</Link>}
                {isloggedin && <Link to="/currentcart" className="links"><BsArrowRight className='inline m-2'/>My Current cart</Link>}
                {isloggedin && <Link to="/profile" className="links"><BsArrowRight className='inline m-2'/>My Profile</Link>}
            </div>
            <div className="box">
                <h3>Newsletter</h3>
                <p>Subscribe for latest updates</p>
                <input type="email" placeholder="Your Email" className="email" />
                <input type="submit" value="Subscribe" className="btn" />
                <img src={payment} className="payment-img" alt="Credits" />
            </div>
      </div>
      <div className="credit"> Created by <span> Mr. A. George </span> | All rights reserved <span id="last-span">@copyright 2022</span></div>
    </section>
    </>
  )
}

export default Footer