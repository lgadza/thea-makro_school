import"./styles/index.css"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./components/Page404.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import News from '../src/pages/news/News.jsx'
// import Students from '../src/pages/students/Students.jsx'
// import LibraryPage from './pages/library/LibraryPage.js'
// import CheckoutsPage from './pages/library/CheckoutsPage.js'
import Login from './components/Login.js'
import MssRegisterPage from './components/MssRegisterPage.js'
import StudentAccountPage from './pages/admissionsManagement/student/account/StudentAccountPage.js'
// import CalaPage from './pages/cala/CalaPage.js'
import Pages from './pages/Pages.js'
import SchoolAccountLogin from './components/SchoolAccountLogin.js'
import Page404 from './components/Page404.js'
import MakroHomePage from './pages/Home/MakroHomePage.js'
import Features from './pages/Home/Features/Features.js'
import AdmissionManagement from './pages/Home/Features/AdmissionManagement.js'
import CALAFeature from './pages/Home/Features/CALA.js'
import Makronexa from "./pages/cala/Makronexa.js"

// mss makro_school_solution
function App() {

  return (
    <div className='App'>
    <BrowserRouter>
      <Routes>
       {/* <Route path="mss/cala" element={<CalaPage/>}/> */}
       {/* <Route path="mss/news" element={<News/>}/> */}
       {/* <Route path="mss/students" element={<Students/>}/> */}
       {/* <Route path="mss/library" element={<LibraryPage/>}/> */}
       {/* <Route path="mss/checkouts" element={<CheckoutsPage/>}/> */}
        <Route path="/" element={<MakroHomePage/>}/>
        <Route path="mss/register" element={<MssRegisterPage/>}/>
        <Route path="mss/login" element={<Login/>}/>
        <Route path="mss/makro/features" element={<Features/>}/>
        <Route path="mss/makro/features/admission_management" element={<AdmissionManagement/>}/>
        <Route path="mss/makro/features/ai" element={<CALAFeature/>}/>
        <Route path="mss/:user_role/account/:user_id" element={<Pages/>}/>
       <Route path="mss/school_account/login" element={<SchoolAccountLogin/>}/>
       <Route path="mss/account/:id" element={<StudentAccountPage/>}/>
       <Route path="/ask.makronexus.com" element={<Makronexa/>}/>
       <Route path="ask" element={<Makronexa/>}/>
       <Route path='*' element={<Page404/>} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
