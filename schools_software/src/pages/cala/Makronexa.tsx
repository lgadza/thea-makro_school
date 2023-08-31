import { Row ,Container, Col, Nav} from "react-bootstrap"
import AccountTopNavigationBar from "../../components/AccountTopNavigationBar"
import { useEffect, useState } from "react"
import ResourceUploadForm from "../cala/ResourceUploadForm"
import CALAOverView from "../cala/Dashboard"
import MakronexusAI from "../../components/MakronexusAI"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import { useDispatch } from "react-redux"
import { Dispatch } from "redux"
import { getApplicantData } from "../../redux/actions"
import Settings from "../cala/Settings"
import { Link } from "react-router-dom"
import md_logo_small from "../../assets/md_logo_small.png"
import { CompanyName } from '../../assets/data/company';
import "./MobileNav.css"



interface Resource {
    id: number;
    title: string;
    thumbnail: string;
    description:string;
    reviews:[];
    rating:number
  }
  const resources:Resource[] = [
    { id: 1, title: 'Resource 1', thumbnail: 'https://media.wired.com/photos/598e35994ab8482c0d6946e0/master/w_2560%2Cc_limit/phonepicutres-TA.jpg',description:"", reviews:[],rating:3},
    { id: 2, title: 'Resource 2', thumbnail: 'https://ichef.bbci.co.uk/news/999/cpsprodpb/15951/production/_117310488_16.jpg',description:"", reviews:[],rating:3},
    
  ];
  
const Makronexa=():JSX.Element=>{
  const dispatch:Dispatch<any> =useDispatch()
  const user=useSelector((state:RootState)=>state.applicantData.data)
  const accessToken=useSelector((state:RootState)=>state.accessToken.accessToken)
    // const [showMenu, setShowMenu] = useState(true);
    // const toggleMenu = () => {
    //   setShowMenu(!showMenu);
    // };
    const [activeComponent,setActiveComponent]=useState<string>("MakronexusAI")

    const handleNavigationClick=(component:string)=>{
        setActiveComponent(component)
    }
const [addResources, setAddResources] = useState<Resource[]>([]);

    const handleResourceUpload = (title: string, description:string, file: File, ) => {
        const newResource: Resource = {
          id: addResources.length + 1,
          title,
          thumbnail: URL.createObjectURL(file),
          description,
          rating: 0,
          reviews: [],
        };
        setAddResources([...resources, newResource]);
      };
      useEffect(()=>{
        dispatch(getApplicantData(accessToken.accessToken))
      },[])
    return(
        <Container fluid className="ps-0 ms-0 pages scrollbar">
            {/* <MobileNav/> */}
            <Row>
          <Col md={2} className={"pe-0 d-none d-md-block hide-menu border-round"}>
                   <div className="px-4 w-100" style={{ height: "100vh", overflowY: "scroll" }}>
            <div className="d-flex px-2">
              <img
                src={md_logo_small}
                alt={CompanyName}
                style={{ width: `${50}px`, height: `${50}px`, borderRadius: "0%",objectFit:"contain" }}
                className="img_component"
              />
            </div>
            <Nav className="flex-column mt-4 w-100">
                <Nav.Item>
                <Link to=''
                          onClick={() => handleNavigationClick("MakronexusAI")}  
                          className={`d-flex nowrap align-items-center px-2 py-2 ${activeComponent === "MakronexusAI" ? "active" : ""}`}>
                        <small>Makronexa</small>
                </Link>
                </Nav.Item>
                <Nav.Item>
                <Link to="" className='d-flex align-items-center nowrap px-2 py-2'><small className="text-nowrap">My Projects</small></Link>
                </Nav.Item>
                <Nav.Item>
                   <Link to="" onClick={()=>handleNavigationClick("ResourceUploadForm")} className={`d-flex w-100 nowrap align-items-center px-2 py-2 ${activeComponent === "ResourceUploadForm" ? "active" : ""}`}> 
                   <small className="text-nowrap">Upload file</small>
                   </Link> 
                   </Nav.Item> 
                   <Nav.Item>
                   <Link to="" className={`d-flex nowrap align-items-center px-2 py-2 ${activeComponent === "Settings" ? "active" : ""}`} onClick={() => handleNavigationClick("Settings")} >
                    <small className="text-nowrap">Settings</small>
                       </Link>
                </Nav.Item>
            </Nav>
        </div>
          </Col>
                <Col className="px-0 makronexa-container">
        <div className="py-0" style={{ height: "100vh", overflowY: "scroll" }}>
                   <AccountTopNavigationBar user={user}/>
                   <div className="px-5">
                  { activeComponent ==="dashboard" && <CALAOverView/>}
                  { activeComponent ==="ResourceUploadForm" && <ResourceUploadForm onResourceUpload={handleResourceUpload}/> }
                  { activeComponent ==="Settings" && <Settings/>}
                   </div>
                  { activeComponent ==="MakronexusAI" && <MakronexusAI/> }
                </div>
                </Col>
            </Row>
            
        </Container>
    )
}

export default Makronexa