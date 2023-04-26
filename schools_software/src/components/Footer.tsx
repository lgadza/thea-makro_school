import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import logo from "../assets/TM logo.png"

const Footer = () => {
  return (
    <footer className="bg-light py-4">
      <Container>
        <Row>
          <Col md={4}>
            <img src={logo} style={{width:"100px"}} alt="Thea-Makro" />
          </Col>
          <Col md={4}>
            <h4 className="text-start">Founders High School:</h4>
            <ul className="list-unstyled text-start">
              <li>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mx-2" /> 
                <Link to="/location">12 Belmont, Bulawayo</Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} className="mx-2" /> 
                <Link to="/tel">+2334454</Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faGlobe} className="mx-2" /> 
                <Link to="/website">fhs.edu.zw</Link>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h4>TheaMakro Study Support System</h4>
            <p>A platform that helps students learn and succeed.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
