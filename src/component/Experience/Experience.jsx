import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Experience.css'

function Experience(){
    return(
        <div id='Experience' className='experience__section'> 
        <h1 className='section__heading'>Experiences</h1>
             <VerticalTimeline lineColor={'rgb(33,253,255,0.3)'}>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(255, 250, 253,0)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(253, 250, 243)' }}
    date="March 2020 - present"
    dateClassName='date'
    iconStyle={{ background: 'rgb(33,53,55)',border:'5px dotted black' }}
  >
    <h3 className="vertical-timeline-element-title">Andhra Pradesh State Skill Development Corporation (APSSDC)</h3>
    <h4 className="vertical-timeline-element-subtitle">Role: Technical Skill Trainer</h4>
    <p>
       Key Achievements:
       <ul className='achievements'>
        <li>
        Organized and handled engineering programs and online training during the COVID-19 pandemic.
        </li>
        <li>
        Managed internship training and drone pilot training programs.
        </li>
        <li>
        Coordinated Faculty Development Programs, workshops, and online sessions.
        </li>
        <li>
        Designed promotional materials and handled social media.
        </li>
        <li>
        Created and managed training data, project reports, and client communication.
        </li>
       </ul>
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(255, 250, 253,0)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(253, 250, 243)' }}
    date="April 2016 – November 2019"
    dateClassName='date'
    iconStyle={{ background: 'rgb(33,53,55)', color: '#fff',border:'5px dotted black'}}
  >
    <h3 className="vertical-timeline-element-title">Honeywell Automation (Tata Consultancy Services) </h3>
    <h4 className="vertical-timeline-element-subtitle">Role: Building Management Systems (BMS) Service Engineer and Technical Admin Support</h4>
    <p>
       Key Achievements:
       <ul className='achievements'>
        <li>
        Carried out IAQ tests, client interaction, and audits.
        </li>
        <li>
        Maintained critical utilities such as UPS, chillers, and HVAC systems.
        </li>
        <li>
        Led the BMS analytical group at REMC COCHI.
        </li>
        <li>
        Proficiency in managing reports, vendor coordination, and technical automation.
        </li>
       </ul>
       </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
   className="vertical-timeline-element--work"
   contentStyle={{ background: 'rgb(255, 250, 253,0)', color: '#fff' }}
   contentArrowStyle={{ borderRight: '7px solid  rgb(253, 250, 243)' }}
   date="June 2014 – March 2016"
   dateClassName='date'
   iconStyle={{ background: 'rgb(33,53,55)', color: '#fff',border:'5px dotted black'}}
  >
   <h3 className="vertical-timeline-element-title">ICube Solutions </h3>
    <h4 className="vertical-timeline-element-subtitle">Role: Software Engineer</h4>
    <p>
       Key Achievements:
       <ul className='achievements'>
        <li>
        Project testing using C# and VB.NET, SQL Server database management, Excel file importing, and client interaction.
        </li>
       </ul>
       </p>
  </VerticalTimelineElement>
</VerticalTimeline>
        </div>
    )
}
export default Experience