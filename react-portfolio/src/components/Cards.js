import React from 'react';
import Carditem from './Carditem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Projects I've Worked On</h1>
            <div className='cards_container'>
               <div className='cards_wrapper'>
                   <ul className='cards_items'>
                       <Carditem src='./images/clear-water.jpg' text='On The Go Adventures' label='JS' path='/projects' />
                       <Carditem src='./images/employee-tracker.jpg' text='Employee Tracking' label='Node.js' path='/projects' />
                   </ul>
                   <ul className='cards_items'>
                       <Carditem src='./images/clear-water.jpg' text='On The Go Adventures' label='JS' path='/projects' />
                       <Carditem src='./images/employee-tracker.jpg' text='Employee Tracking' label='Node.js' path='/projects' />
                       <Carditem src='./images/employee-tracker.jpg' text='Employee Tracking' label='Node.js' path='/projects' />
                   </ul>
               </div>
            </div>
            
        </div>
    )
}

export default Cards
