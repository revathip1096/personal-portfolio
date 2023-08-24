import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Icon } from "@iconify/react";



function Exp() {
  return (
    <div className='aboutpagebackground'>
        <div>
        <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    
    date="Jun 2023 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<Icon icon="pajamas:work" />}
    
    
  >
    <h3 className="vertical-timeline-element-title">Trainee</h3>
    <h4 className="vertical-timeline-element-subtitle">ContentQL, Hyderabad</h4>
    <p>
      Training and learning on different frontend technologies like ReactJS, ChakraUI and Strapi. 
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Nov 2022 - Mar 2023"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<Icon icon="pajamas:work" />}
    
  >
    <h3 className="vertical-timeline-element-title">Intern</h3>
    <h4 className="vertical-timeline-element-subtitle">AMTZ, Visakhapatnam</h4>
    <p>
    Creating a Flutter-based internship project for a Growth Meter app, aiming to track and visualize personal or business growth metrics, featuring a user-friendly interface and data analysis tools.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Aug 2019 - Apr 2023"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<Icon icon="noto-v1:woman-student" />}
   
  >
    <h3 className="vertical-timeline-element-title">B.Tech</h3>
    <h4 className="vertical-timeline-element-subtitle">GMRIT, CSE</h4>
    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Jun 2017 - Apr 2019"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<Icon icon="noto-v1:woman-student" />}
    
  >
    <h3 className="vertical-timeline-element-title">Intermediate</h3>
    <h4 className="vertical-timeline-element-subtitle">Sri Gayatri, MPC</h4>
   
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="Jun 2016- Apr 2017"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<Icon icon="noto-v1:woman-student" />}
    
  >
    <h3 className="vertical-timeline-element-title">ICSE</h3>
    <h4 className="vertical-timeline-element-subtitle">De Paul </h4>
    
  </VerticalTimelineElement>
  
</VerticalTimeline>
            
        </div>
    </div>
  )
}

export default Exp