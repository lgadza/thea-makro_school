import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import './VerticalTimeline.css'; // Create a CSS file for styling
import { PushButton } from './Buttons';
import img1 from "../assets/candidatesAdmission.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
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
          {/* Add your timeline items here */}
          <div className="timeline-item">
            <div className="timeline-img"></div>
            <div className="timeline-content js--fadeInLeft">
                <div className='timeline-img-container'>

                <img className='time-img' src={img1} alt='img'/>
                </div>
                <div className='text-start px-2 mt-3'>

                <FontAwesomeIcon icon={faLightbulb} style={{fontSize:"2rem",color:"rgb(247, 195, 49)"}}/>
                </div>
              <h5 className='text-start my-2 px-2 '>CALA Generation Assistance</h5>
           
             <div className='text-start px-2'>
             <small > Harness AI to assist in generating educational content, CALA projects, including quizzes, practice exercises, and lesson plans, based on specific learning objectives and curriculum requirements.</small>
             </div>
             <a href="" className='header d-flex px-2 my-2'>Learn more!</a>
              {/* <PushButton message='Learn more!'/> */}
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-img"></div>
            <div className="timeline-content js--fadeInRight">
              <h5 className='text-start  my-3'>Title</h5>
           
              <p className='text-start'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.</p>
              <PushButton message='Learn more!'/>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-img"></div>
            <div className="timeline-content js--fadeInLeft">
              <h5 className='text-start  my-3'>Title</h5>
           
              <p className='text-start'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.</p>
              <PushButton message='Learn more!'/>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-img"></div>
            <div className="timeline-content js--fadeInLeft">
              <h2 className='text-start'>Title</h2>
           
              <p className='text-start'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.</p>
              <PushButton message='Learn more!'/>
            </div>
          </div>

          {/* Add more timeline items */}
        </div>
      </section>
    </>
  );
};

export default VerticalTimeline;
