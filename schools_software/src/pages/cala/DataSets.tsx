import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faComment,faTrashCan, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col, Button } from 'react-bootstrap';
import CreateDatasetModal from './CreateDatasetModal';
import { useNavigate, useParams } from 'react-router-dom';

export interface DataSetItem {
  icon: any;
  name: string;
  created: string;
}

const DataSets: React.FC = () => {
  const navigate=useNavigate()
  const params=useParams()
  console.log(params.user_id,"PARANS")
  const [modalShow, setModalShow] = useState(false);
  const dataSetItems: DataSetItem[] = [
    {
      icon: <FontAwesomeIcon icon={faDatabase} />,
      name: 'DataSet 1',
      created: '2023-07-17',
    },
    {
      icon: <FontAwesomeIcon icon={faDatabase} />,
      name: 'DataSet 2',
      created: '2023-07-16',
    },
   
  ];
 
 
  return (
    <Container className="component-margin-top">
      <div>
        <div className='d-flex'><small className='link-item cursor-pointer'>Makronexa</small> <span>/</span><small className='header'>Datasets</small></div>
      
       <h4 className='d-flex pb-2 mb-3'>Datasets</h4>
       <div className='d-flex justify-content-end mb-4'>
       <Button className="btn-primary d-flex py-2 px-4 content_bg header" onClick={() => setModalShow(true)}>
              <FontAwesomeIcon className="d-xl-block me-2 d-none" icon={faPlus} /> <span className="text-nowrap">New</span>
            </Button>
       </div>
       <Row className="dataset-item mb-3">
          <Col xs={1} className="icon-column text-start">
            
          </Col>
          <Col xs={5} className="name-column text-start">
            <strong>Name</strong>
          </Col>
          <Col xs={4} className="created-column text-start">
            <strong>Created</strong>
          </Col>
          <Col xs={1} className="chat-icon-column">
            <strong>Ask</strong>
          </Col>
          <Col xs={1} className="delete-icon-column">
           <strong>Delete</strong>
          </Col>
        </Row>
      {dataSetItems.map((item, index) => (
        <Row key={index}   className="dataset-item my-2 content_bg py-2">
          <Col xs={1} className="icon-column text-start">
            {item.icon}
          </Col>
          <Col xs={5} className="name-column text-start header cursor-pointer" onClick={() => navigate(`/${params.user_id}/datasets/${item.name}`)}>
            {item.name}
          </Col>
          <Col xs={4} className="strong<strong>Created</strong>-column text-start">
            {item.created}
          </Col>
          <Col xs={1} className="chat-icon-column">
            <FontAwesomeIcon icon={faComment} className='header cursor-pointer' />
          </Col>
          <Col xs={1} className="delete-icon-column">
            <FontAwesomeIcon icon={faTrashCan} className='text-danger cursor-pointer' />
          </Col>
        </Row>
      ))}
      </div>
      <CreateDatasetModal  show={modalShow}
        onHide={() => setModalShow(false)}/>
    </Container>
  );
};

export default DataSets;