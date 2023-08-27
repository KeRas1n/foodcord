import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../pages/Home'
import AboutUs from '../pages/AboutUs'
import Food from '../pages/Food'
import Cart from '../pages/Cart'

export default function AppRouter() {
  return (
    <Routes>
        <Route path='/' element={<Home/>} exact/>
        <Route path='/about-us' element={<AboutUs/>} />
        <Route path='/food' element={<Food/>} />
        <Route path='/cart' element={<Cart/>} />


    </Routes>
  )
}
