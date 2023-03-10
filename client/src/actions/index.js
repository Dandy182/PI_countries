import axios from 'axios';

export function getCountries(){
    return async (dispatch) =>{
        let dataJson = axios.get(`http://localhost:3001/countries`)   
        
        return dispatch({
            type:'GET_COUNTRIES',
            payload: dataJson.data
        })
    }
}