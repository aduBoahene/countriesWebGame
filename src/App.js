import './App.css'
import Header from './Header'
import Question from './Question'
import Answers from './Answers'

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllCountries } from './store/action'

function App() {

  const banku = Math.floor(Math.random() * 250) + 1

  const [answerBack, setAnswerBack] = useState('bg-gray-400')
  const [countryIndex, setCountryIndex] = useState(banku)

  const [correctOptions, setCorrectOptions] = useState(0)
  const [totalQuestions, setTotalQuestions] = useState(0)

  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(GetAllCountries())
  }, [])

  const { countriesList } = useSelector((state) => state.allCountries)
  console.log('countries', countriesList)


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
 
  //check for empty answer
  for(var v=0;v<sampleAnswers.length;a++){
    if(sampleAnswers[v].capital.length == 0){
      sampleAnswers[v].capital = sampleAnswers[v].name
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

  //click answer logic
  const answerClick = (country) =>{
    
    if(countryInQuestion[0]?.capital == country.capital){
      setAnswerBack(`bg-green-900`)
      setCorrectOptions(correctOptions+1)
      // localStorage.setItem('score', correctOptions);
    }else{
      setAnswerBack(`bg-red-900`)
    }
    setTotalQuestions(totalQuestions+1)
    // localStorage.setItem('totalAttempts', totalQuestions);

    setCountryIndex(banku)
  }

  return (
    <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black h-screen flex min-h-screen pb-16">
      <div className="w-3/5 m-auto">
        <Header answered={correctOptions} total={totalQuestions}/>
        <Question countryName={countryInQuestion[0]?.name} />
        <div className="md:flex justify-between">
          {sh&&sh.map((option) => (
            // <Answers capital={option?.capital} clickAnswer={()=>answerClick(option)} backColor={answerBack}/>
            <Answers capital={option?.capital} clickAnswer={()=>answerClick(option)} backColor={answerBack}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
