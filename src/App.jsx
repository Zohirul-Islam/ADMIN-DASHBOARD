import React from 'react'
import { Route, Routes } from 'react-router-dom'
import OverviewPage from './pages/OverviewPage'
import ProductPage from './pages/ProductPage'

function App() {
  return (
    <div className='flex h-screen bg-gray-900 text-gray-100 overflow-hidden'>
      <Routes>
        <Route path='/' element ={<OverviewPage/>}/>
        <Route path='/product' element ={<ProductPage/>}/>
      </Routes>
    </div>
  )
}

export default App