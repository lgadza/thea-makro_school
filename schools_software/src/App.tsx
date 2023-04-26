import { useState } from 'react'
import"./styles/index.css"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'
function App() {

  return (
    <div className='App'>
    
      <NavigationBar/>
      <Footer/>
    </div>
  )
}

export default App
