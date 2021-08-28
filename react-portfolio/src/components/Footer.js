import React from 'react';
import { Button } from './Button';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-contact'>
                <p className='footer-contact-heading'>Contact Me</p>
                <div className='input-areas'>
                    <form>
                        <input type='text' name='name' placeholder='Full Name' className='footer-input'/>
                        <input type='email' name='email' placeholder='Example@email.com' className='footer-input'/>
                        <input type='text' name='message' placeholder='Your Message' className='footer-input-message'/>
                        <Button buttonStyle='btn--outline'>Submit</Button>
                    </form>
                </div>
                
            </section>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            Damian
                        </Link>
                    </div>
                    <small className='website-rights'>Damian © 2021</small>
                    <div className='social-icons'>
                        <Link className='social-icon-link linkedin' to='/' target='_blank' aria-label='Linkedin'>
                        <i className="fab fa-linkedin" />
                        </Link>

                        <Link className='social-icon-link github' to='/' target='_blank' aria-label='Github'>
                        <i className="fab fa-github" />
                        </Link>

                        <Link className='social-icon-link stackoverflow' to='/' target='_blank' aria-label='Stackoverflow'>
                        <i className="fab fa-stack-overflow" />
                        </Link>

                    </div>
                    
                </div>
            </section>
            
        </div>
    )
}

export default Footer
