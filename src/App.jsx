import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import LandingScreen from './components/LandingScreen'
import LoginScreen from './components/LoginScreen'
import Profile from './components/Profile'
import SignUpScreen from './components/SignUpScreen'


function App() {

  return (
   <> 
   <Router>
     <Routes>
       <Route path='/' element={<LandingScreen></LandingScreen>}></Route>
       <Route path='/login' element={<LoginScreen></LoginScreen>}></Route>
       <Route path='/create-account' element={<SignUpScreen></SignUpScreen>}></Route>
        <Route path='/profile' element={<Profile></Profile>}></Route>
     </Routes>
   </Router>
   </>
  )
}

export default App
