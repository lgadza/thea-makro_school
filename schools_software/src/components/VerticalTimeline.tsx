import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import './VerticalTimeline.css'; // Create a CSS file for styling
import { PushButton } from './Buttons';
import img1 from "../assets/candidatesAdmission.png"
import * as Icon from 'react-bootstrap-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faListCheck, faVials } from '@fortawesome/free-solid-svg-icons';
const VerticalTimeline: React.FC = () => {
  useEffect(() => {
    const sr = ScrollReveal();

    if (window.innerWidth < 768) {
      if (document.querySelector('.timeline-content')?.classList.contains('js--fadeInLeft')) {
        document.querySelector('.timeline-content')?.classList.remove('js--fadeInLeft');
        document.querySelector('.timeline-content')?.classList.add('js--fadeInRight');
      }

      sr.reveal('.js--fadeInRight', {
        origin: 'right',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 800,
      });
    } else {
      sr.reveal('.js--fadeInLeft', {
        origin: 'left',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 800,
      });

      sr.reveal('.js--fadeInRight', {
        origin: 'right',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 800,
      });
    }

    sr.reveal('.js--fadeInLeft', {
      origin: 'left',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });

    sr.reveal('.js--fadeInRight', {
      origin: 'right',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });
  }, []);

  return (
    <>


      <section className="timeline">
        <div className="container px-0">
          <div className="timeline-item">
            <div className="timeline-img"></div>
            <div className="timeline-content js--fadeInLeft">
                <div className='timeline-img-container cala-content'>
                <img className='time-img' src={img1} alt='img'/>
                </div>
                <div className='text-start px-2 mt-3'>
                <FontAwesomeIcon icon={faLightbulb} style={{fontSize:"2rem",color:"rgb(247, 195, 49)"}}/>
                </div>
              <h5 className='text-start d-flex my-2 px-2 color-header'>CALA Generation Assistance</h5>
             <div className='text-start px-2'>
             <small > Harness AI to assist in generating educational content, CALA projects, including quizzes, practice exercises, and lesson plans, based on specific learning objectives and curriculum requirements.</small>
             </div>
             <a href="" className='header d-flex px-2 mt-4'>Learn more!</a>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-img"></div>
            <div className="timeline-content js--fadeInRight">
              <h5 className='text-start  my-3'>Create Tests Within Seconds</h5>
              <div className='text-start px-2 my-3'>
                <FontAwesomeIcon icon={faVials} style={{fontSize:"2rem",color:"red"}}/>
                </div>
              <div className='text-start '>
             <small > Choose from over 20L+ subjective and objective questions and create your test within seconds! Plan, Conduct & Evaluate Exams with Ease.</small>
             </div>
             <a href="" className='header d-flex px-2 mt-4'>Learn more!</a>
            </div>
          </div>
       
          <div className="timeline-item">
            <div className="timeline-img"></div>
            <div className="timeline-content js--fadeInLeft">
                <div className='timeline-img-container cala-content'>
                <img className='time-img' src={img1} alt='img'/>
                </div>
                <div className='text-start px-2 mt-3'>
                <Icon.FileEarmarkCheck size={32} color='rgb(180, 253, 163)' />
                
                </div>
              <h5 className='text-start d-flex my-2 px-2 color-header'>Automated Grading and Assessment</h5>
             <div className='text-start px-2'>
             <small > Utilize AI-powered tools to automatically grade objective assessments, such as CALA projects, multiple-choice questions or fill-in-the-blank exercises, saving time and providing instant feedback to students.</small>
             </div>
             <a href="" className='header d-flex px-2 mt-4'>Learn more!</a>
            </div>
          </div>

          {/* Add more timeline items */}
        </div>
      </section>
    </>
  );
};

export default VerticalTimeline;
