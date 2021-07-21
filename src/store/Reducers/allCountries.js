
const initialState = {
    countriesList:[]
}


export default function authReducer(state=initialState,action){
    switch(action.type){
        case "SET_COUNTRY_LIST":
        return {
            countriesList:action.payload
        }
                default:
        return state;
    }
}

