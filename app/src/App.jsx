import { useState, useEffect } from 'react'

import './App.css'
import Question from './components/Question'
import questionData from './data/questions.json'

function App() {
  const [data, setData] = useState({
    idx: 0,
    score: 0
  })
  console.log(`Current Score: ${data.score}`)

  const questionEle = questionData.map((ele, idx) => <Question key={idx} question={ele} handleBtnClick={handleBtnClick} />)

  function handleBtnClick(e, isBad) {
    const tmp = {
      idx: data.idx + 1,
      score: !isBad ? data.score + 1 : data.score
    }
    setData(tmp)
  }

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      {questionEle[data.idx] ||
        <h1 className='font-bold text-3xl'>Thank You!</h1>
      }
    </div>
  )
}

export default App
