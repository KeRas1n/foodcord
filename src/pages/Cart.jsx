import React, { useContext } from 'react'
import { MainContext } from '../contexts/MainContext'
import FoodCard from '../components/FoodCard'
import { Link, Outlet } from 'react-router-dom'
import { PRODUCTS } from '../DATA'
import PlacesAutocomplete from '../components/PlacesAutocomplete'

export default function Cart() {
    const {itemsInCartCount, cartItems, location, getTotalAmountCart} = useContext(MainContext)
    console.log(cartItems)
  return (
    <div className='ml-4 bg-gray-800 text-white 
    dark:bg-white dark:text-black w-full h-screen pl-12 max-md:pl-0 max-md:ml-0'>
        <div className='grid grid-cols-2i1'>
            <div className='bg-gray-800 p-5 dark:bg-gray-200'>
                <div className='p-1'>
                    <h1 className='font-bold font-poppins  text-4xl'>Checkout</h1>
                </div>
                
                <div className='flex mt-5 flex-col mt-2 gap-4 overflow-scroll overflow-x-hidden h-screen'>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-3xl'>Contact information</h1>
                    <input className='myInput rounded-lg' placeholder='Email'/>
                    <h1 className='text-3xl'>Shipping address</h1>
                    <input className='myInput rounded-lg' placeholder='Name'/>

                    <input className='myInput rounded-lg' placeholder='Last Name'/>
                    
                    <PlacesAutocomplete className=" mt-0"/>
                    <input className='myInput rounded-lg' placeholder='Address'/>

                    <input className='myInput rounded-lg' placeholder='Zip code'/>

                    <button className='primary-btn text-xl'>Continue</button>
                </div>
                


                </div>
            </div>
            <div className='bg-gray-700 dark:bg-gray-300'>

            
            <div className='p-5 '>
                <h1 className='text-3xl font-bold font-poppins p-1 mt-5'>
                    Cart
                    
                    </h1>
                <div className='flex mt-10 gap-4 flex-wrap h-screen overflow-scroll overflow-x-hidden justify-center'>

                    {itemsInCartCount > 0 > 0 ?
                        PRODUCTS.map((product) => {
                            if(cartItems[product.id] !== 0){
                                return <FoodCard cartItem img = {product.img} price={product.price} name={product.name} key={product.id} id={product.id}/>
                            }
                            })
                        :
                        <div className='flex flex-col items-center'>
                            <h1 className='text-4xl'>No items</h1>
                            <Link to={'/food'}><button className='primary-btn text-2xl'>Back to food</button></Link>
                        </div>
                        }

                    <Outlet/>
                </div>
                
            </div>
            
            
                    
            
        </div>
        <div className='text-white bg-green-500 p-7 text-4xl fixed bottom-0 max-md:bottom-[64px] w-full'>
                        <h1>SUBTOTAL: {getTotalAmountCart()}$</h1>
                    </div>
            </div>
    </div>
  )
}
