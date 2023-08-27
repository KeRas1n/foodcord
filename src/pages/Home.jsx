import React, { useContext, useState } from 'react'
import FoodGirl from '../img/Group 8429.png'
import {BiRestaurant} from 'react-icons/bi'
import {TbTruckDelivery} from 'react-icons/tb'
import {ImPriceTag} from 'react-icons/im'
import { MainContext } from '../contexts/MainContext'
import useLocalStorage from '../hooks/useLocalStorage'
import { useJsApiLoader, useLoadScript } from '@react-google-maps/api'
import googlestoreImg from '../img/googlestoreImg.png'
import applestoreImg from '../img/applestoreImg.png'
import phoneImg from '../img/phone-img.png'


import { Link } from 'react-router-dom'
import PlacesAutocomplete from '../components/PlacesAutocomplete'
import FAQ from '../components/FAQ'

export default function Home() {
    const PlacesApiKey = process.env.REACT_APP_PLACES_API_KEY

    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey:PlacesApiKey,
        libraries:["places"],
    });

    const [selected, setSelected] = useState(null)


    const {location, setLocation} = useContext(MainContext)

    const [currLoc, setCurrLoc] = useLocalStorage('loc')


    const [userLocation, setUserLocation] = useState(null);

    const getUserLocation = (e) => { 
        e.preventDefault()
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                     // save the geolocation coordinates in two variables
                    const { latitude, longitude } = position.coords;

                  

                    setUserLocation({ latitude, longitude });
                },
                (error) => {
                    // display an error if we cant get the users position
                    console.error('Error getting user location:', error);
                }
            );
        }
        else {
            // display an error if not supported
            console.error('Geolocation is not supported by this browser.');
        }


    };


    function saveLocaction(location){
        setLocation(location)
        setCurrLoc(location)
    }

  return (
    <div className='mainblock'>

        <div className='m-auto w-5/6'>
            <div className='flex items-center justify-around mt-14 flex-wrap'>
                <div>
                <h1 className='text-5xl bold font-poppins'><span className='text-green-400'>Welcome</span> to <span className='text-red-500'>Foodcord</span>!</h1>
                <h1 className='text-2xl bold mt-2 font-mono'>The tastiest place in the internet</h1>

                <PlacesAutocomplete/>
                <div>
                    {/*location*/}
                </div>
                
                <div className='mt-3'>
                <Link to={'/food'}><button className='primary-btn'>Find Food</button></Link>
                <button className='secondary-btn ml-2'>Download App</button>
                </div>
                

                </div>
                <div>
                    <img width='350px' src={FoodGirl} className=''/>
                </div>

            </div>

            <div className='flex justify-center gap-20 mt-16 flex-wrap max-md:flex-col'>
                <div className='ad-block'>
                    <TbTruckDelivery size={'55px'} className='text-green-500'/>
                    <h1 className='mt-2 text-xl'><span className='text-3xl text-green-500'>Fast</span> delivery</h1>
                </div>
                <div className='ad-block'>
                    <ImPriceTag size={'55px'} className='text-green-500'/>
                    <h1 className='mt-2 text-xl'><span className='text-3xl text-green-500'>Cheap</span> prices</h1>
                </div>
                <div className='ad-block'>
                    <BiRestaurant size={'55px'} className='text-green-500'/>
                    <h1 className='mt-2 text-xl'> <span className='text-3xl text-green-500'>>100</span> restaurants</h1>
                </div>
            </div>
            

        </div>

        <div className=' mt-40 m-10 px-5 pt-5 rounded-lg bg-green-500'>
            <div className='flex items-center justify-center flex-wrap dark:text-white'>
                <div>
                    <h1 className='text-6xl'>Your favourite food,<br></br> delivered fast.</h1>
                    <h2 className='text-xl mt-3'>Download our new app on your devices!</h2>
                        <div className='flex justify-start mt-5'> 
                            <img width={'153px'} src={applestoreImg}/> <img  src={googlestoreImg}/>
                        </div>
                </div>

                <div>
                    <img width={"400px"} src={phoneImg} />
                </div>
            </div>
            
        </div>

        <FAQ/>
    </div>
  )
}

