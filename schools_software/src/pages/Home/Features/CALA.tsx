import { Col, Container } from "react-bootstrap";
import PageProgress from "../../../components/PageProgress";
import HomeNavbar from "../HomeNavbar";
import Footer from "../../../components/Footer";
import { Row } from "react-bootstrap";
import { admissionBenefitsArray,characteristicsArray,admissionParagraphs } from "../../../assets/data/admissionBenefitsArray";
import ExploreMoreFeatures from "../../../components/ExploreMoreFeatures";
import FAQComp from "../FAQComp";
import { calaFAQ } from "../../../assets/data/calaFeature";
import admission_img_1 from "../../../assets/candidatesAdmission.png"
import admission_img_2 from "../../../assets/candidatesAdmission2.png"
import "./CALAFeature.css"
import SunRaise from "../../../components/SunRaise";
import { CompanyName } from "../../../assets/data/company";
import CALAHeroBg from "../../../components/CALAHeroBg";
import TypingEffect from "../../../components/TypingText";
import SimplifyProcess from "../Simplifyprocess";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChalkboardTeacher, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { quickFeatures } from "../../../assets/data/calaFeature";
import VerticalTimeline from "../../../components/VerticalTimeline";
import HorizontalTimeline from "../../../components/HorizontalTimeline";



const CALAFeature: React.FC = () => {
    const sections = [
        {label:"Home"},
        { label: "Admission" },
        { label: "FAQ" },
        { label: "Footer" },
    ];

const words=['Automated Grading', 'Research CALA', 'Summarize long papers', 'Study Assistance',"Career Guidance"]
    return (
        <div className="page-container">
            <div className="progress-container">
              <PageProgress steps={sections} />
            </div>
            <div className="content-container">
              <Container fluid className="px-0 mb-5">
                  <HomeNavbar />
                <Container className="px-5">
                    <div className="cala-hero-container d-flex align-items-center">    
                <CALAHeroBg/>
                <div className="ms-5">
                    <h1 className="fw-bold text-start">
                        Use AI to 
                    </h1>
                    <div className="typing text ">
                        <TypingEffect  words={words} typingSpeed={100} eraseSpeed={100}/>
                    </div>
                </div>
                        </div> 
                        
                    <Row className="my-5">
                        <Col md={8}>
                            <div className="cala-content p-3 mt-3">
                            <h2 className="text-start mb-3">Learn <br/>Faster.💪</h2>
                <h2 className="text-start header "> Work Smarter. 🧠 </h2>
                <h5 className="text-start py-2">Utilize the AI assistant to help your CALA project research</h5>
                <ul>
                    {quickFeatures.map((feature)=>{
                        return(
                            <li key={feature.id} className="d-flex align-items-center">
                                <FontAwesomeIcon icon={faCheckCircle}/>
                                <div className="d-flex ms-3 my-3 flex-column">
                                    <span className="text-start"><strong>{feature.title} </strong></span>
                                    <span className="text-start text-muted">{feature.description} </span>
                                </div>

                            </li>
                        )
                    })}
                </ul>
                            </div>
                            <div className="cala-user mt-5">
                                <span className="teacher p-4"><FontAwesomeIcon icon={faChalkboardTeacher}/></span>
                                <h4 className="mt-4">For teachers</h4>
                                <VerticalTimeline/>
                             </div>
                        
                
                        </Col>
                        <Col md={4}>
                            <ExploreMoreFeatures/>
                        </Col>
                    </Row>
                    <HorizontalTimeline/>
                  <FAQComp FAQItems={calaFAQ} />
                </Container>
                <Footer />
              </Container>
            </div>
          </div>
        );
    };
    
export default CALAFeature