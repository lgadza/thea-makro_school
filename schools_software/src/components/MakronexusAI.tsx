import { faArrowCircleDown, faArrowRotateForward, faCopy, faFileArrowUp, faImage, faPaperPlane, faPencilSquare, faPlus, faSearch, faThumbsDown, faThumbsUp, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import SearchBar from "./SearchBar"
import md_logo_small from "../assets/md_logo_small.png"
import { CompanyName } from "../assets/data/company"
import { useEffect, useRef, useState } from "react"
import { Button } from "react-bootstrap"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { useDispatch } from "react-redux"
import { chatWithAi } from "../redux/actions"
import { Dispatch } from "redux"
import "./MakronexusAi.css"
interface Message {
    altText?: string;
    message: string;
    liked?: boolean;
    imageSrc?: string;
    from:string;
  }
  const MakronexusAI: React.FC = () => {
    // const answer = useSelector((state: RootState) => state.chatWithAi.message);
    const isError = useSelector((state: RootState) => state.chatWithAi.isError);
    const [loading, setLoading] = useState(false); 
    const [messages, setMessages] = useState<Message[]>([]);
    const [question, setQuestion] = useState<string>("");
    const [copied, setCopied] = useState<boolean>(false);
    const dispatch: Dispatch<any> = useDispatch();
  
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      setQuestion(e.target.value);
    };
    const lastMessageRef = useRef<HTMLDivElement | null>(null);

    // const handleAsk = async () => {
    //   if (question !== "") {
    //     const newMessage = { message: question, from: "user" };
    //     await Promise.resolve(setMessages((prev) => [...prev, newMessage]));
    //     await setQuestion("");
    //     try{
    //       const answer=  await chatWithAi([...messages, newMessage]);
    //       await Promise.resolve(setMessages((prev) => [...prev, answer]));
    //     }catch(error){
    //       console.log(error)
    //     }
        
    //   }
    // };
    
  const handleAsk = async () => {
    if (question !== "") {
      const newMessage = { message: question, from: "user" };
      setMessages((prev) => [...prev, newMessage]); // Set loading and add new message
      setQuestion("");
      try {
        setLoading(true); // Set loading to true before fetching
        const answer = await chatWithAi([...messages, newMessage]);
        setMessages((prev) => [...prev, answer]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    }
  };
  
  const newChat=()=>{
    setMessages([])
  }
  useEffect(() => {
   
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
      // lastMessageRef.current && autoAnimate(lastMessageRef.current)
    }
  }, [messages]);
  
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
  
    return (
      <div className="row mx-3">
        <div className="col col-md-8 helper">
          <div className="d-flex justify-content-center">
            <div className="d-flex justify-content-end w-75">
              <div
                className="cursor-pointer pb-2"
                onClick={() => setCopied(true)}
              >
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
          </div>
          {messages.length > 0 &&
            messages.map((section, index) => (
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
                      <FontAwesomeIcon
                        className="cursor-pointer"
                        icon={faCopy}
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
  
          <div className="btn btn-secondary my-3" onClick={handleAsk}>
            <FontAwesomeIcon className="px-2" icon={faArrowRotateForward} />
            <small>Regenerate response</small>
          </div>
          <div className="pb-3 ask-input-nav main_bg py-3">
            <div className="d-flex justify-content-center ms-3">
          {loading?( <Loader/>):(
              <div className="d-flex justify-content-between w-75 align-items-center">
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
        <div className="col col-md-4">
          <div className="d-flex">
            <Button className="btn-primary content_bg" onClick={newChat}>
              <FontAwesomeIcon icon={faPlus} /> New chat
            </Button>
          </div>
          <div className="my-3">
            <ul>
              <li className="nav-item p-2 border-radius-round">
                <span className="d-flex flex-column">
                  <strong className="d-flex">Career</strong>
                  <small className="d-flex">
                    How to organize productivity work ...
                  </small>
                </span>
              </li>
              <li className="nav-item p-2 border-radius-round">
                <span className="d-flex flex-column">
                  <strong className="d-flex">Career</strong>
                  <small className="d-flex">
                    How to organize productivity work ...
                  </small>
                </span>
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