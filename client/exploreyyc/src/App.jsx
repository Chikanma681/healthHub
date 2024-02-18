import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import HomeScreen from './screens/HomeScreen'
import Header from './components/Header'
import { Route, Routes, Navigate, Router } from "react-router-dom";
import Animation from './components/Animation'
import HomeScreen from './screens/HomeScreen'
import Login from './screens/Login'
import Signup from './screens/Signup'
import Maps from './screens/Maps'
// import CalgaryExplo from './components/Animation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Routes>
<Route path="/" element={<HomeScreen />} />
<Route path="/login" element={<Login />} />
<Route path="/signup" element={<Signup/>}/>
<Route path="/find" element={<Maps/>} />
</Routes>

    </>
  )
}

export default App
