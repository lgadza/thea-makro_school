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
import StudentAccountPage from './pages/admissionsManagement/student/account/StudentAccountPage.js'
import CalaPage from './pages/cala/CalaPage.js'
import ResourceDetails from './pages/cala/SourceDetails.js'
import Pages from './pages/Pages.js'

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
        <Route path="mss/pages" element={<Pages/>}/>
        <Route path="mss/resource/:id" element={<ResourceDetails/>}/>
       <Route path="mss/catalog" element={<Catalog/>}/>
       <Route path="mss/cala" element={<CalaPage/>}/>
       <Route path="mss/news" element={<News/>}/>
       <Route path="mss/students" element={<Students/>}/>
       <Route path="mss/library" element={<LibraryPage/>}/>
       <Route path="mss/checkouts" element={<CheckoutsPage/>}/>
       <Route path="mss/student/account/:id" element={<StudentAccountPage/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
