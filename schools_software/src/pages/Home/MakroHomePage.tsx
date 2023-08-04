import { Container } from "react-bootstrap"
import HomeNavbar from "./HomeNavbar"
import Carousel from "./Carousel"
import FAQComp from "./FAQComp"
import Footer from "../../components/Footer"


const MakroHomePage:React.FC=()=>{
    return(
        <Container fluid className="px-0 mb-5">
            <HomeNavbar/>
            <Container className=" px-5">
            <Carousel/>
            <FAQComp/>
            </Container>
            <Footer/>
        </Container>   
    )
}
export default MakroHomePage