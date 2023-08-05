
  import { Container } from "react-bootstrap";
  import HomeNavbar from "./HomeNavbar";
  import Carousel from "./Carousel";
  import FAQComp from "./FAQComp";
  import Footer from "../../components/Footer";
  import PageProgress from "./PageProgress";

  const MakroHomePage: React.FC = () => {
    const sections = [
      { label: "Home" },
      { label: "Carousel" },
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
              <Carousel />
              <FAQComp />
            </Container>
            <Footer />
          </Container>
        </div>
      </div>
    );
  };

  export default MakroHomePage;
  