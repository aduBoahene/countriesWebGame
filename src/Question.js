
import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GetAllCountries } from './store/action';

export default function Question({countryName}) {

    return (
        <div className="mt-8 p-8 text-center  text-white md:text-5xl" style={{fontFamily: 'Otomanopee One'}}>
            What is the Capital town of <br/> <span>{countryName}</span>
        </div>
    )
}
