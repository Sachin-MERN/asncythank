
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import Navbar from './component/navbar'

import './App.css'
import USerForms from './component/USerForms'

function App() {
  

  return (
    <>
    <BrowserRouter >
      <Navbar />
      <Routes>
        <Route path='/' element={<USerForms />} />
      
      </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
