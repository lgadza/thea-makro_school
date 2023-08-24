
import React, { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import UploadFileModal from '../../components/UploadFileModal';

interface ResourceUploadFormProps {
  onResourceUpload: (title: string, description: string, file: File, tags: string[]) => void;
}

const ResourceUploadForm: React.FC<ResourceUploadFormProps> = ({ onResourceUpload }) => {
  const [title, setTitle] = useState('');
  const [level, setLevel] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [file ] = useState<File | null>(null);
  const [tags] = useState<string[]>([]);
  // const [tag, setTag] = useState<string>('');

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

  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files && e.target.files.length > 0) {
  //     setFile(e.target.files[0]);
  //   }
  // };

  // const handleTagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const tag = e.target.value.trim();
  //   setTag(tag);
  // };
  // const handleAddTag = () => {
  //   if (tag && !tags.includes(tag)) {
  //     setTags([...tags, tag]);
  //     setTag('');
  //   } else {
  //     setTag('already available');
  //   }
  // };
  const handleResourceUpload = () => {
    // Validation and resource upload logic here
    if (title && file) {
      onResourceUpload(title, description, file, tags);
    }
  };

  return (
    <div className="p-3  ms-5  mt-4">
      <h4 className="d-flex mb-4">Resource Upload</h4>
      <Row>
        <Col sm={6} md={4} >
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
        <Col sm={6} md={4}>
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
        <Col sm={6} md={8}>
          <Form.Group className="mb-3">
            {/* <Form.Label className="d-flex">File</Form.Label> */}
            {/* <Form.Control type="file" onChange={handleFileChange} /> */}
            <UploadFileModal/>
          </Form.Group>
        </Col>
        {/* <Col sm={6} md={4}>
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
        </Col> */}
      </Row>
      <div className='d-flex '>
      <button className='header content_bg' onClick={handleResourceUpload}><small>Upload</small></button>
      </div>
    </div>
  );
};

export default ResourceUploadForm;
