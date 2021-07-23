
import React from 'react'
export default function Question({countryName}) {

    return (
        <div className="mt-8 p-8 text-center  text-white md:text-5xl" style={{fontFamily: 'Otomanopee One'}}>
            What is the Capital town of <br/> <span>{countryName}</span>
        </div>
    )
}
