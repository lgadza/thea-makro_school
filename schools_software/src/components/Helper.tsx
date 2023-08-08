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
                    <p className="content_bg  text-start p-3 w-75">
                    Certainly! Here are a few examples of exothermic chemical reactions along with the state symbols of reactants and products for each reaction:

1. Combustion of Methane (CH₄):
   Reaction: CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(g)
   Explanation: Methane gas reacts with oxygen gas to produce carbon dioxide gas and water vapor, releasing heat energy.

2. Formation of Iron(III) Oxide (Fe₂O₃):
   Reaction: 4Fe(s) + 3O₂(g) → 2Fe₂O₃(s)
   Explanation: Solid iron reacts with oxygen gas to form solid iron(III) oxide, releasing heat in the process.

3. Neutralization of Hydrochloric Acid (HCl) and Sodium Hydroxide (NaOH):
   Reaction: HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l)
   Explanation: Hydrochloric acid solution reacts with sodium hydroxide solution to form sodium chloride solution and water, releasing heat.

4. Combustion of Butane (C₄H₁₀):
<br/>
   Reaction: <br/> 2C₄H₁₀(g) + 13O₂(g) → 8CO₂(g) + 10H₂O(g)<br/>
   Explanation: Butane gas reacts with oxygen gas to produce carbon dioxide gas and water vapor, releasing heat energy.
   <br/>
5. Decomposition of Hydrogen Peroxide (H₂O₂):
<br/>
   Reaction: <br/> 2H₂O₂(l) → 2H₂O(l) + O₂(g)
   <br/>
   Explanation:<br/> Hydrogen peroxide decomposes into water and oxygen gas, with the reaction being exothermic.

In each of these reactions, the state symbols indicate the physical state of the reactants and products. "(g)" stands for gas, "(s)" for solid, "(l)" for liquid, and "(aq)" for aqueous (dissolved in water). The exothermic nature of these reactions means that they release heat energy into the surroundings as they proceed. 
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
                    <p className="px-3 text-start w-75">
                    Could you give me 5 examples of exothermic chemical reactions, indicating the state symbols of reactants and products involved in each reaction?
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
                <small>Regenerate response</small>
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