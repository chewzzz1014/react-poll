import { useState, useEffect } from 'react'
import './App.css'
import Question from './components/Question'
import updateScore from './controllers/updateScore'
import fetchData from './controllers/fetchData'

function App() {
  const [data, setData] = useState([])
  const [currentIdx, setCurrentIdx] = useState(0)

  useEffect(() => {
    fetchData(setData)
  }, [])

  const questionEle = data && data.map((ele, idx) =>
    <Question
      key={idx}
      question={ele}
      handleBtnClick={handleBtnClick}
      questionId={idx}
    />
  )

  async function handleBtnClick(e, questionId, optionId, isBad) {
    e.preventDefault()
    updateScore(e, questionId, optionId, isBad)
    setCurrentIdx(currentIdx + 1)
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
