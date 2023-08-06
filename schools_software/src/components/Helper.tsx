import { faArrowCircleDown, faArrowRotateForward, faCopy, faFileArrowUp, faPaperPlane, faThumbsDown, faThumbsUp, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import SearchBar from "./SearchBar"
import md_logo_small from "../assets/md_logo_small.png"
import { CompanyName } from "../assets/data/company"

const Helper=():JSX.Element=>{
    return(
        <div className="row">
           <div className="col col-md-8 helper">
           <div className="d-flex justify-content-center">
                <div className="d-flex justify-content-end w-75">
                <div className="cursor-pointer pb-2">
                    {true?(<FontAwesomeIcon style={{color:`${true}:"rgb(108, 117, 105)":""`}} icon={faCopy}/>):(<span className="py-2 text-muted">Copied</span>)}
                </div>
                </div>
            </div>
                <div className="d-flex justify-content-center text-start">
                  <div className="pe-2">
                  <img
                    src={md_logo_small}
                    alt={CompanyName}
                    style={{ width: `${30}px`, height: `${30}px`, borderRadius: "0%" }}
                    className="img_component"
                    />
                  </div>
                    <p className="content_bg p-3 w-75">
                    Designing an app involves several stages and considerations. While I can guide you through the high-level process, it's important to note that designing a complete app requires detailed planning and collaboration with a team of designers, developers, and stakeholders. Here's an overview of the steps involved in designing an app:

                    1. Define the Purpose and Scope:
                    - Identify the specific problem or need the app will address.
                    - Determine the target audience and their requirements.
                    - Outline the core features and functionalities the app should have.

                    2. Conduct Market Research:
                    - Analyze existing apps in the same domain to identify gaps or opportunities.
                    - Understand user expectations and preferences.
                    - Gather insights into potential competitors and industry trends.

                    3. Create a Concept and Wireframes:
                    - Develop a concept for your app, including its overall structure and navigation.
                    - Sketch rough wireframes to visualize the app's layout and flow.
                    - Focus on key screens and user interactions.

                    4. Design the User Interface (UI):
                    - Craft the visual elements of the app, such as colors, typography, and iconography.
                    - Design individual screens using graphic design tools or prototyping software.
                    - Ensure the UI aligns with the app's purpose and appeals to the target audience. 
                                        </p>
                </div>
                <div className="d-flex justify-content-center text-start">
                  <div className="pe-2">
                  <img
                    src="https://whatsondisneyplus.com/wp-content/uploads/2021/12/merida-avatar-wodp.png"
                    alt={CompanyName}
                    style={{ width: `${30}px`, height: `${30}px`, borderRadius: "0%" }}
                    className="img_component"
                    />
                  </div>
                    <p className="px-3 w-75">
                    Designing an app involves several stages and considerations. While I can guide you through the high-level process, it's important to note that designing a complete app requires detailed planning and collaboration with a team of designers, developers, and stakeholders. Here's an overview of the steps involved in designing an app:
                    </p>
                </div>
                <div className="d-flex  justify-content-center">
                    <div className="d-flex w-75 justify-content-end">
                        <FontAwesomeIcon className="cursor-pointer" icon={faThumbsUp}/>
                        <FontAwesomeIcon className="cursor-pointer px-3" icon={faThumbsDown}/>
                        <FontAwesomeIcon className="cursor-pointer" icon={faCopy}/>
                    </div>
                </div>
             <div className="pb-3">
                 <div className="btn btn-secondary my-3">
                <FontAwesomeIcon className="px-2" icon={faArrowRotateForward}/>
                <span>Regenerate response</span>
                </div>
                <div className="d-flex justify-content-center">
                <div className="d-flex justify-content-between w-75 align-items-center">
                <FontAwesomeIcon className="cursor-pointer" icon={faFileArrowUp}/>
                    <SearchBar placeholder="Start typing"/>
                    <div className="btn btn-primary">
                    <FontAwesomeIcon icon={faPaperPlane}/>
                    </div>
                </div>
                </div>
                <FontAwesomeIcon className="go-bottom cursor-pointer" icon={faArrowCircleDown}/>
             </div>
           </div>
           <div className="col col-md-4">
            <h5 className="d-flex justify-content-end px-5">History</h5>
            <div>
                <ul>
                    <li className="nav-item p-2 border-radius-round">
                        <span className="d-flex flex-column">
                            <strong className="d-flex">Career</strong>
                            <span className="d-flex">How to organize productivity work ...</span>
                        </span>
                    </li>
                    <li className="nav-item p-2 border-radius-round">
                        <span className="d-flex flex-column">
                            <strong className="d-flex">Career</strong>
                            <span className="d-flex">How to organize productivity work ...</span>
                        </span>
                    </li>
                </ul>
                <div className="btn btn-secondary">
            <FontAwesomeIcon icon={faTrash}/>
            <span className="px-2">Clear history</span>    
                </div>
            </div>
           </div>
        </div>
    )
}
export default Helper