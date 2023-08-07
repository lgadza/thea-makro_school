import { Col, Container } from "react-bootstrap";
import PageProgress from "../../../components/PageProgress";
import HomeNavbar from "../HomeNavbar";
import Footer from "../../../components/Footer";
import { Row } from "react-bootstrap";
import { admissionBenefitsArray,characteristicsArray,admissionParagraphs } from "../../../assets/data/admissionBenefitsArray";
import ExploreMoreFeatures from "../../../components/ExploreMoreFeatures";
import FAQComp from "../FAQComp";
import { admissionFAQ } from "../../../assets/data/faqItemsData";
import admission_img_1 from "../../../assets/candidatesAdmission.png"
import admission_img_2 from "../../../assets/candidatesAdmission2.png"
import "./Features.css"
import SunRaise from "../../../components/SunRaise";
import { CompanyName } from "../../../assets/data/company";
import CALAHeroBg from "../../../components/CALAHeroBg";


const CALAFeature: React.FC = () => {
    const sections = [
        {label:"Home"},
        { label: "Admission" },
        { label: "FAQ" },
        { label: "Footer" },
    ];

    return (
        <div className="page-container">
            <div className="progress-container">
              <PageProgress steps={sections} />
            </div>
            <div className="content-container">
              <Container fluid className="px-0 mb-5">
                  <HomeNavbar />
                <Container className="px-5">
                    <div className="cala-hero">    
                <CALAHeroBg/>
                        </div> 
                        
                    <Row className="mb-5">
                        <Col md={8}>
                
                        </Col>
                        <Col md={4} className="px-5">
                            <ExploreMoreFeatures/>
                        </Col>
                    </Row>
                  <FAQComp FAQItems={admissionFAQ} />
                </Container>
                <Footer />
              </Container>
            </div>
          </div>
        );
    };
    
export default CALAFeature