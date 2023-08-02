import { faCheck, faCross, faPencil, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Form, Spinner } from "react-bootstrap";
import "./UploadFile.css"
const StudentProfileTable=():JSX.Element=>{
    const emailAddress="louis@gmail.com"
    const tel=793433455
  const  [isEditing, setIsEditing] = useState(false);
  const [isPut, setPut] = useState(false);
  const [name, setName] = useState("Louis Gadza");

  const updateMe = async () => {
    setPut(true);
    // await dispatch(putMe(accessToken.accessToken, updatedData));
    // dispatch(getMe(accessToken.accessToken));
  };
    return(
        <table className="student-table candidate-details-field w-100">
        <tbody>
          <tr>
            <td>Full-name</td>
            <td>
            <div className="d-flex justify-content-between py-0  align-items-center">
            <Form.Group className=" w-100 px-3  edit-text mt-2 ">
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="py-0 pl-0"
              />
            </Form.Group>
            {/* {isLoading && isPut && <Spinner animation="grow" size="sm" />} */}
            {!isEditing && (
              <span>
                <FontAwesomeIcon className="cursor-pointer" icon={faPencil} onClick={() => setIsEditing(true)}/>
              </span>
            )}
            {isEditing && (
              <span className="d-flex align-items-center">
                {/* <span>{name.length}</span> */}

                <FontAwesomeIcon className="text-success cursor-pointer" icon={faCheck}
                  onClick={() => {
                    setIsEditing(false);
                    updateMe();
                  }}
                 
                />
                <FontAwesomeIcon className="ps-3 text-danger cursor-pointer" icon={faX} style={{fontSize:"0.8rem"}}
                  onClick={() => {
                    setIsEditing(false);
                    setName("Louis Gadza")
                  }}
                 
                />
              </span>
            )}
          </div>
            </td>
          </tr>
          <tr>
            <td>Date of birth</td>
            <td>11-09-1998 (24years)</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>male</td>
          </tr>
          <tr>
            <td>Mobile No</td>
            <td>
                <a className="header" href={`tel:${tel}`}>{tel}</a>
            </td>
          </tr>
          <tr>
            <td>Email</td>
            <td>
                <a className="header" href={`mailto:${emailAddress}`}>{emailAddress}</a>
            </td>
          </tr>
          <tr>
            <td>Citizenship</td>
            <td>Zimbabwean</td>
          </tr>
        </tbody>
      </table>
    )
}
export default StudentProfileTable