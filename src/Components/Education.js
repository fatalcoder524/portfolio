import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../App.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Education() {
    return (
    
            <div className='about-container'>
                <div class='line'></div>
                <h1 class='education-heading'>Education</h1>
                 <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{background: '#0a192f', color: ' #8892b0'  }}
                    contentArrowStyle={{ borderRight: '7px solid  #0a192f' }}
                    date="2016 - 2020"
                    iconStyle={{ border: '7px solid  #0a192f' }}
                    
                >
                    <h4 className="vertical-timeline-element-title">Canara Engineering College</h4>
                    <h5 className="vertical-timeline-element-subtitle">Mangalore</h5>
                    <p>
                    Computer Science and Engineering
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{background: '#0a192f', color: ' #8892b0'  }}
                    contentArrowStyle={{ borderRight: '7px solid  #0a192f'  }}
                    date="2014 - 2016"
                    iconStyle={{ border: '7px solid  #0a192f'}}
                    
                >
                    <h4 className="vertical-timeline-element-title font">Mahesh Pu College</h4>
                    <h5 className="vertical-timeline-element-subtitle">Mangalore</h5>
                    <p>
                    PCMC
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{background: '#0a192f', color: ' #8892b0'  }}
                    contentArrowStyle={{ borderRight: '7px solid  #0a192f' }}
                    date="2002 - 2014"
                    iconStyle={{  border: '7px solid  #0a192f' }}
                    
                >
                    <h4 className="vertical-timeline-element-title">Canara High School</h4>
                    <h5 className="vertical-timeline-element-subtitle">Mangalore</h5>
                   
                </VerticalTimelineElement>
           </VerticalTimeline>        
            
    
        </div>
    )
}

export default Education
