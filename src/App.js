import { Routes, Route } from "react-router-dom"
import Home from "./Components/Home"
import About from "./Components/About"
import Content from './Components/Content'
function App() {
  return (
    <div className="App">
      <Home/>
      <Content/>
      <Routes>
        <Route path="about" element={ <About/> } />
      </Routes>
    </div>
  )
}

export default App