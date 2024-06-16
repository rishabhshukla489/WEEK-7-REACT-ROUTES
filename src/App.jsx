import {BrowserRouter, Routes,Route, useNavigate} from "react-router-dom"
import './App.css'
import { Dashboard } from "./components/dashboard"
import { Landing } from "./components/landing"

function App() {
  
  return(
    <BrowserRouter>
    <Appbar></Appbar>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/" element={<Landing/>}></Route>
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
