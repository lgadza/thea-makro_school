// // src/components/ResourceUploadForm.tsx
// import { faPlus } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import React, { useState } from 'react';

// interface ResourceUploadFormProps {
//   onResourceUpload: (title: string,description:string, file: File, tags: string[]) => void;
// }

// const ResourceUploadForm: React.FC<ResourceUploadFormProps> = ({ onResourceUpload }) => {
//   const [title, setTitle] = useState('');
//   const [level, setLevel] = useState('');
//   const [subject, setSubject] = useState('');
//   const [description, setDescription] = useState('');
//   const [file, setFile] = useState<File | null>(null);
//   const [tags, setTags] = useState<string[]>([]);
//   const [tag,setTag]=useState<string>("")
// console.log(subject,"SUBJECTS")
//   const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setDescription(e.target.value);
//   };
//   const handleSubjectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setSubject(e.target.value);
//   };
//   const handleLevelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setLevel(e.target.value);
//   };
//   const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setTitle(e.target.value);
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files.length > 0) {
//       setFile(e.target.files[0]);
//     }
//   };

//   const handleTagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const tag = e.target.value.trim();
//       setTag(tag)
//   };
// const handleAddTag=()=>{
//     if (tag && !tags.includes(tag)) {
//       setTags([...tags, tag]);
//       setTag("")

//     }else{
//         setTag("already available")
//     }
// }
//   const handleResourceUpload = () => {
//     // Validation and resource upload logic here
//     if (title && file) {
//       onResourceUpload(title, description, file, tags,);
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h5 className='d-flex'>Resource Upload</h5>
//       <div className='row'>
//       <div className="mb-3 col">
//         <label htmlFor="title" className="form-label d-flex">Title</label>
//         <input type="text" placeholder="e.g Chem " className="form-control" id="title" value={title} onChange={handleTitleChange} />
//       </div>
//       <div className="mb-3 col">
//         <label htmlFor="description" className="form-label d-flex">Description</label>
//         <input type='text'  className="form-control" id="description" value={description} onChange={handleDescriptionChange} />
//       </div>
//       </div>
//       <div className='row'>
//       <div className="mb-3 col">
//         <label htmlFor="subject" className="form-label d-flex">Subject</label>
//         <select  className="form-control" id="subject" value={subject} onChange={handleSubjectChange}>
//             <option>Select</option>
//             <option value={"Mathematics"}>Mathematics</option>
//             <option value={"Physics"}>Physics</option>
//             <option value={"Chemistry"}>Chemistry</option>
//         </select>
//       </div>
//       <div className="mb-3 col">
//         <label htmlFor="level" className="form-label d-flex">Level</label>
//         <select  className="form-control" id="level" value={level} onChange={handleLevelChange}>
//             <option>Select</option>
//             <option value={"Form 3"}>Form 3</option>
//             <option value={"Form 4"}>Form 4</option>
//             <option value={"Form 5"}>Form 5</option>
//             <option value={"Form 6"}>Form 6</option>
//         </select>
//       </div>
//       </div>
//       <div className='row'>
//       <div className="mb-3 col">
//         <label htmlFor="file" className="form-label d-flex">File</label>
//         <input type="file" className="form-control" id="file" onChange={handleFileChange} />
//       </div>
//       <div className="mb-3 col">
//         <label htmlFor="tags" className="form-label d-flex">Tags</label>
//         <div className='d-flex'>
//         <input type="text" className="form-control me-3" id="tags" value={tag} onChange={handleTagChange} />
//         <button className="btn btn-dark d-flex" onClick={handleAddTag}>
//             <FontAwesomeIcon icon={faPlus}/>
//         </button>
//         </div>
//         <ul className='px-0 d-flex'>
//             {tags.length>0 && (
//                 tags.map((tag:string,index:number)=>{
//                     return(
//                         <li className='d-flex px-1' key={index} > #{tag}</li>
//                     )
//                 })
//             )}
//         </ul>
//       </div>
//       </div>
//       <button className="btn btn-primary d-flex justify-content-end" onClick={handleResourceUpload}>Upload</button>
//     </div>
//   );
// };

// export default ResourceUploadForm;

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

interface ResourceUploadFormProps {
  onResourceUpload: (title: string, description: string, file: File, tags: string[]) => void;
}

const ResourceUploadForm: React.FC<ResourceUploadFormProps> = ({ onResourceUpload }) => {
  const [title, setTitle] = useState('');
  const [level, setLevel] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [tags, setTags] = useState<string[]>([]);
  const [tag, setTag] = useState<string>('');

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };
  const handleSubjectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSubject(e.target.value);
  };
  const handleLevelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLevel(e.target.value);
  };
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleTagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tag = e.target.value.trim();
    setTag(tag);
  };
  const handleAddTag = () => {
    if (tag && !tags.includes(tag)) {
      setTags([...tags, tag]);
      setTag('');
    } else {
      setTag('already available');
    }
  };
  const handleResourceUpload = () => {
    // Validation and resource upload logic here
    if (title && file) {
      onResourceUpload(title, description, file, tags);
    }
  };

  return (
    <div className="container content_bg p-3 glow-btn mt-5">
      <h5 className="d-flex">Resource Upload</h5>
      <Row>
        <Col sm={6}>
          <Form.Group className="mb-3">
            <Form.Label className="d-flex">Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="e.g Chem"
              value={title}
              onChange={handleTitleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="d-flex">Description</Form.Label>
            <Form.Control
              type="text"
              value={description}
              onChange={handleDescriptionChange}
            />
          </Form.Group>
        </Col>
        <Col sm={6}>
          <Form.Group className="mb-3">
            <Form.Label className="d-flex">Subject</Form.Label>
            <Form.Select value={subject} onChange={handleSubjectChange}>
              <option>Select</option>
              <option value={"Mathematics"}>Mathematics</option>
              <option value={"Physics"}>Physics</option>
              <option value={"Chemistry"}>Chemistry</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="d-flex">Level</Form.Label>
            <Form.Select value={level} onChange={handleLevelChange}>
              <option>Select</option>
              <option value={"Form 3"}>Form 3</option>
              <option value={"Form 4"}>Form 4</option>
              <option value={"Form 5"}>Form 5</option>
              <option value={"Form 6"}>Form 6</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col sm={6}>
          <Form.Group className="mb-3">
            <Form.Label className="d-flex">File</Form.Label>
            <Form.Control type="file" onChange={handleFileChange} />
          </Form.Group>
        </Col>
        <Col sm={6}>
          <Form.Group className="mb-3">
            <Form.Label className="d-flex">Tags</Form.Label>
            <div className="d-flex">
              <Form.Control
                type="text"
                className="me-3"
                value={tag}
                onChange={handleTagChange}
              />
              <Button className="btn btn-dark" onClick={handleAddTag}>
                <FontAwesomeIcon icon={faPlus} />
              </Button>
            </div>
            <ul className="px-0 d-flex">
              {tags.length > 0 &&
                tags.map((tag: string, index: number) => {
                  return (
                    <li className="d-flex px-1" key={index}>
                      #{tag}
                    </li>
                  );
                })}
            </ul>
          </Form.Group>
        </Col>
      </Row>
      <Button
        className="btn btn-primary d-flex justify-content-end"
        onClick={handleResourceUpload}
      >
        Upload
      </Button>
    </div>
  );
};

export default ResourceUploadForm;
