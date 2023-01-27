import { useEffect, useState } from "react"
import {BrowserRouter, Routes , Route} from "react-router-dom"
import './App.css'
import Home from './pages/Home'
import Trade from "./pages/Trade"
import Footer from "./components/Footer"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import About from "./pages/About"



function App() {
  const [watchList, setWatchList] = useState([ "GOOGL", "MSFT"]);
 
  return (
  <BrowserRouter>
  
  <Routes>
    <Route path="/" element={<Home watchList={watchList}/>}/>
     <Route path="Trade" element={<Trade watchList={watchList} setWatchList={setWatchList}/>}/>
     <Route path="About" element={<About/>}/>
     <Route path="Contact" element={<Contact/>}/>
     <Route path="Services" element={<Services/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
  )
}

export default App
