import Home from "./components/Home/Home"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      {/* Navbar */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Other routes and authenticated routes */}
      </Routes>
    </BrowserRouter>
  )
}

export default App;
