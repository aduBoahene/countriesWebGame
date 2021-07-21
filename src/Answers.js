import React from 'react'

export default function Answers({capital}) {

    return (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md md:max-w-6xl mx-auto w-full">
           <div className="glassmorphism-25 mb-4 p-2 text-white">
               {capital}
            </div>
        </div>
    )
}
