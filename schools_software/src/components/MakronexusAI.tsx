import { IconDefinition, faArrowCircleDown, faArrowRotateForward, faBoltLightning, faCopy, faFileArrowUp, faImage, faPaperPlane, faPencilSquare, faPlus, faSearch, faSun, faThumbsDown, faThumbsUp, faTrash, faWarning } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import SearchBar from "./SearchBar"
import md_logo_small from "../assets/md_logo_small.png"
import { CompanyName } from "../assets/data/company"
import { ReactElement, useEffect, useRef, useState } from "react"
import { Button, Col, Row } from "react-bootstrap"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { useDispatch } from "react-redux"
import { chatWithAi, deleteChat, getAllAiChats, getEngines, newChat } from "../redux/actions"
import { Dispatch } from "redux"
import "./MakronexusAi.css"
import { ApplicantRegistration } from "../Types"
interface Message {
    altText?: string;
    message: string;
    liked?: boolean;
    imageSrc?: string;
    from:string;
  }
  interface Engine{
    created:string|null;
    id:string;
    object:string;
    owner:string;
    permissions: null;
    ready:boolean
  }
  interface chatProps{
    id:string;
    makronexaQAs:[];
    createdAt:string;
    updatedAt:string;
  }
  const MakronexusAI: React.FC = () => {
    const user:ApplicantRegistration=useSelector((state:RootState)=>state.applicantData.data)
    const allChats=useSelector((state:RootState)=>state.getAllAiChats.chats)
    const allChatsLoading=useSelector((state:RootState)=>state.getAllAiChats.isLoading)
    const allError=useSelector((state:RootState)=>state.getAllAiChats.isError)
    const [loading, setLoading] = useState(false); 
    const [currentChat, setCurrentChat] = useState(""); 
    const [models, setModels] = useState<Engine[]>([]); 
    const [chats, setchats] = useState<chatProps[]>(allChats); 
    const [currentModel,setCurrentModel]=useState("text-davinci-003")
    const [messages, setMessages] = useState<Message[]>([]);
    const [question, setQuestion] = useState<string>("");
    const [copied, setCopied] = useState<boolean>(false);
    const [aiError, setAiError] = useState<boolean>(false);
    const dispatch: Dispatch<any> = useDispatch();
  
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      setQuestion(e.target.value);
    };
    const lastMessageRef = useRef<HTMLDivElement | null>(null);
    
  const handleAsk = async () => {
    console.log("clicked 1")
    if (question !== "") {
      console.log("clicked 2")
      const newMessage = { message: question, from: "user" };
      setMessages((prev) => [...prev, newMessage]);
      setQuestion("");
      try {
        setLoading(true); 
        const answer = await chatWithAi([...messages, newMessage],currentModel,question,currentChat, user.id);
        if (answer) {
          setMessages((prev) => [...prev, answer]);
        }else{
          setAiError(true)
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  };
  console.log(allChats,"ALL CHATS")
  const handleNewChat=async()=>{
    setCurrentChat("")
    setMessages([])
    try{
      const lastChat=chats[chats.length-1]
      if (lastChat && lastChat.makronexaQAs.length===0) {
        await deleteChat(lastChat.id);
      }

      if(user.id){
      const newAiChat = await newChat(user.id)
      if(newAiChat){
        setCurrentChat(newAiChat)
      }else{
        setAiError(true)
      }
    }
    }catch(error){
      console.log(error,"ERROR")
    }
  }
  useEffect(()=>{
    handleNewChat()
    dispatch(getAllAiChats(user.id))
  },[])
  useEffect(() => {
   
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);
  useEffect(()=>{
    const getModels=async()=>{
      const engines=await getEngines()

      console.log(engines.models)
      setModels(engines.models)
    }
    getModels()

  },[])
const Loader: React.FC = () => {
  return (
    <div className="chat-loader-container w-75  py-3 d-flex justify-content-center align-items-center">
      <div className="chat-loader ">
        <div className="loader--dot"></div>
        <div className="loader--dot"></div>
        <div className="loader--dot"></div>
        <div className="loader--dot"></div>
        <div className="loader--dot"></div>
        <div className="loader--dot"></div>
        <div className="loader--text"></div>
      </div>
    </div>
  );
};

const MakronexaOverview: React.FC = () => {
  const examplePrompts = [
    "Explain Newton's law in simple terms",
    "Could you suggest creative and interactive online activities",
    "Got any tips on how to create an effective study schedule?",
  ];

  const capabilities = [
    "Remembers what users said earlier in the conversation",
    "Helps students find relevant and credible sources for research projects",
    "Streamlines the grading process by automatically grading assignments, quizzes, and exams",
  ];

  const limitations = ["May occasionally generate incorrect answers"];
  return (
    <div>
      <Row>
         <Col>
          <OverviewSection
            icon={faSun}
            title="Examples"
            items={examplePrompts}
            onItemClick={(item)=>{
             setQuestion(item)
              handleAsk()
            }}
            className="nav-item"
          />
        </Col>
        <Col>
          <OverviewSection icon={faBoltLightning} title="Capabilities" items={capabilities} />
        </Col>
        <Col>
          <OverviewSection icon={faWarning} title="Limitations" items={limitations} color="yellow" />
        </Col>
      </Row>
    </div>
  );
};

const OverviewSection: React.FC<{ icon: IconDefinition; title: string; items: string[]; color?: string;className?:string;onItemClick?: (item: string) => void; }> = ({
  icon,
  title,
  items,
  color,
  onItemClick,
  className
}) => {
  return (
    <div className="d-flex flex-column">
      <FontAwesomeIcon icon={icon} style={{ color: color || "inherit" }} />
      <span className="mt-1">{title}</span>
      <ul>
        {items.map((item, index) => (
          <li key={index} className={`text-start content_bg my-3 p-2 ${className}`}
          onClick={() => {onItemClick && onItemClick(item)
console.log(question,"QUESTION")}

          }
          >
            <small>{item}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

    return (
      <div className="row mx-3">
        <div className="col col-md-8 helper">
          {messages.length > 0 ?
            (messages.map((section, index) => (
              <div key={index}>
                <div className="d-flex justify-content-center text-start mt-2">
                  <div className="pe-2">
                    <img
                      src={
                        section.from === "user"
                        ? "https://whatsondisneyplus.com/wp-content/uploads/2021/12/merida-avatar-wodp.png"
                        : md_logo_small
                      }
                      alt={section.altText}
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "0%",
                      }}
                      className="img_component"
                    />
                  </div>
                      <div ref={lastMessageRef} />
                  {section.from === "user" ? (
                    <div className="d-flex justify-content-between w-75 ">
                      <p
                        className={`chat-content ${
                          section.from === "user" ? "main_bg" : "content_bg"
                        } text-start p-3`}
                      >
                        {section.message}
                      </p>
                      <FontAwesomeIcon icon={faPencilSquare} className="mt-3" />
                    </div>
                  ) : (
                    <p
                      className={`chat-content ${
                        section.from === "user" ? "main_bg" : "content_bg"
                      } text-start p-3 w-75`}
                    >
                      <pre  style={{
                        whiteSpace: "pre-wrap",
                        wordWrap: "break-word",
                        overflowWrap: "break-word",
                      }}>{section.message.trimStart()}</pre>
                    </p>
                  )}
                </div>
                {section.from !== "user" && (
                  <div className="d-flex justify-content-center mb-3">
                    <div className="d-flex w-75 justify-content-end">
                      <FontAwesomeIcon
                        className="cursor-pointer"
                        icon={faThumbsUp}
                        style={{
                          color: `${section.liked ? "rgb(3, 233, 244)" : "white"}`,
                        }}
                      />
                      <FontAwesomeIcon
                        className="cursor-pointer px-3"
                        icon={faThumbsDown}
                        style={{
                          color: `${section.liked ? "white" : "red"}`,
                        }}
                      />   
                      <div
                        className="cursor-pointer pb-2"
                        onClick={() => setCopied(true)}>
                        {!copied ? (
                          <FontAwesomeIcon
                            style={{ color: `${true}:"rgb(108, 117, 105)"` }}
                            icon={faCopy}
                          />
                        ) : (
                          <span className="py-2 text-muted">Copied</span>
                        )}
                      </div>
                      </div>
                    </div>)}
                  </div> ))):(<MakronexaOverview/>)}
  
         
          <div className="pb-3 ask-input-nav main_bg py-3">
            <div className="d-flex input-container justify-content-center ms-3">
          {loading?( <Loader/>):(
              <div className="d-flex justify-content-between w-75 align-items-center">
                 {aiError?(<Button className="btn regenerate-btn-container bg-warning my-3" style={{color:"red"}} onClick={handleAsk}>
                  <FontAwesomeIcon className="px-2" icon={faWarning} />
                  <small>Something went wrong at our end, try later</small>
                </Button>):(<Button className="btn regenerate-btn-container content_bg my-3" onClick={handleAsk}>
                  <FontAwesomeIcon className="px-2" icon={faArrowRotateForward} />
                  <small>regenerate</small>
                </Button>)}
                <FontAwesomeIcon
                  className="cursor-pointer"
                  style={{ fontSize: "20px" }}
                  icon={faFileArrowUp}
                />
                <FontAwesomeIcon
                  className="cursor-pointer mx-3"
                  style={{ fontSize: "20px" }}
                  icon={faImage}
                />
                <div className="d-flex align-items-center">  
                    <input
                    type="text"
                    onKeyDown={(e) => {
                      e.keyCode === 13 && e.shiftKey === false && handleAsk();
                    }}
                    style={{ width: "30rem" }}
                    className="search py-2 px-2 ms-1"
                    placeholder="Ask me anything ..."
                    value={question}
                    onChange={handleInput}
                  />
                    
                  
                </div>
                <div className="btn btn-primary" onClick={handleAsk}>
                  <FontAwesomeIcon icon={faPaperPlane} />
                </div>
              </div>
                  )}
            </div>
            <FontAwesomeIcon
              className="go-bottom cursor-pointer"
              icon={faArrowCircleDown}
            />
          </div>
        </div>
        <div className="col col-md-4 border-round pt-3 border-radius-round">
          <div className="d-flex justify-content-between">
            <Button className="btn-primary content_bg" onClick={handleNewChat}>
              <FontAwesomeIcon icon={faPlus} /> <small>New chat</small>
            </Button>
           {models.length>0 && (
             <select name="models" className="p-2" id="model" onChange={(e:React.ChangeEvent<HTMLSelectElement>)=>{
              setCurrentModel(e.target.value)
             }}>
             {models.map((model,index)=>(
               <option key={index} value={model.id}>{model.id}</option>
             ))}
           </select>
           )}
          </div>
          <div className="my-3">
            <ul>
              <li className="nav-item p-2 border-radius-round">
                <small className="d-flex flex-column">
                  <strong className="d-flex">Career</strong>
                  <span className="d-flex">
                    How to organize productivity work ...
                  </span>
                </small>
              </li>
            </ul>
            <div className="mt-3 text-start d-flex">
              <Button className="btn-secondary  content_bg">
                <FontAwesomeIcon icon={faTrash} />
                <span className="px-2">Clear history</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default MakronexusAI;