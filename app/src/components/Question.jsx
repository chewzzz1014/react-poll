import React from 'react'
import Option from './Option'
import shuffle from '../utils/shuffleArr'

export default function Question({ question }) {
    const badOption = question.bad
    // shuffle array
    const options = shuffle([...question.good, question.bad])

    return (
        <div>
            <h1><b>{question['A/B Testing']}</b></h1>
            {options.slice(0, 2).map(o => <Option text={o} isBad={o === badOption} />)}
        </div>
    )
}
