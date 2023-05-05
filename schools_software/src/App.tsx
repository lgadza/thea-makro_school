import { useState } from 'react'
import"./styles/index.css"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminSidebarMenu from '../src/pages/admin/Sidebar'
import Catalog from '../src/pages/catalog/Catalog.jsx'
import News from '../src/pages/news/News.jsx'


function App() {

  return (
    <div className='App'>
    <BrowserRouter>
    
      {/* <NavigationBar/> */}
      {/* <Footer/> */}
      <Routes>
        <Route path="tsss/admin" element={<AdminSidebarMenu/>}/>
       <Route path="tsss/catalog" element={<Catalog/>}/>
       <Route path="tsss/news" element={<News/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
