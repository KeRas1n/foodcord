import React, { useContext } from 'react'
import { MainContext } from '../contexts/MainContext'

export default function CategoryCard({id, img, name, sort}) {
    const {category} = useContext(MainContext)
  return (
    <div 
    className={category === name ? 'categoryCard categoryActive' : 'categoryCard'} 
    onClick={() => sort(name)}>
        <img src={img} width='80px' height="80px"/>
        <h1 className='font-bold font-poppins'>{name}</h1>
    </div>
  )
}
