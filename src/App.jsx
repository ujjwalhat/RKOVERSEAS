import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Catalogs from './pages/Catalogs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className="light text-foreground bg-background">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/catalogs" element={<Catalogs/>}/>
      </Routes>
    </main>
    </>
  )
}

export default App
