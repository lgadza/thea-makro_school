import { Col, Container } from "react-bootstrap";
import PageProgress from "../PageProgress";
import HomeNavbar from "../HomeNavbar";
import Footer from "../../../components/Footer";
import { Row } from "react-bootstrap";
import { admissionBenefitsArray,characteristicsArray,admissionParagraphs } from "../../../assets/data/admissionBenefitsArray";
import ExploreMoreFeatures from "../../../components/ExploreMoreFeatures";
import FAQComp from "../FAQComp";
import { admissionFAQ } from "../../../assets/data/faqItemsData";

const AdmissionManagement: React.FC = () => {
    const sections = [
        {label:"Home"},
        { label: "Admission" },
        { label: "FAQ" },
        { label: "Footer" },
    ];
    const AdmissionManagementContent:React.FC=()=>{
      
        return(
            <div className="d-flex flex-column align-items-start">
                <div className="definition d-flex flex-column align-items-start">
                <h3 className="my-4">What is an Admission Management Software?</h3>
                <small className="d-flex text-start">
                Admission management software helps streamline the admissions process. The admission management software enables educational institutions to conduct student admission and enrollment procedures online. Students and parents do not need to stand in long queues for hours to take admission to the institution. Parents and students can use the admission management system to file an online inquiry of school admissions. Makrodex makes the process of admission easy for schools, institutions, and parents.
                </small>
                <h4 className="my-3">Admission Management Software for Schools</h4>
                {admissionParagraphs.map((para)=>{
                    return(
                        <small key={para.id} className="text-start py-2">{para.content}</small>
                    )
                })}
                </div>
                <div className="characteristics d-flex flex-column align-items-start">
                <h4 className="my-3">Characteristics of Admission Management Software</h4>
                <img src="https://cdn.targetx.in/fetch/2/01/100/blobid1625815470928.jpg" alt="" />
                <small className="text-start mt-3">
                Makrodex offers a host of features to educational institutions. The major characteristics of the admission management system are:
                </small>
                {
                    characteristicsArray.map((character)=>{
                        return(
                            <div key={character.id} className="text-start">
                            <h5 className="my-3">{character.heading} </h5>
                            <small className="text-start">{character.content} </small>
                            </div>
                        )
                    })
                }
                </div>
                <div className="benefits d-flex flex-column align-items-start">
                <h4 className="my-3">Benefits of Admission Management Software</h4>
                <small className="text-start">
                With a host of features, Makrodex provides various advantages to everyone connected to the education system. Some key benefits of the admission management system are:
                </small>
                {
                    admissionBenefitsArray.map((benefit)=>{
                        return(
                            <div className="text-start" key={benefit.id}>
                                <h5 className="my-3">{benefit.heading} </h5>
                <small className="text-start">
               {benefit.content}
                </small>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        )
    }

    return (
        <div className="page-container">
            <div className="progress-container">
              <PageProgress steps={sections} />
            </div>
            <div className="content-container">
              <Container fluid className="px-0 mb-5">
                  <HomeNavbar />
                <Container className="px-5">
                    <Row className="mb-5">
                        <Col md={8}>
                  <AdmissionManagementContent/>
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
    
export default AdmissionManagement 