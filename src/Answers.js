import React from 'react'

export default function Answers({capital,clickAnswer,backColor}) {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md md:max-w-6xl w-full cursor-pointer md:mx-auto" onClick={clickAnswer}>
           <div className={`mb-4 p-2 text-white ${backColor}`}>
               {capital}
            </div>
        </div>
    )
}
