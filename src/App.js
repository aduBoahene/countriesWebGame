import logo from './logo.svg'
import './App.css'
import Header from './Header'
import Question from './Question'
import AnswerList from './AnswerList'
import Answers from './Answers'

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllCountries } from './store/action'

function App() {

  const banku = Math.floor(Math.random() * 250) + 1

  const [answerBack, setAnswerBack] = useState('bg-gray-400')
  const [countryIndex, setCountryIndex] = useState(banku)

  let dispatch = useDispatch()

  useEffect(() => {
    const rr = Math.floor(Math.random())
    dispatch(GetAllCountries())
  }, [])

  const { countriesList } = useSelector((state) => state.allCountries)
  console.log('countries', countriesList)

  // const countryName = countriesList.filter(function (list, index) {
  //   let rnd = Math.floor(Math.random() * 250) + 1
  //   return index == rnd
  // })


  //1 random country
  var a = countriesList.map((country) => country)
  const num = 1
  const countryInQuestion = a
    .map((x) => ({ x, r: Math.random() }))
    .sort((a, b) => a.r - b.r)
    .map((a) => a.x)
    .slice(0, num)

  //3 random capitals
  const n = 3
  const sampleAnswers = a
    .map((x) => ({ x, r: Math.random() }))
    .sort((a, b) => a.r - b.r)
    .map((a) => a.x)
    .slice(0, n)

  const options = [...sampleAnswers, countryInQuestion[0]] 
  // console.log("optionsConcat",options)

  // console.log('random 3 + correct answer', sampleAnswers)

  //check for empty answer
  for(var a=0;a<sampleAnswers.length;a++){
    if(sampleAnswers[a].capital.length == 0){
      //alert("empty capital found")
      sampleAnswers[a].capital = sampleAnswers[a].name
    }
  }

  const shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[a[i], a[j]] = [a[j], a[i]]
    }
    return a
  }

  var sh = shuffle(options)
  // console.log('shuffled options', sh)

  //click answer logic
  const answerClick = (country) =>{
    
    if(countryInQuestion[0]?.capital == country.capital){
      //alert("Correct answer")
      setAnswerBack(`bg-green-900`)
    }else{
      //alert("Wrong answer")
      setAnswerBack(`bg-red-900`)
    }

    setCountryIndex(banku)
  }

  return (
    <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black h-screen flex min-h-screen pb-16">
      <div className="w-3/5 m-auto">
        <Header />
        <Question countryName={countryInQuestion[0]?.name} />
        <div className="md:flex justify-between">
          {sh&&sh.map((option) => (
            <Answers capital={option?.capital} clickAnswer={()=>answerClick(option)} backColor={answerBack}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
