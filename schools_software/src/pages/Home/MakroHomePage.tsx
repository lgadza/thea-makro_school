import { Container } from "react-bootstrap"
import HomeNavbar from "./HomeNavbar"
import Carousel from "./Carousel"

const MakroHomePage:React.FC=()=>{
    return(
        <Container>
            <HomeNavbar/>
            <Carousel/>
        </Container>   
    )
}
export default MakroHomePage