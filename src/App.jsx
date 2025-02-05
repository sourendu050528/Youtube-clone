import React,{ useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router'
import Home from './pages/home/home'
import Video from './pages/video/video'


const App = () => {
  const [sidebar,setSidebar]=useState(true);
  
  
  return (
    <div>
      <Navbar setSidebar={setSidebar}/>
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar}/>}/>
        <Route path='/video/:categoryId/:videoId' element={<Video/>}/>
      </Routes>
      
    </div>
  )
}

export default App

