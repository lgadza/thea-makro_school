


import { faBars, faHome, faUserGraduate, faLevelUpAlt, faChalkboardTeacher, faUsers, faBook, faBed, faFileAlt,faInfo, faIdCard,faBookOpen,faClipboard, faMagnifyingGlass, faSitemap, faQuestionCircle, faBoltLightning } from '@fortawesome/free-solid-svg-icons';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, FormControl, Button, Card } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col, ListGroup,Nav } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
// import logo from "../../../assets/TM logo.png"
import NavigationBar from '../../components/NavigationBar';

const LibraryPage = ()=> {
  const [studentOpen, setStudentOpen] = useState(false);

  const toggleStudent = () => {
    setStudentOpen(!studentOpen);
  }
  const [subjectsOpen, setSubjectsOpen] = useState(false);

  const toggleSubjects = () => {
    setSubjectsOpen(!subjectsOpen);
  }
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
   const [searchResults, setSearchResults] = useState([]);

  const handleAddBook = () => {
//     // Handle adding a new book to the catalog
//     // You can capture book details through form inputs and add them to the books array
  };

  const handleSearch = () => {
//     // Filter the books array based on the search term
     const results = books.filter(
       (book) =>
         book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
         book.isbn.toLowerCase().includes(searchTerm.toLowerCase()) ||
         book.author.toLowerCase().includes(searchTerm.toLowerCase())
     );

     setSearchResults(results);
   };


  return (
      <Container>
        <NavigationBar/>
        <Row>
          <Col md={3}>
          <div className="sidebar">
            
            <div className="sidebar-menu">
            <Nav className="d-flex flex-column align-items-start">
            <Nav.Item>
                 <Nav.Link onClick={toggleMenu}>
                   <FontAwesomeIcon icon={faHome} className="me-2" />
                   Schedule
                 </Nav.Link>
               </Nav.Item>
           
               <Link to="/" className="nav-link" onClick={toggleMenu}>
                 <FontAwesomeIcon icon={faUsers} className="me-2" />
                 Class Groups
               </Link>
               <Nav.Item>
                 <Nav.Link onClick={toggleMenu}>
                   <FontAwesomeIcon icon={faSitemap} className="me-2" />
                   User Plans
                 </Nav.Link>
               </Nav.Item>
               
             
               <Nav.Item>
                 <Nav.Link onClick={toggleMenu}>
                   <Link to="librarians"><FontAwesomeIcon icon={faBook} className="me-2" />
                   <span>Statements</span></Link>
                 </Nav.Link>
               </Nav.Item>
               <Nav.Item>
                 <Nav.Link onClick={toggleMenu}>
                 <Link to="/hostel">
                    <FontAwesomeIcon icon={faBookOpen} className="me-2" />
                    Privacy Preferences
                  </Link>
                 </Nav.Link>
               </Nav.Item>
               <Nav.Item>
                 <Nav.Link onClick={toggleMenu}>
                 <Link to="/clubs">
                    <FontAwesomeIcon icon={faQuestionCircle} className="me-2" />
                    TSSSweb Preferences
                  </Link>
                 </Nav.Link>
               </Nav.Item>
               </Nav>
              
            </div>
    </div>
          </Col>
          <Col md={9}>
            

<Row>
 
  
     <div>

       <form onSubmit={handleAddBook}>
         {/* Add input fields for book details */}
         <input type="text" placeholder="Title" />
         <input type="text" placeholder="Author" />
         <input type="text" placeholder="ISBN" />
         <button type="submit">Add Book</button>
       </form>

       <h2>Search</h2>

       <input
         type="text"
         placeholder="Search by Title, ISBN, or Author"
         value={searchTerm}
         onChange={(e) => setSearchTerm(e.target.value)}
       />
       <button onClick={handleSearch}>Search</button>

       <h2>Book Catalog</h2>

       {searchResults.length === 0 ? (
         <p>No books found.</p>
       ) : (
         <ul>
           {searchResults.map((book, index) => (
             <li key={index}>
               <h3>{book.title}</h3>
               <p>Author: {book.author}</p>
               {/* Display other book details */}
             </li>
           ))}
         </ul>
       )}
     </div>
   
</Row>

          </Col>
        </Row>
      </Container>
  );
};
export default LibraryPage