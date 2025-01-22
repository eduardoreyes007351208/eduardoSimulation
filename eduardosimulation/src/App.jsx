import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Project from './routes/Project'
import Home from './routes/Home'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/project/:id' element={<Project />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
