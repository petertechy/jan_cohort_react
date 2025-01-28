import React from 'react'
import { Navigate, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import Navbar from './components/Navbar'
import NotFound from './Pages/NotFound'
import Register from './Pages/Register'
import UserProfile from './Pages/UserProfile'

const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis maxime beatae dicta incidunt impedit? Eos vel quas sed incidunt, error eaque perspiciatis sunt consectetur magnam! Accusantium, cupiditate. In, doloribus fuga?"/>} />
        <Route path='/sp-about_us' element={<AboutPage/>}/>
        <Route path='/about/' element={<Navigate to = "/sp-about_us" />}/>
        <Route path='/about-us' element={<Navigate to = "/sp-about_us" />}/>
        <Route path='/register' element= {<Register/>}/>
        <Route path='/register/:username' element={<UserProfile/>}/>

        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App