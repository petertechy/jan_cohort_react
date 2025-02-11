import React from 'react'
import { Navigate, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import Navbar from './components/Navbar'
import NotFound from './Pages/NotFound'
import Register from './Pages/Register'
import UserProfile from './Pages/UserProfile'
import Dashboard from './Pages/Dashboard'
import LandingPage from './components/LandingPage'
import Settings from './Pages/Settings'
import Effect from './Pages/Effect'
import MakeRequest from './Pages/MakeRequest'
import FormikPage from './Pages/FormikPage'
import Contact from './Pages/Contact'
import Services from './Pages/Services'
import SignUp from './Pages/SignUp'
import SignIn from './Pages/SignIn'

const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis maxime beatae dicta incidunt impedit? Eos vel quas sed incidunt, error eaque perspiciatis sunt consectetur magnam! Accusantium, cupiditate. In, doloribus fuga?"/>} />
        <Route path='/sp-about_us' element={<AboutPage/>}/>
        <Route path='/about' element={<Navigate to = "/sp-about_us" />}/>
        <Route path='/about-us' element={<Navigate to = "/sp-about_us" />}/>
        <Route path='/register' element= {<Register/>}/>
        {/* <Route path='/register/:username' element={<UserProfile/>}/> */}
        <Route path='effect' element={<Effect/>}/>
        <Route path='make-request' element={<MakeRequest/>}/>
        <Route path="formik-form" element={<FormikPage/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="services" element={<Services/>}/>
        <Route path="signup" element={<SignUp/>}/>
        <Route path="signin" element={<SignIn/>}/>



        <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<LandingPage />} /> 
        <Route path="/dashboard/profile/:username" element={<UserProfile/>}/>
        <Route path="/dashboard/settings" element={<Settings/>}/>

      </Route>




        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App