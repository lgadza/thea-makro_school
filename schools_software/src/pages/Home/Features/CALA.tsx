import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher, faCheckCircle, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import HomeNavbar from '../HomeNavbar';
import Footer from '../../../components/Footer';
import ExploreMoreFeatures from '../../../components/ExploreMoreFeatures';
import FAQComp from '../FAQComp';
import VerticalTimeline from '../../../components/VerticalTimeline';
import HorizontalTimeline from '../../../components/HorizontalTimeline';
import CALAHeroBg from '../../../components/CALAHeroBg';
import TypingEffect from '../../../components/TypingText';
import { CompanyName } from '../../../assets/data/company';
import { calaFAQ, studentsItems } from '../../../assets/data/calaFeature';
import { quickFeatures } from '../../../assets/data/calaFeature';

import './CALAFeature.css';
import {teacherItems} from '../../../assets/data/calaFeature';
import PageProgress from '../../../components/PageProgress';
const CALAFeature: React.FC = () => {

  const words = ['Automated Grading', 'Research CALA', 'Summarize long papers', 'Study Assistance', 'Career Guidance'];

  const sections = [
    {label:"Makronexus"},
    { label: "Makronexus" },
    { label: "Makronexus" },
    { label: "Makronexus" },
  ];

  return (
    <div className="page-container">
      <div className="progress-container">
        <PageProgress steps={sections} />
      </div>
      <div className="content-container">
        <Container fluid className="px-0 mb-5">
          <HomeNavbar />
          <div className="cala-hero-container d-flex align-items-center justify-content-center">
            <CALAHeroBg />
            <div className="ms-5">
              <h1 className="text-start text-nowrap">
                Use {CompanyName} AI to
              </h1>
              <div className="typing text ">
                <TypingEffect words={words} typingSpeed={100} eraseSpeed={100} />
              </div>
            </div>
          </div>
          <Container className="px-5 calaAI">
            <Row className="my-5">
              <Col lg={8}>
                <div className="cala-content p-3 mt-3">
                  <h2 className="text-start mb-3">Learn <br />Faster.💪</h2>
                  <h2 className="text-start header "> Work Smarter. 🧠 </h2>
                  <h5 className="text-start py-2">Utilize the AI assistant to help your CALA project research</h5>
                  <ul>
                    {quickFeatures.map((feature) => (
                      <li key={feature.id} className="d-flex  my-3">
                        <FontAwesomeIcon icon={faCheckCircle} />
                        <div className="d-flex ms-3  flex-column">
                          <span className="text-start"><strong>{feature.title} </strong></span>
                          <span className="text-start text-muted">{feature.description} </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="cala-user mt-5">
                    <div className='for-teachers'>
                        <span className="teacher p-4"><FontAwesomeIcon icon={faChalkboardTeacher} style= {{fontSize:"20px"}}/></span>
                        <h4 className="mt-4">For teachers</h4>
                        <VerticalTimeline  timelineItems={teacherItems}/>
                    </div>
                    <div className='for-student'>
                        <span className="student p-4"><FontAwesomeIcon icon={faGraduationCap} color='black' style={{fontSize:"20px"}}/></span>
                        <h4 className="mt-4">For Students</h4>
                        <VerticalTimeline timelineItems={studentsItems} />
                    </div>
                </div>
              </Col>
              <Col lg={4}>
                <ExploreMoreFeatures />
              </Col>
            </Row>
            <HorizontalTimeline />
            <FAQComp FAQItems={calaFAQ} />
          </Container>
          <Footer />
        </Container>
      </div>
    </div>
  );
};

export default CALAFeature;
