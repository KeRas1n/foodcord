import React, { useContext } from 'react'
import { MainContext } from '../contexts/MainContext'

export default function FoodCard({id, name, img, price, cartItem}) {
    const {setCartItems, cartItems,addToCart,removeFromCart} = useContext(MainContext)

  return (
    <div className='foodCard'>
        <div>
            <img src={img} width='150px' style={{width:"100%", height:"150px", objectFit:'cover'}}/>
        </div>
        <div className='mt-6 w-full'>
            <h1 className='text-xl font-bold font-poppins'>{name}</h1>
            <h2>{price}$</h2>
        </div>
        <div className='mt-7'>
            {cartItem
            ?
                <div className='flex gap-5 text-2xl'>
                    <button onClick={() => removeFromCart(id)}>-</button>{cartItems[id]}<button onClick={() => addToCart(id)}>+</button>
                </div>
            :
            <button className='secondary-btn' onClick={() => addToCart(id)}>Add to cart</button>
            }
            <div className='h-[32px] mt-1'>
            {cartItems[id] > 0 && !cartItem
            ?
            <div className='flex justify-center gap-5 text-2xl '>
                    <button onClick={() => removeFromCart(id)}>-</button>{cartItems[id]}<button onClick={() => addToCart(id)}>+</button>
                </div>
            :
                <span/>
            }
            </div>
            
            
        </div>
    </div>
  )
}
