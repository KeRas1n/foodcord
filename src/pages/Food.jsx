import React, { useContext, useEffect, useMemo, useState } from 'react'
import {BiSearch} from 'react-icons/bi'
import {IoIosArrowDropdown} from 'react-icons/io'
import burger from '../img/1.png'
import { CATEGORIES, PRODUCTS } from '../DATA'
import FoodCard from '../components/FoodCard'
import CategoryCard from '../components/CategoryCard'
import { Link, Outlet, useSearchParams } from 'react-router-dom'
import { MainContext } from '../contexts/MainContext'



export default function Food() {
    const {getTotalAmountCart,itemsInCartCount,category, setCategory, location, query, setQuery, setCartItems, cartItems} = useContext(MainContext)
    const DEFAULTCATEGORY = "Top Products"

       //by category
    const [searchParams, setSearchParams] = useSearchParams();

    const [sortedResult, setSortedResult] = useState([])

    const [categoryMenu, setCategoryMenu] = useState(false)

    useEffect(() => {
        if(category && query){
            setSearchParams({category:category, query:query})

        }

    }, [category, query])

    useEffect(() => {
        if(category){
            setSearchParams({category:category})
        }
        else{
            setSearchParams({category:"Top Products"})
        }

    }, [])

    const changeCategory = useMemo(
        () => setCategory(searchParams.get('category')),
        
     [searchParams.get('category')]
     )

    

    function sort(category){
        setSearchParams({category:category, query:query})

    }

    function resetFilters(){
        setSearchParams({category:DEFAULTCATEGORY, query:''})
        setQuery('')
    }

    useEffect(() => {
        const filtered = PRODUCTS.filter((item) => item.category.find((el) =>{return el == category}) && item.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
        setSortedResult(filtered)
    }, [category, query])


    function openCategoriesMenu(){
        setCategoryMenu(!categoryMenu)
    }

  return (
    <div className='ml-4 bg-gray-800 text-white 
    dark:bg-white dark:text-black w-full h-screen pl-12 max-md:pl-0 max-md:ml-0'>
        <div className='grid grid-cols-2i1 max-md:flex max-md:flex-col'>
            <div className='bg-gray-800 p-5 dark:bg-gray-200'>
                <div className='p-1'>
                    <h1 className='font-bold font-poppins  text-4xl'>Food</h1>
                    <span><Link className='link' to={'/'}>{location}</Link></span>
                </div>
                <form className='mt-5 flex'>
                    <input value={query} onChange={(e) => setQuery(e.target.value)} className='myInput' type='text' placeholder='Search'/>
                    <button className='hover:text-green-500 rounded-r-lg border bg-gray-700 border-none transition-all duration-200 ease-linear
                    p-2 shadow-lg dark:text-black dark:bg-gray-50 dark:hover:text-green-500
                    '><BiSearch size={'25px'}/></button>
                </form>

                <h1 className='font-bold font-poppins p-1 mt-5 text-2xl max-md:flex max-md:items-center gap-2 max-md:justify-center'><span>Category</span> <button onClick={openCategoriesMenu} className='md:hidden'><IoIosArrowDropdown/></button></h1>
                
                
                <div className={'flex flex-col mt-2 gap-4 overflow-scroll overflow-x-hidden max-md:h-full h-screen transition-all duration-100 ' + (categoryMenu ? ("max-md:scale-100") : ("max-md:hidden"))}>

                {
                    CATEGORIES.map(category =>(
                        <CategoryCard key={category.id} name={category.name} id={category.id} img={category.img} 
                        
                        sort={sort}
                        />
                    ))
                }
                

                <button className='primary-btn' onClick={resetFilters}>Reset Filters</button>
                </div>

                
            </div>


            <div className='bg-gray-700 dark:bg-gray-300'>

            <div >
                <div className='p-5'>
                <h1 className='text-3xl font-bold font-poppins p-1 mt-5'>
                    {category}
                    
                </h1>
                </div>
                
                <div className='flex mt-10 gap-4 max-md:gap-2 flex-wrap h-screen overflow-scroll overflow-x-hidden justify-center'>

                    {sortedResult.length > 0 ?
                        sortedResult.map(product => (
                            <FoodCard key = {product.id} id = {product.id} name = {product.name} price = {product.price} img = {product.img} />

                        )  )
                        :
                        <h1 className='text-4xl'>No results</h1>
                    }

                    <Outlet/>
                </div>
                
            </div>
            {itemsInCartCount > 0
                    ?
                    <div className='text-white bg-green-500 p-5 text-4xl fixed bottom-0 max-md:bottom-[64px] w-full'>
                        <Link to={'/cart'}><button className='primary-btn'>GO TO CART </button></Link>
                        <span> {getTotalAmountCart()}</span>
                    </div>
                    :
                    <span/>
                }
            </div>
            
                    
            
        </div>
        
    </div>
  )
}
