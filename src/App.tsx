import { useState } from "react"
import {BrowserRouter, Routes , Route} from "react-router-dom"
import './App.css'
import Home from './pages/Home'
import Trade from "./pages/Trade"
import Footer from "./components/Footer"

function App() {
  const [watchList, setWatchList] = useState(["IBM", "GOOGL", "MSFT"]);

  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home watchList={watchList}/>}/>
    <Route path="Trade" element={<Trade watchList={watchList} setWatchList={setWatchList}/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
  )
}

export default App
