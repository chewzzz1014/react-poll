import { useState, useEffect } from 'react'

import './App.css'
import Question from './components/Question'
import questionData from './data/questions.json'

function App() {
  useEffect(() => {
    localStorage.setItem('score', 0)
  }, [])
  console.log(localStorage.getItem('score'))

  const [currentIdx, setCurrentIdx] = useState(0)
  const questionEle = questionData.map((ele, idx) => <Question key={idx} question={ele} handleBtnClick={handleBtnClick} />)

  function handleBtnClick(e, isBad) {
    setCurrentIdx(currentIdx + 1)
    !isBad ? localStorage.setItem('score', Number(localStorage.getItem('score')) + 1) : ''
  }

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      {questionEle[currentIdx] ||
        <h1 className='font-bold text-3xl'>Thank You!</h1>
      }
    </div>
  )
}

export default App
