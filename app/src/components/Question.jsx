import React from 'react'
import Option from './Option'
import shuffle from '../utils/shuffleArr'

export default function Question({ question, handleBtnClick }) {
    const badOption = question.bad
    // shuffle array
    const options = shuffle([...question.good, question.bad])

    return (
        <div className='p-3 border-2 border-red-600'>
            <h1 className='text-3xl text-center'><b>{question['A/B Testing']}</b></h1>
            <div className='flex-col'>
                {options.slice(0, 2).map((o, idx) => <Option key={idx} text={o} isBad={o === badOption} handleBtnClick={handleBtnClick} />)}
            </div>
        </div>
    )
}
