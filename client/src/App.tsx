import { Route, Routes } from 'react-router-dom'
import Landing from './routes/Landing'
import Home from './routes/Home'
import './App.css'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='home' element={<Home />} />
    </Routes>
  )
}

export default App
