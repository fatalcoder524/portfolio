import React,{useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import {Nav} from 'react-bootstrap';

function NavBar() {
    
    useEffect(() => {
       Aos.init({duration :1500});
    }, [])
    return (
        <div>
            <nav data-aos='fade-down'>
                <ul>
                    <li>About</li>
                    <li>Education</li>
                    <li>Interests</li>
                    <li>Contact</li>              
                </ul>
            </nav>
        </div>
    )
}

export default NavBar
