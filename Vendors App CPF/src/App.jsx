import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
//
import Layout from './Layout'
import TechnnicalData from './Pages/TechnnicalData'
import Merch from './Pages/Merch'
import PhotoBank from './Pages/PhotoBank'
import PhotoBankDeco54 from './PhotoBanks/PhotoBankDeco54'
import PhotoBankSpiritXl from './PhotoBanks/PhotoBankSpiritXl'
import PhotoBankkeys from './PhotoBanks/PhotoBankkeys'

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
      <Route path='/photo-bank/spirit-xl' element={<PhotoBankSpiritXl />} />
      <Route path='/photo-bank/keys' element={<PhotoBankkeys />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App