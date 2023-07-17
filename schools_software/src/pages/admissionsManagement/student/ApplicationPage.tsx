import { Container,Col, Row } from "react-bootstrap"
import PersonalDataForm from "./PersonalDataForm"
import md_logo_small from "../../../assets/md_logo_small.png"
import * as Icon from "react-bootstrap-icons";
const ApplicationPage=():JSX.Element=>{
   return(
    <Container className="application_page d-fex align-items-center">
        <Row>
        <Col className="sign-up-layout">
         <div>
         
         <img
                src={md_logo_small}
                alt="makrodex_logo"
                style={{ width: `${50}px`, height: `${50}px`, borderRadius: "0%" }}
                className="img_component d-flex"
              />
        <div className="sign-up-message">    
         <h3>Welcome to MSS.</h3>
         <h5>Are you ready to apply to a school of your choice?</h5>
        </div>
         </div>
        <div className="sign-up-icons">
        <Icon.Facebook  size={20}/>
        <Icon.Instagram className="mx-3" size={20}/>
        <Icon.Linkedin size={20}/>
        </div>
         </Col>
            <Col>
            <PersonalDataForm/>
            </Col>
        </Row>
    </Container>
   )
}

export default ApplicationPage