
import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GetAllCountries } from './store/action';

export default function Question({countryName}) {

    return (
        <div className="mt-8 glassmorphism-25 p-8 text-center text-5xl text-white" style={{fontFamily: 'Otomanopee One'}}>
            What is the Capital town of <br/> <span>{countryName}</span>
        </div>
    )
}
