import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';


function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='./videos/astronaut.mp4' autoPlay loop muted />
            <h1>I AM A</h1>
            <p>Developer</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Contact Me <i className='fas fa-comment-alt'></i></Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>Projects</Button>
            </div>
        </div>
    )
}

export default HeroSection
