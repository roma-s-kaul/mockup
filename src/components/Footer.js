import React from 'react';
import './Footer.css'

const Footer = () => {
    return(
        <div className = 'main-footer'>
            <div className = 'container'>
                <div className='row' style={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    paddingTop: '1%'
                }}> 
                        <div><a href='https://www.google.co.in/?gws_rd=ssl'> Watch Video Tutorials </a></div> 
                        <div><a href='https://www.google.co.in/?gws_rd=ssl'> Who We Are and Our Mission </a></div> 
                        <div><a href='https://www.google.co.in/?gws_rd=ssl'> Additional Entrepreneurship Links </a></div> 
                </div>
                <div className='row' style={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    paddingBottom: '1%'
                    
                }}> 
                        <div><a href='https://www.google.co.in/?gws_rd=ssl'> Business Open Knowledge Network Home </a></div>
                        <div><a href='https://www.google.co.in/?gws_rd=ssl'> Resources For Women Entrepreneurs </a></div>
                </div>
            </div>
        </div>
      
    );
    
}

export default Footer;