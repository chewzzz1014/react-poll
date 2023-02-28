import React from 'react'

export default function Option({ text, isBad, handleBtnClick }) {
    return (
        <div className='mt-5 flex-col items-center'>
            <p className={`text-xl ${isBad ? 'text-red-600' : ''}`}>{text}</p>
            <button
                className='rounded-md p-2 px-5 text-base mt-5 bg-gray-900 text-white font-bold'
                onClick={(e) => handleBtnClick(e, isBad)}
            >
                Vote
            </button>
        </div>
    )
}
