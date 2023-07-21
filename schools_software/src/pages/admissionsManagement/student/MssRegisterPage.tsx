import { Container,Col, Row } from "react-bootstrap"
import RegisterInfo from "./RegisterInfo"
import md_logo_small from "../../../assets/md_logo_small.png"
import * as Icon from "react-bootstrap-icons";
const MssRegisterPage=():JSX.Element=>{
   return(
    <Container className="application_page d-flex align-items-center">
        <Row className="content_bg box-shadow">
        <Col className="d-flex flex-column justify-content-between reg-welcome">
            <div className="wrapper d-flex flex-column justify-content-between  pb-5">
            <div className="p-3">
            <img
                    src={md_logo_small}
                    alt="makrodex_logo"
                    className="img_component d-flex"
                />
            </div>
            <div className="sign-up-message">    
            <h3>Welcome to MSS.</h3>
            <h5>Are you ready to apply to the school of your choice?</h5>
            </div>
            <div className="sign-up-icons">
            <Icon.Facebook  size={20}/>
            <Icon.Instagram className="mx-3" size={20}/>
            <Icon.Linkedin size={20}/>
            </div>
            </div>
         </Col>
            <Col>
            <RegisterInfo/>
            </Col>
        </Row>
    </Container>
   )
}

export default MssRegisterPage