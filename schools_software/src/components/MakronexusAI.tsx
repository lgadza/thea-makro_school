import { faArrowCircleDown, faArrowRotateForward, faCopy, faFileArrowUp, faImage, faPaperPlane, faPencilSquare, faPlus, faSearch, faThumbsDown, faThumbsUp, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import SearchBar from "./SearchBar"
import md_logo_small from "../assets/md_logo_small.png"
import { CompanyName } from "../assets/data/company"
import { useState } from "react"
import { Button } from "react-bootstrap"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { useDispatch } from "react-redux"
import { chatWithAi } from "../redux/actions"
import { Dispatch } from "redux"
interface Message {
    altText?: string;
    message: string;
    liked?: boolean;
    imageSrc?: string;
    from:string;
  }
const initialMessages= [
    {
      imageSrc: md_logo_small,
      altText: CompanyName,
      from: CompanyName,
      liked:true,
      imageStyle: { width: "30px", height: "30px", borderRadius: "0%" },
      message: `
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
      `,
    },
    {
      imageSrc: "https://whatsondisneyplus.com/wp-content/uploads/2021/12/merida-avatar-wodp.png",
      altText: "user",
      from: "user",
      imageStyle: { width: "30px", height: "30px", borderRadius: "0%" },
      message: `Could you give me 5 examples of exothermic chemical reactions, indicating the state symbols of reactants and products involved in each reaction?
      `,
    },
  ];
const MakronexusAI=():JSX.Element=>{
    const chats=useSelector((state:RootState)=>state.chatWithAi.messages)
    console.log(chats,"CHATS")
    const [messages, setMessages] = useState<Message[]>([ {
        imageSrc: "https://whatsondisneyplus.com/wp-content/uploads/2021/12/merida-avatar-wodp.png",
        altText: "user",
        from: "user",
        message: `Could you give me 5 examples of exothermic chemical reactions, indicating the state symbols of reactants and products involved in each reaction?
        `,
      }]);
    // const [messages, setMessages] = useState<Message[]>(initialMessages);
    const [question,setQuestion]=useState<string>("")
    const [copied,setCopied]=useState<boolean>(false)
    const [liked,setLiked]=useState<boolean>(false)
    const handleInput=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setQuestion(e.target.value)
    }
    const dispatch:Dispatch<any> =useDispatch()
   const  handleAsk=()=>{
    setMessages([...messages,{message:`${question}`,from:"user"}])
    setQuestion("")
    dispatch(chatWithAi(messages))

   }
   
    return(
        <div className="row mx-3">
           <div className="col col-md-8 helper">
           <div className="d-flex justify-content-center">
                <div className="d-flex justify-content-end w-75">
                <div className="cursor-pointer pb-2" onClick={()=>setCopied(true)}>
                    {!copied?(<FontAwesomeIcon style={{color:`${true}:"rgb(108, 117, 105)":""`}} icon={faCopy}/>):(<span className="py-2 text-muted">Copied</span>)}
                </div>
                </div>
            </div>
        
                {messages.length>0 && messages.map((section, index) => (
                    <>
                    <div className="d-flex justify-content-center text-start mt-2" key={index}>
                        <div className="pe-2">
                        <img src={`${section.from==="user"?"https://whatsondisneyplus.com/wp-content/uploads/2021/12/merida-avatar-wodp.png":md_logo_small}`} alt={section.altText} style={{ width: "30px", height: "30px", borderRadius: "0%" }} className="img_component" />
                        </div>
                        {section.from==="user"?( <div className="d-flex justify-content-between w-75 ">
                        <p className={`${section.from==="user"?"main_bg":"content_bg"} text-start p-3`}>
                        {section.message}
                        </p>
                            <FontAwesomeIcon icon={faPencilSquare} className="mt-3"/>
                        </div>):( <p className={`${section.from==="user"?"main_bg":"content_bg"} text-start p-3 w-75`}>
                        {section.message}
                        </p>)}
                    </div>
                    {section.from!=="user" && (
                    <div className="d-flex justify-content-center">
                    <div className="d-flex w-75 justify-content-end">
                        
                        <FontAwesomeIcon className="cursor-pointer" icon={faThumbsUp} style={{color:`${section.liked?"rgb(3, 233, 244)":"white"}`}}/>
                        <FontAwesomeIcon className="cursor-pointer px-3" icon={faThumbsDown} style={{color:`${section.liked?"white":"red"}`}}/>
                        <FontAwesomeIcon className="cursor-pointer" icon={faCopy}/>
                    </div>
                    </div>
                    )}
                    </>
                    ))}
                
                <div className="btn btn-secondary my-3">
                <FontAwesomeIcon className="px-2" icon={faArrowRotateForward}/>
                <small>Regenerate response</small>
                </div>
             <div className="pb-3 ask-input-nav main_bg py-3">
                <div className="d-flex justify-content-center ms-3">
                <div className="d-flex justify-content-between w-75 align-items-center">
                <FontAwesomeIcon className="cursor-pointer" style={{fontSize:"20px"}} icon={faFileArrowUp}/>
                <FontAwesomeIcon className="cursor-pointer mx-3" style={{fontSize:"20px"}} icon={faImage}/>
                    <div className="d-flex align-items-center">
            <input type="text" style={{width:"30rem"}} className="search py-2 px-2 ms-1" placeholder="Ask me anything ..." value={question} onChange={handleInput}/>
        </div>
                    <div className="btn btn-primary" onClick={handleAsk}>
                    <FontAwesomeIcon icon={faPaperPlane}/>
                    </div>
                </div>
                </div>
                <FontAwesomeIcon className="go-bottom cursor-pointer" icon={faArrowCircleDown}/>
             </div>
           </div>
           <div className="col col-md-4">
            <div className="d-flex">
            <Button className="btn-primary  content_bg">
                <FontAwesomeIcon icon={faPlus}/> New chat
            </Button>
            </div>
            <div className="my-3">
                <ul>
                    <li className="nav-item p-2 border-radius-round">
                        <span className="d-flex flex-column">
                            <strong className="d-flex">Career</strong>
                            <small className="d-flex">How to organize productivity work ...</small>
                        </span>
                    </li>
                    <li className="nav-item p-2 border-radius-round">
                        <span className="d-flex flex-column">
                            <strong className="d-flex">Career</strong>
                            <small className="d-flex">How to organize productivity work ...</small>
                        </span>
                    </li>
                </ul>
                <div className="mt-3 text-start d-flex">
            <Button className="btn-secondary  content_bg">
            <FontAwesomeIcon icon={faTrash}/>
            <span className="px-2">Clear history</span>  
            </Button>  
                </div>
            </div>
           </div>
        </div>
    )
}
export default MakronexusAI