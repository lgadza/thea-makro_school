import { useState } from 'react'
import"./styles/index.css"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminSidebarMenu from '../src/pages/admin/AdminSidebarMenu.js'
import Catalog from '../src/pages/catalog/Catalog'
import News from '../src/pages/news/News.jsx'
import Students from '../src/pages/students/Students.jsx'
import LibraryPage from './pages/library/LibraryPage.js'
import CheckoutsPage from './pages/library/CheckoutsPage.js'
import Login from './components/Login.js'
import ApplicationPage from './pages/admissionsManagement/student/ApplicationPage'
import StudentNavigationbar from './pages/admissionsManagement/student/StudentSideBar.js'
import StudentAccountPage from './pages/admissionsManagement/student/account/StudentAccountPage.js'


function App() {

  return (
    <div className='App'>
    <BrowserRouter>
    
      {/* <NavigationBar/> */}
      {/* <Footer/> */}
      <Routes>
        <Route path="tsss/fhs/application" element={<ApplicationPage/>}/>
        <Route path="tsss/fhs/login" element={<Login/>}/>
        <Route path="tsss/admin" element={<AdminSidebarMenu/>}/>
       <Route path="tsss/catalog" element={<Catalog/>}/>
       <Route path="tsss/news" element={<News/>}/>
       <Route path="tsss/students" element={<Students/>}/>
       <Route path="tsss/library" element={<LibraryPage/>}/>
       <Route path="tsss/checkouts" element={<CheckoutsPage/>}/>
       <Route path="tsss/student/account" element={<StudentAccountPage/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
