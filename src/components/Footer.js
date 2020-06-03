import React from 'react';
import './Footer.css'

const Footer = () => {
    return(
        <div className = 'main-footer'>
            <div className = 'container'>
                <div className='row'>
                    <p className = "col-sm">
                        <li><a href='https://www.google.co.in/?gws_rd=ssl'> Watch Video Tutorials </a></li>
                        <li><a href='https://www.google.co.in/?gws_rd=ssl'> Who We Are and Our Mission </a></li>
                        <li><a href='https://www.google.co.in/?gws_rd=ssl'> Additional Entrepreneurship Links </a></li>
                    </p>
                </div>
                <div className='row'>
                    <p className = "col-sm">
                        <li><a href='https://www.google.co.in/?gws_rd=ssl'> Business Open Knowledge Network Home </a></li>
                        <li><a href='https://www.google.co.in/?gws_rd=ssl'> Resources For Women Entrepreneurs </a></li>
                    </p>
                </div>
            </div>
        </div>
      
    );
    
}

export default Footer;