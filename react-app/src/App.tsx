import * as bootstrap from 'bootstrap'
import Home from './Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Pages/About'
import NoPage from './Pages/NoPage'
import NavMain from './Components/NavMain'

export default function App() {
  return (
    <>
    <NavMain />
    <main role="main" className="container">

    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>

    </main>
    </>
 )
 }



