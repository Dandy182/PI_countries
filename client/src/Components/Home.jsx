import react from "react";
import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { getCountries } from '../actions';
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function Home(){
    const dispatch = useDispatch();
    //const allCountries = useSelector((state) = state.countries);

    useEffect(() =>{
        dispatch(getCountries());
    }, [])

    return(<div className="home">
        <div className="home__encabezado">
         <h1>Countries</h1>
         <nav className="navegacion">
            <Link to='/Activity'>
                Nueva Actividad
            </Link>
         </nav>
         <SearchBar />
        </div>

        <div className="contenedor" >
            
            <div className="countryList" >
                <div className="moduleOrder">
                    <div>
                        <p>Ordenar Por:</p>
                    <select>
                        <option value="asc">Ascendente</option>
                        <option value="desc">Descendente</option>
                    </select>
                    </div>
                </div>
                <p>Aun no hay paises</p>
            </div>
        </div>

    </div>)
    
}