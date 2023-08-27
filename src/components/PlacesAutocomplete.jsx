import React, { useContext } from 'react'
import usePlacesAutocomplete, {getGeocode, getLatLng} from 'use-places-autocomplete'
import { useJsApiLoader, useLoadScript } from '@react-google-maps/api'

import {
	Combobox,
	ComboboxInput,
	ComboboxPopover,
	ComboboxList,
	ComboboxOption,
	ComboboxOptionText,
} from "@reach/combobox";

import "@reach/combobox/styles.css";
import { MainContext } from '../contexts/MainContext';
import { BsFillGeoAltFill } from 'react-icons/bs';

export default function PlacesAutocomplete() {
    const {location, setLocation} = useContext(MainContext)
    
    const{
        ready,
        value,
        setValue,
        suggestions:{status, data}, 
        clearSuggestions
    } = usePlacesAutocomplete();

    const handleSelect = async (address) =>{
        setValue('', false);
        setLocation(address)
        clearSuggestions();
    }

    return(
        <>
        <Combobox className='flex border-none mt-7 rounded-lg bg-gray-700' onSelect={handleSelect} >
            <ComboboxInput 
            className='myInput disabled:cursor-not-allowed'
            placeholder='Your location...' 
            type='text'
            value={value} 
            onChange={(e) => setValue(e.target.value)} 
            disabled={!ready}
            
            />
            <button className='hover:text-green-500 rounded-r-lg border bg-gray-700 border-none transition-all duration-200 ease-linear
                    p-2 shadow-lg dark:text-black dark:bg-gray-50 dark:hover:text-green-500
                    '><BsFillGeoAltFill size={'25px'}/></button>

            <ComboboxPopover className='text-xl text-white border-none shadow-lg outline-none rounded-lg transition-all'>
                <ComboboxList  className='bg-gray-700 dark:bg-white dark:text-black  rounded-lg outline-none' >
                    {status === "OK" && data.map(({place_id, description}) => <ComboboxOption className='rounded-lg hover:text-black' key={place_id} value={description}>{description}</ComboboxOption>)}
                </ComboboxList>
                
            </ComboboxPopover>
            
        </Combobox>
        <div className='h-[24px]'>
        {location}
        </div>
        

        </>
    )
}
