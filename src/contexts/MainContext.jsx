import React, { createContext, useEffect, useState } from "react";
import { PRODUCTS } from "../DATA";


export const MainContext = createContext(null);


export const MainContextProvider = (props) => {

    const getDefaultCart = () =>{
        let cart = {}
        for(let i = 1; i < PRODUCTS.length + 1; i++){
            cart[i] = 0
        }
        return cart;
    }


    const [location, setLocation] = useState();
    const [category, setCategory] = useState('Top Products');
    const [searchParams, setSearchParams] = useState();
    const [query, setQuery] = useState('');

    const[cartItems, setCartItems] = useState(getDefaultCart())


    const [itemsInCartCount, setItemsInCartCount] = useState(0)

    useEffect(() => {

        let count = 0

        Object.keys(cartItems).map((key, index) => {
            count += cartItems[Object.keys(cartItems)[index]]
            
        })
        setItemsInCartCount(count)
        
    }, [cartItems])
    




    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    }
    

    /*const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    }
    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: newAmount}))
    }
    const getTotalAmountCart = () => {
        let totalAmount = 0

        for(const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price
            }
        }
        return totalAmount;
    }

    */
    const getTotalAmountCart = () => {
        let totalAmount = 0

        for(const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price
            }
        }
        return totalAmount;
    }

    const contextValue = {itemsInCartCount, category, setCategory, location, setLocation, query, setQuery,setCartItems, cartItems, addToCart, removeFromCart, getTotalAmountCart}
  return (
    <MainContext.Provider value={contextValue}>

        {props.children}

    </MainContext.Provider>
  )
}