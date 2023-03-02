import React from 'react'
import Option from './Option'
import shuffle from '../utils/shuffleArr'

export default function Question({ question, handleBtnClick, questionId }) {
    //const badOption = question.bad
    // shuffle array (consists of array and/or bad option text)
    const options = shuffle([...question.good, question.bad])

    // option id: 0 / 1 / -1 (bad option)
    return (
        <div className='p-3'>
            <h1 className='mb-12 text-4xl text-center'><b>{question['A/B Testing']}</b></h1>
            <div className='options flex'>
                {options.slice(0, 2).map((o, idx) => typeof o === 'string' ? <Option
                    key={idx}
                    text={o}
                    isBad={true}
                    handleBtnClick={handleBtnClick}
                    questionId={questionId}
                    optionId={-1}
                /> :
                    <Option
                        key={idx}
                        text={o.text}
                        isBad={false}
                        handleBtnClick={handleBtnClick}
                        questionId={questionId}
                        optionId={o.id}
                    />
                )}
            </div>
        </div>
    )
}
