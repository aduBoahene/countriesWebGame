import React from 'react'
import Answers from './Answers'

export default function AnswerList() {

    

    return (
        <div className="md:flex justify-between">
             {sh.map(option=>(<Answers key={option.id} capital={option.capital}/>))}
        </div> 
    )
}
