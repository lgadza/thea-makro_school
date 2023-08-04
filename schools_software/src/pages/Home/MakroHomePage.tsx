import { Container } from "react-bootstrap"
import HomeNavbar from "./HomeNavbar"
import Carousel from "./Carousel"
import FAQComp from "./FAQComp"
import Footer from "../../components/Footer"


const MakroHomePage:React.FC=()=>{
    return(
        <Container className=" mb-5">
            <HomeNavbar/>
            <Carousel/>
            <FAQComp/>
            <Footer/>
        </Container>   
    )
}
export default MakroHomePage