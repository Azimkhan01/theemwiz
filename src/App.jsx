import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import Base from './pages/Base'
import Home from './pages/Home'
import Lenis from '@studio-freight/lenis'
function App() {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      // Optional: Cleanup
      lenis.destroy()
    }
  }, [])

  return (
    <>
     <Router>
      <Routes>
          <Route path='/' element={<Base><Home/></Base>}   />
      </Routes>
     </Router> 
    </>
  )
}

export default App
