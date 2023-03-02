import React from 'react'
import Option from './Option'
import shuffle from '../utils/shuffleArr'

export default function Question({ question, handleBtnClick, questionId }) {
    const badOption = question.bad
    // shuffle array
    const options = shuffle([...question.good, question.bad])

    return (
        <div className='p-3'>
            <h1 className='mb-12 text-4xl text-center'><b>{question['A/B Testing']}</b></h1>
            <div className='options flex'>
                {options.slice(0, 2).map((o, idx) => <Option
                    key={idx}
                    text={o}
                    isBad={o === badOption}
                    handleBtnClick={handleBtnClick}
                    questionId={questionId}
                />
                )}
            </div>
        </div>
    )
}
