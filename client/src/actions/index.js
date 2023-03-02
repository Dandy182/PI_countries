import axios from 'axios';

export default function getCountries(){
    return async (dispatch) =>{
        let dataJson = axios(`http://localhost:3001/countries`)
    }

    return dispatch({
        type:'GET_COUNTRYES',
        payload: dataJson.data
    })

}