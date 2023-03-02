import { useState, useEffect } from 'react'

import './App.css'
import Question from './components/Question'
import axios from 'axios'

function App() {
  const [data, setData] = useState([])
  const [currentIdx, setCurrentIdx] = useState(0)

  async function fetchData() {
    const d = await axios.get('http://localhost:3000/questions')
    setData(d.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const questionEle = data && data.map((ele, idx) =>
    <Question
      key={idx}
      question={ele}
      handleBtnClick={handleBtnClick}
      questionId={idx}
    />
  )

  async function handleBtnClick(e, questionId, isBad) {
    e.preventDefault()

    try {
      if (!isBad) {
        const url = `http://localhost:3000/questions/${questionId}`
        const result = await axios.get(url)
        const oldScore = result.data.score || 0

        await axios.patch(url, {
          score: oldScore + 1
        }).then(() => console.log('Score updated!'))
      }
    } catch (e) {
      console.log(e)
    }

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
