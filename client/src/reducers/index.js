
const initialState ={
   countries: [] 
}



export default function reducer(state= initialState, action){

    switch(action.type){
        case 'GET_COUNTRYES':
            return {
                ...state,
                countries: action.payload
            }
            break
        }
    }