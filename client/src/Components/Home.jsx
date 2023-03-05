/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries} from '../actions/index';
import {Link} from 'react-router-dom'

export default function Home(){

    const dispatch = useDispatch();

    const allCountries = useSelector((state) => state.countries);


    useEffect (()=>{
        dispatch(getCountries());
    }, [])

    function handleButton(e){
        e.preventDefault();
        
    }


    
    return(<div>
        <Link to='/characters'> Crear Actividad</Link>

        <h1>Countries</h1>

        <button>See All Countries</button>
    </div>)
}