import { Row ,Container, Col} from "react-bootstrap"
import AdminSidebarMenu from "./AdminSidebarMenu"
import SearchBar from "../../components/SearchBar"


const AdmissionFormPage=():JSX.Element=>{
    return(
        <Container fluid className="ps-0 ms-0">
            <Row>
                <Col md={2}>
                <AdminSidebarMenu/>
                </Col>
                <Col md={9}>
                    <SearchBar placeholder="Find Something ..."/>
                </Col>
            </Row>
            
        </Container>
    )
}

export default AdmissionFormPage