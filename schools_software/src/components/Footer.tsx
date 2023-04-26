import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faGlobe } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-light py-4">
      <Container>
        <Row>
          <Col md={4}>
            <img src="logo.png" alt="Founders High School" />
          </Col>
          <Col md={4}>
            <h4 className="text-start">Founders High School:</h4>
            <ul className="list-unstyled text-start">
              <li><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" /> Location: 12 Belmont, Bulawayo</li>
              <li><FontAwesomeIcon icon={faPhone} className="mr-2" /> Tel: +2334454</li>
              <li><FontAwesomeIcon icon={faGlobe} className="mr-2" /> Website: fhs.edu.zw</li>
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
