import { useState } from 'react'
import"./styles/index.css"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminSidebarMenu from './components/pages/admin/Sidebar'
function App() {

  return (
    <div className='App'>
    <BrowserRouter>
    
      {/* <NavigationBar/>
      <Footer/> */}
      <Routes>
        <Route path="tsss/admin" element={<AdminSidebarMenu/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
