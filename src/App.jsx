import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import HomePage from './pages/HomePage'
import AboutUs from './pages/AboutUs'
import ProductsList from './pages/ProductsList'
import DefaultLayout from './layouts/DefaultLayout'
import ProductDetail from "./pages/ProductDetail"

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/prodotti" element={<ProductsList />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/chisiamo" element={<AboutUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App