import { useState } from 'react'

import './App.css'
import Question from './components/Question'
import questionData from './data/questions.json'

function App() {
  const questionEle = questionData.map(ele => <Question question={ele} />)

  return (
    <div className=''>
      {questionEle}
    </div>
  )
}

export default App
