import Home from "./pages/Home"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Steps from "./pages/Steps"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/steps" element={<Steps />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
