import { useState } from 'react'

import './App.css'
import Option from './components/Option'
import questionData from './data/questions.json'
import shuffle from './utils/shuffleArr'

function App() {
  const questionEle = questionData.map(ele => {
    const badOption = ele.bad
    // shuffle array
    const options = shuffle([...ele.good, ele.bad])

    return (
      <>
        <h1><b>{ele['A/B Testing']}</b></h1>
        {options.slice(0, 2).map(o => <Option text={o} isBad={o === badOption} />)}
      </>
    )
  })

  return (
    <div className=''>
      {questionEle}
    </div>
  )
}

export default App
