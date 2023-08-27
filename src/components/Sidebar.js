import React, { useContext } from 'react'
import {FaHome, FaQuestion, FaDownload, FaShoppingCart} from 'react-icons/fa'
import {IoFastFood} from 'react-icons/io5'
import {MdDarkMode, MdLightMode} from 'react-icons/md'
import useDarkMode from '../hooks/useDarkMode'
import { NavLink } from 'react-router-dom'
import { MainContext } from '../contexts/MainContext'

export default function Sidebar() {
    const [darkTheme, setDarkTheme] = useDarkMode();
    const handleMode = () => setDarkTheme(!darkTheme);

    const {itemsInCartCount} = useContext(MainContext)


  return (
    <>
    <div className=' max-md:hidden fixed top-0 left-0 h-full w-16 m-0 flex flex-col items-center bg-gray-900 text-white shadow-lg
    dark:bg-white transition-all duration-100 ease-linear
    '>
        <NavLink to='/'><SideBarIcon icon={<FaHome size = "28"/>} text={"Home"} /></NavLink>
        <NavLink to='/food'><SideBarIcon icon={<IoFastFood size = "28"/>} text={"Food"} /></NavLink>
        <NavLink to='/cart'><SideBarIcon icon={<FaShoppingCart size = "28"/>} text={"Cart"} cart itemsInCartCount = {itemsInCartCount} /></NavLink>
        {/*<NavLink to='about-us'><SideBarIcon icon={<FaQuestion size = "28"/>} text={"Why we"} /></NavLink>*/}
        <SideBarIcon icon={<FaDownload size = "28"/>} text={"Download our app"} />
        <hr className='h-px my-3 bg-gray-200 border-0 m-auto w-6 dark:bg-gray-700'/>
        {darkTheme
        ?
            <SideBarIcon icon={<MdDarkMode size = "28"/>} text={"Change Theme"} onClick={handleMode} />
        :
            <SideBarIcon icon={<MdLightMode size = "28"/>} text={"Change Theme"} onClick={handleMode} />
        }
        
    </div>

    <div className='bg-gray-900 fixed bottom-0 w-full md:hidden '>
        <div className='flex justify-center items-center gap-5'>
        <NavLink to='/'><SideBarIcon icon={<FaHome size = "28"/>} text={"Home"} mobile /></NavLink>
        <NavLink to='/food'><SideBarIcon icon={<IoFastFood size = "28"/>} text={"Food"} mobile /></NavLink>
        <NavLink to='/cart'><SideBarIcon icon={<FaShoppingCart size = "28"/>} text={"Cart"} mobile cart itemsInCartCount = {itemsInCartCount} /></NavLink>

        <SideBarIcon icon={<FaDownload size = "28"/>} text={"Download our app"} mobile />
        {darkTheme
        ?
            <SideBarIcon icon={<MdDarkMode size = "28"/>} text={"Change Theme"} onClick={handleMode} mobile />
        :
            <SideBarIcon icon={<MdLightMode size = "28"/>} text={"Change Theme"} onClick={handleMode} mobile />
        }
        </div>

    </div>

    </>
  )
}

const SideBarIcon = ({ icon, text = 'tooltip 💡', onClick, cart, itemsInCartCount, mobile }) => (
    
    <div className='sidebar-icon group' onClick={onClick}>
        {mobile ?
            <span/>
            :
            <>
            <div className='sidebar-icon-arrow group-hover:scale-100'>

            </div>
            <span className='sidebar-tooltip  group-hover:scale-100'>
            {text}
        </span>
        </>
            
        }
        
        <div className='active:mt-5 transition-all ease-linear group-active:mt-5'>
        {icon}
        </div>
        
        {cart && itemsInCartCount
        ?
        <div className='text-white bg-green-700 rounded-xl w-6 h-6 text-center fixed mt-10 ml-7'>{itemsInCartCount}</div>
        :
        <span></span>
    
        }
    </div>
);
