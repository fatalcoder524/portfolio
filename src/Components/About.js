import React ,{useEffect} from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import rahul from '../rahul.jpeg';
import Aos from 'aos';
import 'aos/dist/aos.css';

function About() {

   
    return (
        <div data-aos='fade-up' class='about-container  '>
            <div class='line'></div>
            <h1 class='education-heading'>About Me</h1>
            <br/>
            <Container>
                <Row>
                    <Col  data-aos='fade-up-right' className='about-text' lg={6} md={6} xs={12}>
                        <p>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical 
                        </p>
                        <p>
                            Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a
                        </p>
                        <p>
                             Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                        </p>
                    </Col>
                    <Col  data-aos='fade-up-left' className='about-text'>
                        <img class='about-img' src={rahul} alt='kaali'/>
                    </Col>   
                </Row>
            </Container>
        </div>
    )
}

export default About
