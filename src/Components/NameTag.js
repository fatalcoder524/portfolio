import React from 'react';
import { Transition, animated } from 'react-spring/renderprops';
import Aos from 'aos';
import 'aos/dist/aos.css';

function NameTag() {
    return (
        <div>
            <div data-aos='fade-up' class='name-container '>
             
                <p class='greet'>Hi my name is</p>
                <p class='name'>Rahul Kakkadan</p>
                <p class='desc'>Noob in Web development</p>
                <p class='info'>A graduate in Computer Science and Enginnering from Canara Engineering College</p>
   
            </div>
        </div>
    )
}

export default NameTag
