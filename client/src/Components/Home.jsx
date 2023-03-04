import {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries} from '../actions/index';

export default function Home(){

    const dispatch = useDispatch();

    const allCountries = useSelector((state) => state.countries);


    useEffect (()=>{
        dispatch(getCountries());
    }, [dispatch])
    return(<div>
        
    </div>)
}