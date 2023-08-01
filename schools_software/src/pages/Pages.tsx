import { Row ,Container, Col, Dropdown, Form} from "react-bootstrap"
import AdminSidebarMenu from "../components/MainSidebar"
import AccountTopNavigationBar from "../components/AccountTopNavigationBar"
import { useState } from "react"
import AllCandidates from "./admin/AllCandidates"
import AllNewCandidate from "./admin/AddNewCandidate"
import CandidateDetails from "./admin/CandidateDetails"
import ResourceUploadForm from "./cala/ResourceUploadForm"
import CALAOverView from "./cala/Dashboard"
import Loader from "../components/Loader"
import Helper from "../components/Helper"
import UploadFileModal from "../components/UploadFileModal"

interface Resource {
    id: number;
    title: string;
    thumbnail: string;
    description:string;
    tags:[];
    reviews:[];
    rating:number
  }
  const resources:Resource[] = [
    { id: 1, title: 'Resource 1', thumbnail: 'https://media.wired.com/photos/598e35994ab8482c0d6946e0/master/w_2560%2Cc_limit/phonepicutres-TA.jpg',description:"", tags:[],reviews:[],rating:3},
    { id: 2, title: 'Resource 2', thumbnail: 'https://ichef.bbci.co.uk/news/999/cpsprodpb/15951/production/_117310488_16.jpg',description:"", tags:[],reviews:[],rating:3},
    
  ];

const Pages=():JSX.Element=>{
    const [showMenu, setShowMenu] = useState(true);
   

    const toggleMenu = () => {
      setShowMenu(!showMenu);
    };
    const [activePage,setActivePage]=useState<string>("PersonalData")
    const [activeComponent,setActiveComponent]=useState<string>("dashboard")

    const handleNavigationClick=(component:string)=>{
        setActiveComponent(component)
    }
const [addResources, setAddResources] = useState<Resource[]>([]);

    const handleResourceUpload = (title: string, description:string, file: File, tags: string[]) => {
        // Implement the resource upload logic here
        // For example, you can upload the resource to a server and get a response with the resource details
        // Then, add the new resource to the resources array
        const newResource: Resource = {
          id: addResources.length + 1,
          title,
          thumbnail: URL.createObjectURL(file),
          description: 'Sample description for the uploaded resource.',
          tags:[],
          rating: 0,
          reviews: [],
        };
    
        setAddResources([...resources, newResource]);
      };
    return(
        <Container fluid className="ps-0 ms-0 pages scrollbar">
            <Row>
                 <Col md={2} className={showMenu?"":" hide-menu md-1"} >
                <AdminSidebarMenu 
                toggleMenu={toggleMenu} 
                showMenu={showMenu}
                 source="studentSchoolAccount"
                    activeComponent={activeComponent}
                    handleNavigationClick={handleNavigationClick}
                 />
                 
                </Col>
                
                <Col className="mx-3">
                   <AccountTopNavigationBar/>
                  {/* { activeComponent ==="dashboard" && < } */}
                  { activeComponent ==="AllStudents" && <AllCandidates/>  }
                  { activeComponent ==="CandidateDetails" && <CandidateDetails/> }
                  { activeComponent ==="NewCandidate" && <AllNewCandidate/> }
                  {/* { activeComponent ==="CandidateDetails" && <CALAOverView/>} */}
                  { activeComponent ==="ResourceUploadForm" && <ResourceUploadForm onResourceUpload={handleResourceUpload}/> }
                  { activeComponent ==="Helper" && <Helper/> }
                    {/*  
                    
                    
                    
                     */}
                    
                    {/* <UploadFileModal/> */}
                </Col>
            </Row>
        </Container>
    )
}

export default Pages