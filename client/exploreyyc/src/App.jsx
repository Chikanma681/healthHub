import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import HomeScreen from './screens/HomeScreen'
import Header from './components/Header'
import Animation from './components/Animation'
import HomeScreen from './screens/HomeScreen'
import Login from './screens/Login'
import Signup from './screens/Signup'
// import CalgaryExplo from './components/Animation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Signup/>
    {/* <Login/> */}
    {/* <HomeScreen/> */}
    {/* <Header/> 
    <Animation/> */}
    </>
  )
}

export default App
