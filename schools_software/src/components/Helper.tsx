import { faArrowRotateForward, faCopy, faFileArrowUp, faPaperPlane, faThumbsDown, faThumbsUp, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import SearchBar from "./SearchBar"

const Helper=():JSX.Element=>{
    return(
        <div className="row">
           <div className="col col-md-8">
           <div className="d-flex justify-content-center">
                <div className="d-flex justify-content-between w-75">
                <h5>Career</h5>
                <div className="cursor-pointer">
                <FontAwesomeIcon style={{color:`${true}:"rgb(108, 117, 105)":""`}} icon={faCopy}/>
                {/* <span className="px-2">Copy response</span> */}
                <span className="px-2 text-muted">Copied</span>
                </div>
                </div>
            </div>
                <div className="d-flex justify-content-center text-start">
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

5. Develop Interactive Prototypes:
   - Build interactive prototypes to simulate the app's functionality and user flow.
   - Use prototyping tools like InVision, Figma, or Adobe XD to create clickable mockups.
   - Share the prototypes with stakeholders and gather feedback for iterative improvements.

6. Iterate and Refine:
   - Gather feedback from users, stakeholders, and usability testing sessions.
   - Incorporate feedback to refine the app's design and resolve any issues or concerns.
   - Continuously iterate and improve the app's UI and user experience based on feedback.

7. Create Design Assets:
   - Once the design is finalized, create all necessary assets for development.
   - Export graphical elements, icons, and images in appropriate formats and sizes.
   - Provide detailed design specifications and guidelines for developers.

8. Collaborate with Developers:
   - Work closely with developers to ensure a smooth transition from design to development.
   - Clarify design elements, interactions, and animations during the development process.
   - Maintain open communication and address any design-related questions or challenges.

9. Test and Iterate:
   - Conduct thorough testing to identify and fix any usability or functionality issues.
   - Collect user feedback during beta testing and make necessary improvements.
   - Iterate on the design and development based on testing results.

10. Finalize and Launch:
    - Prepare the app for launch by addressing any remaining issues or bugs.
    - Optimize the app's performance and ensure compatibility with various devices.
    - Submit the app to relevant app stores and comply with their guidelines.
    - Develop a marketing strategy to promote the app's launch and reach the target audience.

Remember that designing an app is an iterative process, and feedback from users and stakeholders is crucial at each stage. Collaboration and communication with your development team and stakeholders are key to creating a successful app that meets user needs and achieves its intended goals. 
                    </p>

                </div>
                <div className="d-flex  justify-content-center">
                    <div className="d-flex w-75 justify-content-end">
                        <FontAwesomeIcon className="cursor-pointer" icon={faThumbsUp}/>
                        <FontAwesomeIcon className="cursor-pointer px-3" icon={faThumbsDown}/>
                        <FontAwesomeIcon className="cursor-pointer" icon={faCopy}/>
                    </div>
                </div>
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
           </div>
           <div className="col col-md-4">
            <h5>History</h5>
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