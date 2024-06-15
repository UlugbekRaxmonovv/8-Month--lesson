
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import { Routes,Route } from 'react-router-dom'
function App() {

  return (
    <>
   <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/contact" element={<Contact/>} />
  </Routes>
     
    </>
  )
}

export default App
