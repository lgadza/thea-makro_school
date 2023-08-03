import { Container } from "react-bootstrap"
import HomeNavbar from "./HomeNavbar"
import Carousel from "./Carousel"
import FAQ from "./FAQ"

const MakroHomePage:React.FC=()=>{
    return(
        <Container>
            <HomeNavbar/>
            <Carousel/>
            <FAQ/>
        </Container>   
    )
}
export default MakroHomePage