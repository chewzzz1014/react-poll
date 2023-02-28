import React from 'react'

export default function Option({ text, isBad }) {
    return (
        <div className={`${isBad ? 'text-red-600' : ''}`}>
            <p>{text}</p>
        </div>
    )
}
