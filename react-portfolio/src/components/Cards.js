import React from 'react';
import Carditem from './Carditem';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out this APP</h1>
            <div className='cards_container'>
               <div className='cards_wrapper'>
                   <ul className='cards_items'>
                       <Carditem />
                   </ul>
               </div>
            </div>
            
        </div>
    )
}

export default Cards
