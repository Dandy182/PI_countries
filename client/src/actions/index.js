import axios from 'axios';

export function getCountries(){
    return async (dispatch) =>{
        let dataJson = axios.get(`http://localhost:3001/countries`)   
        
        return dispatch({
            type:'GET_COUNTRYES',
            payload: dataJson.data
        })
    }
}


// export function getCountryID(){

//     return async (dispatch) =>{
//         let dataJson = axios.get(`http://localhost:3001/countries/:id`)
//     }
// }