import { useState } from 'react'
import {Routes,Route} from "react-router-dom"


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
        <Route path = "/" element = {<h1>Home Page</h1>}></Route>
        <Route path = "/counter" element = {<h1>counter Page</h1>}></Route>
        <Route path = "/stopwatch" element = {<h1>stop watch</h1>}></Route>
        <Route path = "*" element = {<h1>No  Page Available</h1>}></Route>

      </Routes>
    </div>
  )
}

export default App
