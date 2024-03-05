import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
//
import Layout from './Layout'
import TechnnicalData from './Pages/TechnnicalData'
import Merch from './Pages/Merch'
import PhotoBank from './Pages/PhotoBank'
import PhotoBankDeco54 from './PhotoBanks/PhotoBankDeco54'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}></Route>
      <Route path='/technnical-data' element={<TechnnicalData />}/>
      <Route path='/photo-bank' element={<PhotoBank />}/>
      <Route path='/merch' element={<Merch />}/>

      //PHOTO BANKS
      
      <Route path='/photo-bank/deco-54' element={<PhotoBankDeco54 />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App