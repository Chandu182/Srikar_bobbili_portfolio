import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Education.css'

function Education(){
    return(
        <div id='Education' className='education__container'> 
        <h1 className='section_heading'>Education</h1>
             <VerticalTimeline lineColor={'rgb(33,253,255,0.3)'}>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(255, 250, 253,0)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(253, 250, 243)' }}
    date="2014"
    dateClassName='date'
    iconStyle={{ background: 'rgb(33,53,55)',border:'5px dotted black' }}
  >
    <h3 className="vertical-timeline-element-title">M.Tech in Computer Science Engineering</h3>
    <h4 className="vertical-timeline-element-subtitle">Role: Technical Skill Trainer</h4>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(255, 250, 253,0)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(253, 250, 243)' }}
    date="present"
    dateClassName='date'
    iconStyle={{ background: 'rgb(33,53,55)', color: '#fff',border:'5px dotted black'}}
  >
    <h3 className="vertical-timeline-element-title">Pursuing MA in Mass Communication & Journalism </h3>
    <h4 className="vertical-timeline-element-subtitle">ANU, Guntur</h4>
  </VerticalTimelineElement>
</VerticalTimeline>
        </div>
    )
}
export default Education