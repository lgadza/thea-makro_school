// import { Container } from "react-bootstrap"
// import HomeNavbar from "./HomeNavbar"
// import Carousel from "./Carousel"
// import FAQComp from "./FAQComp"
// import Footer from "../../components/Footer"


// const MakroHomePage:React.FC=()=>{
  
//     return(
//         <Container fluid className="px-0 mb-5">
//             <Container className=" px-5">
//             <HomeNavbar/>
//             <Carousel/>
//             <FAQComp/>
//             </Container>
//             <Footer/>
//         </Container>   
//     )
// }
// export default MakroHomePage
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
          <Container className="px-5">
            <HomeNavbar />
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
