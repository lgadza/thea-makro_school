import { useState } from 'react'
import"./styles/index.css"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./components/Page404.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import News from '../src/pages/news/News.jsx'
import Students from '../src/pages/students/Students.jsx'
import LibraryPage from './pages/library/LibraryPage.js'
import CheckoutsPage from './pages/library/CheckoutsPage.js'
import Login from './components/Login.js'
import MssRegisterPage from './pages/admissionsManagement/student/MssRegisterPage.js'
import StudentAccountPage from './pages/admissionsManagement/student/account/StudentAccountPage.js'
import CalaPage from './pages/cala/CalaPage.js'
import Pages from './pages/Pages.js'
import SchoolAccountLogin from './components/SchoolAccountLogin.js'
import Page404 from './components/Page404.js'

// mss makro_school_solution
function App() {

  return (
    <div className='App'>
    <BrowserRouter>
      <Routes>
        <Route path="mss/register" element={<MssRegisterPage/>}/>
        <Route path="mss/login" element={<Login/>}/>
        <Route path="mss/:user_role/account/:user_id" element={<Pages/>}/>
       <Route path="mss/school_account/login" element={<SchoolAccountLogin/>}/>
       <Route path="mss/cala" element={<CalaPage/>}/>
       <Route path="mss/news" element={<News/>}/>
       <Route path="mss/students" element={<Students/>}/>
       <Route path="mss/library" element={<LibraryPage/>}/>
       <Route path="mss/checkouts" element={<CheckoutsPage/>}/>
       <Route path="mss/account/:id" element={<StudentAccountPage/>}/>
       <Route path='*' element={<Page404/>} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
