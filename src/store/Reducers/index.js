import {combineReducers} from 'redux'
import auth from './authReducer'
import allCountries from './allCountries'



export default combineReducers({
    auth,allCountries
})