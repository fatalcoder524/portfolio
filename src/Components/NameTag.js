import React from 'react';
import { Transition, animated } from 'react-spring/renderprops';

function NameTag() {
    return (
        <div>
            <div class='name-container animated animatedFadeInUp fadeInUp'>
             
                <p class='greet'>Hi my name is</p>
                <p class='name'>Rahul Kakkadan</p>
                <p class='desc'>Noob in Web development</p>
                <p class='info'>A graduate in Computer Science and Enginnering from Canara Engineering College</p>
   
            </div>
        </div>
    )
}

export default NameTag
