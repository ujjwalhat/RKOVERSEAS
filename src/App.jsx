import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className="light text-foreground bg-background">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/products" element={<Products/>}/>
      </Routes>
    </main>
    </>
  )
}

export default App
