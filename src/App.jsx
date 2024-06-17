import {BrowserRouter, Routes,Route, useNavigate} from "react-router-dom"
import { lazy } from "react"
import { Suspense } from "react"
import './App.css'
// import { Dashboard } from "./components/dashboard"
// import { Landing } from "./components/landing"

const  Dashboard = lazy(()=>import('./components/dashboard'))
const  Landing  = lazy(()=>import('./components/landing'))

function App() {
  
  return(
    <BrowserRouter>
    <Appbar></Appbar>
    
      <Routes>
        <Route path="/dashboard" element={<Suspense fallback={<div>Loading...</div>}><Dashboard/></Suspense>}></Route>
        <Route path="/" element={<Suspense fallback={<div>Loading...</div>}><Landing/></Suspense>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
function Appbar(){
  const navigate=useNavigate();
  return (
    <div>
      <div style={{background:"black", color:"white"}}>this is  a top bar</div>
      <button onClick={()=>{
        navigate("/")
      }}>Landing</button>
      <button onClick={()=>{navigate("/dashboard") }}>Dashboard</button></div>)
}

export default App
