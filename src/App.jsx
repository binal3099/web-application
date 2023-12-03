import React from 'react'
import Adddata from './Component/AddData/adddata'
import { Route, Routes } from 'react-router'
import Viewdata from './Component/ViewData/Viewdata'
import Editdata from './Component/Editdata/Editdata'
import Header from './Component/Header/Header'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Adddata />} />
        <Route path='/View' element={<Viewdata />} />
        <Route path='/edit/:id' element={<Editdata />} />
      </Routes>
    </>
  )
}

export default App