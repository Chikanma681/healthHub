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
import BookingPage from './screens/BookingPage'
import Features from './screens/Features'
import { data } from 'browserslist'
import Vaccines from './screens/Vaccines'
// import CalgaryExplo from './components/Animation'

function App() {
  const [count, setCount] = useState(0)
  const csvData = `TYPE,NAME,ADDRESS,COMM_CODE,LAT,LONG
  Hospital,Alberta Children's Hospital,2888 Shaganappi Trail NW,UOC,-114.1479576,51.0745599
  PHS Clinic,East Calgary Health Centre,4715 8 AV SE,FLN,-113.9672201,51.0450485
  PHS Clinic,South Calgary Health Centre,31 Sunpark Plaza SE,SDC,-114.058575,50.9025753
  PHS Clinic,Northwest Community Health Centre,109 1829 Ranchlands BV NW,RAN,-114.1971615,51.1233336
  Hospital,Rockyview General Hospital,7007 - 14 ST SW,EAG,-114.0963207,50.9918289
  PHS Clinic,North Hill Community Health Centre,1527 19 ST NW,HOU,-114.1065071,51.0653216
  PHS Clinic,Thornhill Community Health Centre,6617 Centre ST NW,HUN,-114.0639146,51.1121862
  PHS Clinic,Sheldon M. Chumir Health Centre,1213 - 4 ST SW,BLN,-114.0721296,51.0411634
  Hospital,South Health Campus,4448 FRONT ST SE,SET,-113.9517038,50.8821019
  PHS Clinic,Acadia Community Health Centre,151 - 86 AV SE,ACA,-114.0709401,50.975072
  Hospital,Peter Lougheed Medical Centre,3500 - 26 AV NE,SUN,-113.9839435,51.0790163
  PHS Clinic,Village Square Community Health Centre,2623 - 56 ST NE,PIN,-113.9535557,51.0755389
  Hospital,Foothills Hospital,1403 - 29 ST NW,STA,-114.1321766,51.0641829
  PHS Clinic,Shaganappi Complex Health Centre,3415 - 8 AV SW,SPR,-114.1368419,51.0448871`;

  // Split the CSV data into rows
  const rows = csvData.split('\n');

  // Extract headers
  const headers = rows[0].split(',');

  // Initialize an array to store the objects
  const dataList = [];

  // Parse each row (starting from index 1 as index 0 contains headers)
  for (let i = 1; i < rows.length; i++) {
    const values = rows[i].split(',');
    const obj = {};
    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = values[j];
    }
    dataList.push(obj);
  }
  return (
    <>
<Routes>
<Route path="/booking" element={<BookingPage hospitals={dataList}/>} />
<Route path="/" element={<HomeScreen />} />
<Route path="/login" element={<Login />} />
<Route path="/signup" element={<Signup/>}/>
<Route path="/maps" element={<Maps/>} />
<Route path="/features" element={<Features/>} />
<Route path="/vaccines" element={<Vaccines/>}/>
</Routes>

    </>
  )
}

export default App
