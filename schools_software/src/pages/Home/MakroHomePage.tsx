import { Container } from "react-bootstrap"
import HomeNavbar from "./HomeNavbar"
import Carousel from "./Carousel"
import FAQComp from "./FAQComp"


const MakroHomePage:React.FC=()=>{
    return(
        <Container className=" mb-5">
            <HomeNavbar/>
            <Carousel/>
            <FAQComp/>
        </Container>   
    )
}
export default MakroHomePage