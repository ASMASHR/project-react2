import { useState } from 'react'
import './App.css'
import Navbar from "./components/navbar/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
function App() {
  const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
          <div className="main">
          <Navbar/>

              <Routes>
                    <Route path='/' exact>
                    </Route>
              </Routes>

      </div>
      </BrowserRouter>
  )
}

export default App
