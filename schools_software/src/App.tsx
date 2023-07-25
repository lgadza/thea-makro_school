import { useState } from 'react'
import"./styles/index.css"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminSidebarMenu from './components/MainSidebar.js'
import Catalog from '../src/pages/catalog/Catalog'
import News from '../src/pages/news/News.jsx'
import Students from '../src/pages/students/Students.jsx'
import LibraryPage from './pages/library/LibraryPage.js'
import CheckoutsPage from './pages/library/CheckoutsPage.js'
import Login from './components/Login.js'
import MssRegisterPage from './pages/admissionsManagement/student/MssRegisterPage.js'
import StudentNavigationbar from './pages/admissionsManagement/student/StudentSideBar.js'
import AdmissionFormPage from './pages/admin/AdmissionFormPage.js'
import AdmissionCandidatesPage from './pages/admin/AdmissionCandidatesPage.js'
import AdmissionCandidateDetails from './pages/admin/AdmissionCandidateDetails.js'
import StudentAccountPage from './pages/admissionsManagement/student/account/StudentAccountPage.js'

// mss makro_school_solution
function App() {

  return (
    <div className='App'>
    <BrowserRouter>
    
      {/* <NavigationBar/> */}
      {/* <Footer/> */}
      <Routes>
        <Route path="mss/register" element={<MssRegisterPage/>}/>
        <Route path="mss/login" element={<Login/>}/>
        {/* <Route path="mss/admin" element={<AdminSidebarMenu/>}/> */}
        <Route path="mss/admin/admission/form" element={<AdmissionFormPage/>}/>
       <Route path="mss/catalog" element={<Catalog/>}/>
       <Route path="mss/news" element={<News/>}/>
       <Route path="mss/students" element={<Students/>}/>
       <Route path="mss/library" element={<LibraryPage/>}/>
       <Route path="mss/checkouts" element={<CheckoutsPage/>}/>
       <Route path="mss/student/account/louis-gadza" element={<StudentAccountPage/>}/>
       <Route path="mss/admin/admission/candidates/candidate-details" element={<AdmissionCandidateDetails/>}/>
       <Route path="mss/admin/admission/candidates" element={<AdmissionCandidatesPage/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
